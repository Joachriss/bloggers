import axios from "axios";
import { useState, useEffect } from "react";
import { PostCard } from "../components/posts/PostCard";
import { useParams } from "react-router-dom";

export const PostCategory = () => {
    const params = useParams();
    const category = params.category;
    const [posts, setPosts] = useState<any>()
    useEffect(() => {
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
    }
        , [])
    return (
        <div className="w-full mb-52">
            <div className="mx-auto px-3 max-w-[1280px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
                    {
                        posts && posts.length > 0 ? (
                            [...posts].reverse().filter(categories => categories.category === category).map((post: any) => <PostCard key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id}  /> )
                        ) : (
                            <div className="col-span-full text-center font-bold text-xl text-gray-950 dark:text-gray-100 dark:bg-gray-700 my-3 p-8">No post found</div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
