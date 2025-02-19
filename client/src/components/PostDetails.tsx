import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CommentSection } from "./comments/CommentSection";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { LikeButton } from "./LikeButton";
import { NumberFormatter } from "./NumberFormatter";
import { SubscribeDialog } from "./utils/SubscribeDialog";

export const PostDetails = (props: any) => {
    const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL || 'http://localhost:8000';
    const postId = props.postid;
    const [postTittle, setPostTittle] = useState('');
    const [postImage, setPostImage] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
    const [postDate, setPostDate] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postComments, setPostComments] = useState([]);
    const [postViews, setPostViews] = useState([]);
    const [postLikes, setPostLikes] = useState<any[]>([]);
    const [hasUserLiked, setHasUserLiked] = useState(false);
    const [category, setCategory] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);


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
                setCategory(data.category);

                if (userId && userId !== null) {
                    setHasUserLiked(postLikes.some(liker => liker.toString() === userId));
                }

                // subscription checker
                const paymentList = await axios.get('/getallpayments');

                if (category == 'Exclusive') {
                    const userPayments = paymentList.data.filter((payment: any) => payment?.userId?._id.toString() == userId);
                    const latestPayment = userPayments.filter((payment: any) => new Date(payment?.expiresAt).getTime() > Date.now())
                        .sort((a: any, b: any) => new Date(b.expiresAt).getTime() - new Date(a.expiresAt).getTime())[0];
                    if ( latestPayment) {
                        setIsSubscribed(true);
                    }
                }
                if (userId == null && category == 'Exclusive') {
                    setIsSubscribed(true);
                }
            } catch (error) {
                console.log(error);
                toast.error("something went wrong, please check connection or try again");
            }
        }
        getPostDetails();

    }, [postId, userId, hasUserLiked, postLikes.length]);
    return (
        <div className=" flex flex-col gap-y-3 gap-x-4">
            <div className="text-2xl md:text-4xl font-bold">{postTittle}</div>
            <div>
                <div className="text-lg text-gray-600 dark:text-gray-200">Author: <span className="font-bold">{postAuthor}</span></div>
                <div className="flex flex-row justify-between items-center">
                    <small className=" text-gray-500 dark:text-gray-400">Posted on: <span className="font-bold">{postDate.slice(0, 10)}</span></small>
                    <div className="text-sm flex flex-row items-center gap-x-1 font-bold"> <NumberFormatter value={postViews.length} /><span className="text-gray-500 dark:text-gray-400">Views</span></div>
                </div>
            </div>
            <div className="w-full max-h-[70vh] mx-auto overflow-hidden mt-2 rounded-lg">
                <img src={`${baseImageUrl}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${postImage}`} className='rounded-lg scale-110' alt="Post image" />
            </div>
            <div className="grid grid-cols-3 justify-between text-center items-center">
                <LikeButton postId={postId} userId={userId} setHasUserLiked={setHasUserLiked} likes={postLikes.length} liked={hasUserLiked} />
                <div className=" text-sm font-bold flex flex-row items-center justify-center gap-x-1 border-x-2"><NumberFormatter value={postViews.length} /> <span className="text-gray-500 dark:text-gray-400">Views</span></div>
                <div className=" text-sm font-bold flex flex-row items-center justify-center gap-x-1"><NumberFormatter value={postComments.length} /><span className="text-gray-500 dark:text-gray-400">Comments</span></div>
            </div>
            <hr className="mb-2 border border-green-500" />
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: postDescription }}></div>
            <CommentSection comments={postComments} postid={postId} />
            {category == 'Exclusive' ? <SubscribeDialog isSubscribed={!isSubscribed} /> : ""}
        </div>
    )
}
