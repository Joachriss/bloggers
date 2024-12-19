import postModel from '../models/postModel.js';

// create post
const createPost = async (req, res, next) => {
    try {
        console.log("Creating post:", req.body);
        console.log('Uploading image:', req.file);

        const { tittle, author, description, category } = req.body;
        
        if (!tittle || !author || !description || !category) {
            return res.json({ error: 'All fields are required' });
        }
        if(!req.file){
            return res.status(400).json({ error: 'Image is required' });
        }
        const image = `uploads/images/${req.file.filename}`;

        const newPost = await postModel.create({ tittle, author, description, category, image });
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}

// get all posts
const getAllPosts = async (req,res,next)=>{
    try{
        const posts = await postModel.find()
        res.status(200).json(posts);
    }
    catch(error){
        console.error("Error getting posts:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}
export { createPost , getAllPosts };