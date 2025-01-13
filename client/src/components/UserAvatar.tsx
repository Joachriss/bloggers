import { FaUser } from "react-icons/fa6"

export const UserAvatar = (props:any) => {
    return (
        <div className="aspect-square overflow-hidden w-8 rounded-full bg-transparent border-[1px] flex items-center justify-center">
            {
                props.userImage ? <img src={`http://localhost:8000/uploads/images/profile/${props.userImage}`} alt="User avatar" /> : <FaUser/>
            }
        </div>
    )
}
