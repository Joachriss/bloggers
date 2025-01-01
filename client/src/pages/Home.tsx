import { useEffect, useState } from "react";
import { PostCard } from "../components/posts/PostCard"
import axios from "axios";
import { Link } from "react-router-dom";

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
  }, []);
  return (
    <div className="w-full mb-20 text-gray-900 dark:text-gray-200 bg-transparent">
      <div className="mx-auto px-3 max-w-[1280px]">
        {[...posts].reverse().slice(0, 1).map((latest: any) => {
          return (
            <><div className="bg-gray-200 max-h-[50vh] rounded-xl bg-opacity-90 text-gray-950 dark:text-gray-100 dark:bg-[#212323] shadow-lg my-3  grid grid-cols-1 md:grid-cols-2"><div className="gap-y-5 grid p-8"><div className="text-3xl md:text-6xl italic font-medium">{latest.tittle}</div><div className="text-xl font-thin line-clamp-1" dangerouslySetInnerHTML={{ __html: latest.description }}></div><Link to={`/post/${latest._id}`} className="font-bold underline text-xl">Continue reading...</Link></div> <div className="p-0 overflow-hidden relative max-h-[50vh]"><img src={`http://localhost:8000/uploads/images/${latest.image}`} className="scale-110 w-full" alt="" /><div className="w-full h-full absolute top-0 bg-opacity-50 bg-gradient-to-r from-[#212323] to-transparent"></div></div></div ></>)
        })}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
          {
            posts && posts.length > 0 ? (
              [...posts].reverse().map((post: any) => <PostCard key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
            ) : (
              <div className="text-center text-gray-950 mx-auto dark:text-gray-100 dark:bg-gray-700 my-3 p-8">No posts found</div>
            )
          }

        </div>
      </div>
    </div>
  )
}
