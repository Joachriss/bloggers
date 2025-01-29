import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { NumberFormatter } from "./NumberFormatter";

export const LikeButton = (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { postId, userId, likes, liked, setHasUserLiked } = props;
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likedCount, setLikedCount] = useState<number>(0);

    useEffect(() => {
        setIsLiked(liked);
        setLikedCount(likes);
    }, [liked, likes]);

    const handleLike = async () => {
        if (isLiked === true && userId !== null) {
            await axios.put(`/likepost/${postId}/${userId}`).then((res) => toast.success(res.data.message));
            setLikedCount(likedCount - 1);
            setHasUserLiked(false);
        } else if (isLiked === false && userId !== null) {
            await axios.put(`/likepost/${postId}/${userId}`).then((res) => toast.success(res.data.message));
            setLikedCount(likedCount + 1);
            setHasUserLiked(true);
        } else {
            navigate('/login', { state: { from: location } });
        }
    }

    return (
        <button className="flex rounded-lg justify-center items-center p-1 gap-x-1" onClick={handleLike}>
            <NumberFormatter value={likedCount} />
            {isLiked ? <FaHeart color="red" /> : <FaHeart color="gray" />}
        </button>
    )
}
