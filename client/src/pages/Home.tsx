import { useEffect, useState } from "react";
import { PostCard } from "../components/posts/PostCard"
import axios from "axios";

export const Home = () => {
  const [posts, setPosts] = useState([])
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
  },[]);
  return (
    <div className="w-full mb-20 text-gray-900 dark:text-gray-200 bg-transparent">
      <div className="mx-auto px-3 max-w-[1280px]">
        <div className="bg-gray-200 rounded-xl text-gray-950 dark:text-gray-100 dark:bg-[#212323] shadow-lg my-3 p-8 grid grid-cols-1 md:grid-cols-2">
          <div className="gap-y-5 grid">
            <div className="text-3xl md:text-6xl italic font-medium">The post name goes here</div>
            <div className="text-xl font-thin line-clip-3">The post description goes here</div>
            <a href="" className="font-bold underline text-xl">Continue reading...</a>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
          {
            posts && posts.length > 0 ? (
              [...posts].reverse().map((post: any) => <PostCard key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id}/>)
            ) : (
              <div className="text-center text-gray-950 dark:text-gray-100 dark:bg-gray-700 my-3 p-8">No posts found</div>
            )
          }

        </div>
      </div>
    </div>
  )
}
