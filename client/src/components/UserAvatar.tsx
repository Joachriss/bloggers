import { FaUser } from "react-icons/fa6"
import user from "../assets/images/user.png";

export const UserAvatar = (props:any) => {
    const baseImageUrl = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000';
    let userImage = props.userImage;

    const userImageCheck = ()=>{
        if (!userImage) {
            return null;
        }
        userImage = userImage.toString();
        userImage = userImage.trim();
        return userImage.startsWith('http') ? userImage : `${baseImageUrl}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${userImage}`; 
    }

    const userAvatar = userImageCheck() || user;
    return (
        <div className="aspect-square overflow-hidden w-8 rounded-full bg-transparent border-[1px] border-gray-500 flex items-center justify-center">
                <img src={userAvatar} className='w-full h-full rounded-full object-cover' alt="User avatar"/>
                    
        </div>
    )
}