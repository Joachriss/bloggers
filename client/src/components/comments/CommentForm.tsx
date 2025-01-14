import axios from "axios";
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export const CommentForm = (props: any) => {
    const userContext = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [userComment, setUserComment] = useState('');
    const postId = props.postId;
    useEffect(() => {

    }, []);

    const handleComment = async (e: React.SyntheticEvent) => {
        e.preventDefault;
        
        try {
            const userId = userContext?.user?.id || null;
            if (userId) {
                const response = await axios.post('/createcomment', { postId, userId, userComment });
                toast.success(response.data.message);
            } else {
                navigate('/login', { state: { from: location } });
            }
        }
        catch (error) {
            console.log(error);
            toast.error('Comment not created, Something went wrong please check connection or try again');
        }
    }
    return (
        <div className="max-w-4xl mb-2 mt-1">
            <textarea onChange={(e) => setUserComment(e.target.value)} name="comment" placeholder="Write your comment here..." className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800'></textarea>
            <button type="submit" onClick={handleComment} className="p-2 bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex ms-auto">Comment</button>
        </div>
    )
}
