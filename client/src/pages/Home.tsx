import { useEffect, useState } from "react";
import { PostCard } from "../components/posts/PostCard"
import axios from "axios";
import { Link } from "react-router-dom";
import { HorizontalScrollPost } from "../components/posts/HorizontalScrollPost";
import toast from "react-hot-toast";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";
import DOMPurify from 'dompurify';

export const Home = () => {
  const baseImageUrl = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000';
  const [posts, setPosts] = useState([]);
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
  }, []);
  return (
    <div className="w-full mb-20 text-gray-900 dark:text-gray-200 bg-transparent">
      <div className="mx-auto px-3 max-w-[1280px]">
        {
          loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <DefaultSpinner />
            </div>
          ) :
            (
              ""
            )
        }

        {[...posts].reverse().slice(0, 1).map((latest: any) => {
          return (
            <div key={latest._id}><div className="max-h-[50vh] rounded-xl text-gray-100 bg-[#212121] shadow-lg my-3  grid grid-cols-1 md:grid-cols-2"><div className="gap-y-5 grid p-8"><div className="text-3xl md:text-6xl italic font-medium">{latest.tittle}</div><div className="text-xl font-thin line-clamp-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(latest.description) }}></div><Link to={`/post/${latest._id}`} className="font-bold underline text-xl">Continue reading...</Link></div> <div className="p-0 overflow-hidden rounded-lg relative max-h-[50vh] md:block hidden"><img src={`${baseImageUrl}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${latest.image}`} className="scale-110 w-full rounded-lg" alt="" /><div className="w-full h-full absolute top-0 bg-opacity-90 bg-gradient-to-r from-[#212121] to-transparent"></div></div></div ></div>)
        })}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
          {
            posts && posts.length > 0 ? (
              [...posts].reverse().slice(0, 6).map((post: any) => <PostCard key={post._id} image={post.image} creator={post.createdBy} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.createdAt} _id={post._id} />)
            ) : (
              <div className="text-center col-span-full text-gray-950 mx-auto dark:text-gray-100 my-3 p-8">No posts found</div>
            )
          }
        </div>

        <div className="text-2xl mt-10 font-bold">#Exclusives😉</div>
        {/* <hr className="my-2" /> */}
        <div className="max-h-fit flex flex-nowrap gap-x-2 overflow-x-scroll w-full">
          {
            posts && posts.length > 0 ? (
              [...posts].reverse().slice(0, 6).map((post: any) => <HorizontalScrollPost key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} views={post.viewedBy.length} date={post.updatedAt} _id={post._id} />)
            ) : (
              <div className="text-center col-span-full text-gray-950 mx-auto dark:text-gray-100 my-3 p-8">No posts found</div>
            )
          }
        </div>
        <div className="w-full mt-3 text-center">
          <button className="text-gray-300 font-bold p-2 hover:text-gray-400 border border-gray-500 rounded-lg w-fit">View more</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10 justify-between">
          {
            posts && posts.length > 0 ? (
              [...posts].reverse().slice(6, 6).map((post: any) => <PostCard key={post._id} image={post.image} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />)
            ) : (
              ""
            )
          }
        </div>
      </div>
    </div>
  )
}
