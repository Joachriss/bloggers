import axios from "axios";
import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa6"

export const CommentCard = (props:any) => {
    const [user,setUser] = useState<any>();
    useEffect(()=>{
        const getUser = async () => {
            try {
                const response = await axios.get('/posts');
                setUser(response.data);

            }
            catch (error) {
                console.error(error);
            }
        }

        getUser();

    },[]);
    return (
        <div className='flex flex-row gap-y-2 gap-x-2 my-2'>
            {/* <div className="overflow-hidden aspect-square rounded-full flex items-center min-w-20 max-w-20 max-h-16">
                <img src="" className='w-full scale-110 rounded-md' alt="User image" />
            </div> */}
            <div className="overflow-hidden min-w-12 max-w-12 h-12 aspect-square rounded-full bg-transparent border-[1px] flex items-center justify-center">
                <FaUser />
            </div>
            <div className='flex flex-col'>
                <div className=" line-clamp-5 font-bold text-sm">{user.name}</div>
                <small className="text-sm">{props.date}</small>
                <div className='text-md'>{props.comment}</div>
            </div>
        </div>
    )
}
