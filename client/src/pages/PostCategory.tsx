import axios from "axios";
import { useState, useEffect } from "react";
import { PostCard } from "../components/posts/PostCard";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";

export const PostCategory = () => {
    const params = useParams();
    const category = params.category;
    const [posts, setPosts] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setLoading(false);
                setPosts(response.data);

            }
            catch (error) {
                console.error(error);
                setLoading(false);
                toast.error('Something went wrong please check connection or try again');
            }
        }
        getPosts();
    }
        , [])
    return (
        <div className="w-full mb-52">
            <div className="mx-auto px-3 max-w-[1280px] mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
                    {
                        loading ? (
                            <div className="flex col-span-full h-screen items-center justify-center">
                                <DefaultSpinner />
                            </div>
                        ) : (
                            posts && posts.length > 0 ? (
                                category !== 'all' ? (
                                    [...posts].reverse().filter(posts => posts.category === category).map((post: any) => <PostCard key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
                                ) : (
                                    [...posts].reverse().map((post: any) => <PostCard key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
                                )
                            ) : (
                                <div className="col-span-full text-center font-bold text-xl text-gray-950 dark:text-gray-100 dark:bg-transparent my-3 p-8">No post found</div>
                            )
                        )
                    }

                </div>
            </div>
        </div>
    )
}
