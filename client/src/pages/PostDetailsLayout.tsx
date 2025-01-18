import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { RecentPost } from "../components/posts/RecentPost";
import { PostDetails } from "../components/PostDetails";
import { toast } from "react-hot-toast";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";

export const PostDetailsLayout = () => {
    const params = useParams();
    const postId = params.postid;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // get all posts
        const getPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setLoading(false);
                setPosts(response.data);

            }
            catch (error) {
                setLoading(false);
                toast.error('Something went wrong please check connection or try again');
                console.error(error);
            }
        }


        getPosts();
    }, []);
    return (
        <div className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 max-w-[1280px] mx-auto">
                <main className="col-span-1 md:col-span-2">
                    {/* Output for post details */}
                    {
                        loading ? (
                            <div className="flex h-screen items-center justify-center">
                                <DefaultSpinner />
                            </div>
                        ) : (
                            <PostDetails postid={postId} key={window.location.pathname} />
                        )
                    }

                </main>
                <div className="col-span-1 flex gap-2 flex-col border-s-2 border-gray-600 py-2 px-4">
                    <div className="sticky top-36">
                        <div className="text-xl font-extrabold mb-4">Recent posts: <br /> <hr className="border border-gray-700 my-2" /></div>
                        {
                            posts && posts.length > 0 ? (
                                [...posts].reverse().slice(0, 5).map((post: any) => <RecentPost key={post._id} views={post.viewedBy.length} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
                            ) : (
                                <div className="text-center text-gray-950 dark:text-gray-100 dark:bg-gray-700 my-3 p-8">No posts found</div>
                            )
                        }

                        <div className="italic font-thin text-lg mt-5 mb-2">Archieve:</div> <hr className="border border-gray-700 my-2" />
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
