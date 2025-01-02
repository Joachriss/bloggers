import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { RecentPost } from "../components/posts/RecentPost";
import { CommentForm } from "../components/comments/CommentForm";
import { Comments } from "../components/comments/Comments";

export const PostDetails = () => {
    const params = useParams();
    const postid = params.postid;
    const [posts, setPosts] = useState([]);
    const [postTittle, setPostTittle] = useState('');
    const [postImage, setPostImage] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
    const [postDate, setPostDate] = useState('');
    const [postDescription, setPostDescription] = useState('');
    useEffect(() => {
        // get post by id
        const getPostDetails = async () => {
            try {
                const { data } = await axios.get(`getpost/${postid}`);
                setPostTittle(data.tittle);
                setPostImage(data.image);
                setPostAuthor(data.author);
                setPostDate(data.updatedAt);
                setPostDescription(data.description);
            } catch (error) {
                console.log(error);
            }
        }

        // get all posts
        const getPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);

            }
            catch (error) {
                console.error(error);
            }
        }

        getPosts();
        getPostDetails();
    }, []);
    return (
        <div className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 max-w-[1280px] mx-auto">
                <main className="col-span-1 md:col-span-2 flex flex-col gap-y-3 gap-x-4">
                    <div className="text-2xl md:text-4xl font-bold">{postTittle}</div>
                    <div>
                        <div className="text-lg text-gray-600 dark:text-gray-200">Author: <span className="font-bold">{postAuthor}</span></div>
                        <small className=" text-gray-500 dark:text-gray-400">Posted on: <span className="font-bold">{postDate.slice(0, 10)}</span></small>
                    </div>
                    <div className="w-full max-h-[70vh] mx-auto overflow-hidden my-2 rounded-lg">
                        <img src={`http://localhost:8000/uploads/images/${postImage}`} className='rounded-lg scale-110' alt="Post image" />
                    </div>
                    <div className="text-lg text-justify" dangerouslySetInnerHTML={{ __html: postDescription }}></div>
                    <Comments/>
                    <CommentForm />
                </main>
                <div className="col-span-1 flex gap-2 flex-col border-s-2 border-gray-600 py-2 px-5">
                    <div className="sticky top-36">
                        <div className="text-xl font-extrabold mb-4">Recent posts: <br /> <hr className="border border-gray-700 my-2" /></div>
                        {
                            posts && posts.length > 0 ? (
                                [...posts].reverse().map((post: any) => <RecentPost key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
                            ) : (
                                <div className="text-center text-gray-950 dark:text-gray-100 dark:bg-gray-700 my-3 p-8">No posts found</div>
                            )
                        }

                        <div className="italic font-thin text-lg mt-5 mb-2">Archieve:</div> <hr className="border border-gray-700 my-2"/>
                        <Link to="" className="text-blue-500 underline hover:font-bold">December2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">November2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">October2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">September2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">August2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">July2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">June2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">May2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">April2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">March2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">February2024</Link><br />
                        <Link to="" className="text-blue-500 underline hover:font-bold">January2024</Link><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
