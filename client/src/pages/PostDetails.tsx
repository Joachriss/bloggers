import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const PostDetails = () => {
    const params = useParams();
    const postid = params.postid;
    const [postTittle, setPostTittle] = useState('');
    const [postImage, setPostImage] = useState('');
    const [postDescription, setPostDescription] = useState('');
    useEffect(() => {
        const getPostDetails = async () => {
            try { 
                const {data} = await axios.get(`getpost/${postid}`);
                setPostTittle(data.tittle);
                setPostImage(data.image);
                setPostDescription(data.description);
            } catch (error) {
                console.log(error);
            }

        }
        getPostDetails();
    }, []);
    return (
        <div className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 max-w-[1280px] mx-auto">
                <div className="col-span-1 md:col-span-2 flex flex-col gap-3">
                    <div className="text-2xl md:text-4xl font-bold">{postTittle}</div>
                    <div className="w-full max-h-[60%] overflow-hidden my-2 rounded-lg">
                        <img src={`http://localhost:8000/uploads/images/${postImage}`} className='rounded-lg scale-110' alt="Post image" />
                    </div>
                    <div className="text-lg text-justify" dangerouslySetInnerHTML={{ __html: postDescription }}></div>
                </div>
                <div className="col-span-1">
                    <div className="text-xl">Recent posts</div>
                </div>
            </div>

        </div>
    )
}
