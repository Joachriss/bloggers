import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export const LikeButton = (props:any) => {
    const {postId,userId, likes,liked} = props;
    const [isLiked, setIsLiked] = useState<boolean>(liked);
    const [likedCount, setLikedCount] = useState<number>(0);
    console.log(isLiked);

    useEffect(() => {
        setLikedCount(likes);
        setIsLiked(liked);
    }, [likes, liked]);


    const handleLike = async () => {
        console.log(isLiked);
        if (isLiked === true) {
            await axios.put(`/likepost/${postId}/${userId}`);
            setLikedCount(likedCount - 1);
            setIsLiked(false);
        } else {
            await axios.put(`/likepost/${postId}/${userId}`); 
            setLikedCount(likedCount + 1);
            setIsLiked(true);
        }
    }

    return (
        <button className="flex rounded-lg justify-center items-center p-1 gap-x-1" onClick={handleLike}>
            {likedCount}
            {isLiked ? <FaHeart color="red" /> : <FaHeart color="gray" />}
        </button>
    )
}
