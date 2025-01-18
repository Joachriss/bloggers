import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export const LikeButton = (props:any) => {
    const postId = props.postId;
    const userId = props.userId;
    const [isLiked, setIsLiked] = useState(false);
    const [likedCount, setLikedCount] = useState(0);

    useEffect(() => {
        if (props.likes) {
            setLikedCount(props.likes);
        }
    }, [props.likes]);

    const handleLike = async (e: React.SyntheticEvent) => {
        e.preventDefault;
        if (isLiked) {
            setLikedCount(likedCount - 1);
            setIsLiked(false);
            // await axios.put(`/post/${postId}/${userId}/${isLiked}`);
        } else {
            setLikedCount(likedCount + 1);
            setIsLiked(true);
            // await axios.put(`/post/${postId}/${userId}/${isLiked}`);
        }
    }
    
  return (
    <button className="flex justify-center items-center p-1 gap-x-1"  onClick={handleLike}>
        {likedCount}
        {isLiked ? <FaHeart color="red" /> : <FaHeart color="gray" />}
    </button>
  )
}
