import postModel from '../models/postModel.js';
import fs, { existsSync } from 'fs';
import path from 'path';
import { exit } from 'process';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { stringify } from 'querystring';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function to remove image from the file
function removeImage(image) {
    const imagePath = path.join(__dirname, "../uploads/images", image);
    fs.unlinkSync(imagePath);
}



// create post
const createPost = async (req, res, next) => {
    try {
        const { tittle, author, description, category } = req.body;

        if (!tittle || !author || !description || !category) {
            return res.json({ error: 'All fields are required' });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Image is required' });
        }
        const image = req.file.filename;

        const newPost = await postModel.create({ tittle, author, description, category, image, createdAt: Date.now() });
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}



// get all posts
const getAllPosts = async (req, res, next) => {
    try {
        const posts = await postModel.find()
            .populate({ path: 'comments', select: 'userComment' })
            .populate({ path: 'viewedBy', select: 'name' });

        res.json(posts);
    }
    catch (error) {
        console.error("Error getting posts:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}



const getPostForEditing = async (req, res) => {
    const postId = req.params.postId;
    const post_id = mongoose.Types.ObjectId.createFromHexString(postId);
    try {
        const post = await postModel.findById(post_id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(post);
    }
    catch (error) {
        console.error("Error getting post:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}


// get post by id
const getPostById = async (req, res) => {
    const { postId, userId } = req.params;
    var userObjectId = null;

    // checking if userId is in valid format and converting it to ObjectId
    if (userId && userId !== 'null') {
        if (mongoose.Types.ObjectId.isValid(userId)) {
            userObjectId = mongoose.Types.ObjectId.createFromHexString(userId);
        }
    }

    try {
        const post = await postModel.findById(postId).populate({ path: 'comments', populate: { path: 'userId', select: 'name' } }).populate({ path: 'viewedBy', select: 'name' });

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // add user to viewedBy by array
        if (userObjectId !== null && !post.viewedBy.some(viewer => viewer.equals(userObjectId))) {
            post.viewedBy.push(userObjectId);
            await post.save();
            console.log('User added to viewedBy');
        }

        res.status(200).json(post);
    }
    catch (error) {
        console.error("Error getting post:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}


// update post likes
const handleLikes = async (req, res) => {
    const { postId, userId } = req.params;
    console.log(userId);
    console.log(postId);
    console.log('clicked');

    var userObjectId = null;
    if (userId && userId !== null && mongoose.Types.ObjectId.isValid(userId)) {
        userObjectId = mongoose.Types.ObjectId.createFromHexString(userId);
        console.log('converted');
    }

    try {
        console.log(userObjectId);
        const post = await postModel.findById(postId);
        if(!post){
            return res.status(404).json({ error: 'Post not found' });
        }
        const hasLiked =  post.likedBy.some(liker => liker.equals(userObjectId));
        console.log(hasLiked);
        if (hasLiked) {
            post.likedBy.pull(userObjectId);
            await post.save();
            console.log('Unliked');
        }
        else {
            console.log(hasLiked);
            post.likedBy.push(userObjectId);
            await post.save();
            console.log('Liked');
            
        }
    } catch (error) {
        console.error("Error updating post likes:", error);
    }
}

// edit post
const editPost = async (req, res, next) => {
    const postId = req.params.id;
    try {
        const post = await postModel.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        post.tittle = req.body.tittle || post.tittle;
        post.author = req.body.author || post.author;
        post.description = req.body.description || post.description;
        post.category = req.body.category || post.category;
        if (req.file) {
            // delete old image
            removeImage(post.image);

            // saving new image
            post.image = req.file.filename;
        }
        post.image = post.image;
        post.updatedAt = Date.now();
        await post.save();
        res.status(200).json({ message: 'Post updated successfully' });
    }
    catch (error) {
        console.error("Error editing post:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}




// delete post
const deletePost = async (req, res, next) => {
    const postId = req.params.id;
    const post = await postModel.findById(postId);

    // remove image and post
    removeImage(post.image);
    await post.deleteOne({ _id: postId });
    res.status(200).json({ message: 'Post deleted successfully' });
}

export { createPost, getAllPosts, editPost, getPostById, deletePost, getPostForEditing, handleLikes };