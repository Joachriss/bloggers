import { Link } from "react-router-dom"
import { AdminPostItem } from "../../components/posts/AdminPostItem"
import { useEffect, useState } from "react";
import axios from "axios";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

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
    <div className="flex flex-col gap-2 m-2">
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-bold flex justify-between">Posts</div>
        <Link to='/admin/createpost' className="rounded-lg p-2 border-gray-900 border-2 dark:border-gray-200 dark:text-gray-200 text-gray-900">+ New post</Link>
      </div>
      {
        [...posts].reverse().map((post: any) => {
          return <AdminPostItem key={post._id} tittle={post.tittle} author={post.author} description={post.description} category={post.category} image={`../server/${post.image}`} date={post.createdAt} />
          // return <AdminPostItem key={post._id} tittle={post.tittle} author={post.author} description={post.description} category={post.category} image={`../server/uploads/images/${post.image}`} date={post.createdAt} />
        })
      }
      <AdminPostItem tittle="tittle" author="author" description="description" category="category" image="image" />
    </div>
  )
}