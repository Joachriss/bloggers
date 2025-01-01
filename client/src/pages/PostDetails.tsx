import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { RecentPost } from "../components/posts/RecentPost";
import { CommentForm } from "../components/CommentForm";

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
                    <div className="w-full max-h-[50%] mx-auto overflow-hidden my-2 rounded-lg">
                        <img src={`http://localhost:8000/uploads/images/${postImage}`} className='rounded-lg scale-110' alt="Post image" />
                    </div>
                    <div className="text-lg text-justify" dangerouslySetInnerHTML={{ __html: postDescription }}></div>
                    <CommentForm />
                </main>
                <div className="col-span-1 flex gap-2 flex-col border-s-2 border-gray-600 py-2 px-5">
                    <div className="sticky top-36">
                        <div className="text-xl font-extrabold mb-4">Recent posts: <br /> <hr className="border border-gray-900 my-2" /></div>
                        {
                            posts && posts.length > 0 ? (
                                [...posts].reverse().map((post: any) => <RecentPost key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
                            ) : (
                                <div className="text-center text-gray-950 dark:text-gray-100 dark:bg-gray-700 my-3 p-8">No posts found</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
