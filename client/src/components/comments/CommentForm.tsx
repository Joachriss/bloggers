import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";

export const CommentForm = (props:any) => {
    const [comments,setComments] = useState('');
    const postId = props.postId;
    const userId = props.userId;

    const handleComment = async (e: React.SyntheticEvent) => {
        e.preventDefault;
        try{
            const response = await axios.post('/createcomment',{postId,userId,comments});
            toast.success(response.data.message);
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className="max-w-4xl">
            <div className='text-xl font-bold mb-2'>
                {/* #Comment */}
            </div>
            <textarea onChange={(e)=>setComments(e.target.value)} name="comment"  placeholder="Write your comment..." className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' id="" rows={4}></textarea>
            <button type="submit" onClick={handleComment} className="p-2 bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex ms-auto">Comment</button>
        </div>
    )
}
