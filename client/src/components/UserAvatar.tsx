import { FaUser } from "react-icons/fa6"
import user from "../assets/images/user.png";

export const UserAvatar = (props:any) => {
    const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL || 'http://localhost:8000';
    let userImage = props.userImage;
    console.log(userImage)

    const userImageCheck = ()=>{
        if (!userImage) {
            return null;
        }
        userImage = userImage.toString();
        userImage = userImage.trim();
        return userImage.startsWith('http') ? userImage : `${baseImageUrl}/uploads/images/${userImage}`; 
    }

    const userAvatar = userImageCheck();
    return (
        <div className="aspect-square overflow-hidden w-8 rounded-full bg-transparent border-[1px] flex items-center justify-center">
            {
                userAvatar ? <img src={userAvatar} className='w-full h-full rounded-full object-cover' alt="User avatar" onError={(e) => {
                    e.currentTarget.src = user;
                }} /> : <FaUser/>
            }
        </div>
    )
}
