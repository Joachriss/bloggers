import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CommentSection } from "./comments/CommentSection";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { LikeButton } from "./LikeButton";

export const PostDetails = (props: any) => {
    const postId = props.postid;
    const [postTittle, setPostTittle] = useState('');
    const [postImage, setPostImage] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
    const [postDate, setPostDate] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postComments, setPostComments] = useState([]);
    const [postViews, setPostViews] = useState([]);
    const [postLikes,setPostLikes]= useState<any[]>([]);
    const [hasUserLiked,setHasUserLiked] = useState(false);
    
    
    const userContext = useContext(UserContext);
    const userId = userContext?.user?.id || null;
    
    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const { data } = await axios.get(`getpostbyid/${postId}/${userId}`);
                setPostTittle(data.tittle);
                setPostImage(data.image);
                setPostAuthor(data.author);
                setPostDate(data.updatedAt);
                setPostDescription(data.description);
                setPostComments(data.comments);
                setPostViews(data.viewedBy);
                setPostLikes(data.likedBy);
                
                if(userId && userId !== null){
                    setHasUserLiked(postLikes.some(liker => liker.toString() === userId));
                }
                
            } catch (error) {
                console.log(error);
                toast.error("something went wrong, please check connection or try again");
            }
        }
        getPostDetails();

    }, [postId,userId,hasUserLiked,postLikes.length]);
    return (
        <div className=" flex flex-col gap-y-3 gap-x-4">
            <div className="text-2xl md:text-4xl font-bold">{postTittle}</div>
            <div>
                <div className="text-lg text-gray-600 dark:text-gray-200">Author: <span className="font-bold">{postAuthor}</span></div>
                <div className="flex flex-row justify-between items-center">
                    <small className=" text-gray-500 dark:text-gray-400">Posted on: <span className="font-bold">{postDate.slice(0, 10)}</span></small>
                    <div className="text-sm  font-bold"> {postViews.length} <span className="text-gray-500 dark:text-gray-400">Views</span></div>
                </div>
            </div>
            <div className="w-full max-h-[70vh] mx-auto overflow-hidden mt-2 rounded-lg">
                <img src={`http://localhost:8000/uploads/images/${postImage}`} className='rounded-lg scale-110' alt="Post image" />
            </div>
            <div className="grid grid-cols-3 justify-between text-center items-center">
                <LikeButton postId={postId} userId={userId} setHasUserLiked={setHasUserLiked} likes={postLikes.length} liked={hasUserLiked}/>
                <div className=" text-sm font-bold border-x-2">{postViews.length} <span className="text-gray-500 dark:text-gray-400">Views</span></div>
                <div className=" text-sm font-bold">{postComments.length} <span className="text-gray-500 dark:text-gray-400">Comments</span></div>
            </div>
            <hr className="mb-2 border border-green-500" />
            <div className="text-lg text-justify" dangerouslySetInnerHTML={{ __html: postDescription }}></div>
            <CommentSection comments={postComments} postid={postId} />
        </div>
    )
}
