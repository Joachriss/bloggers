import axios from "axios";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export const LikeButton = (props:any) => {
    const postid = props.postId;
    const userId = props.userId;
    const [liked, setLiked] = useState(false);
    const [likedCount, setLikedCount] = useState(props.likes);

    const handleLike = async (e: React.SyntheticEvent) => {
        e.preventDefault;
        if (liked) {
            setLikedCount(likedCount - 1);
            setLiked(false);
            // await axios.put(`/post/${props.postId}/unlike`);
        } else {
            setLikedCount(likedCount + 1);
            setLiked(true);
            // await axios.put(`/post/${props.postId}/like`);
        }
    };
    
  return (
    <button className="flex justify-center items-center p-1 gap-x-1"  onClick={handleLike}>
        {likedCount}
        {liked ? <FaHeart color="red" /> : <FaHeart color="gray" />}
    </button>
  )
}
