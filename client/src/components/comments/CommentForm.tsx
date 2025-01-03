import axios from "axios";
import { useState } from "react"

export const CommentForm = (props:any) => {
    const [comment,setComment] = useState('');
    const postId = props.postId;
    const userId = props.userId;

    const handleComment = (e: React.SyntheticEvent) => {
        e.preventDefault;
        try{
            axios.post('/createcomment',{postId,userId,comment});
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
            <textarea onChange={(e)=>setComment(e.target.value)} name="comment"  placeholder="Write your comment..." className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' id="" rows={4}></textarea>
            <button type="submit" onClick={handleComment} className="p-2 bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex ms-auto">Comment</button>
        </div>
    )
}
