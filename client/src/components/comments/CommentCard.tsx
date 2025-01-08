import { FaUser } from "react-icons/fa6"

export const CommentCard = (props:any) => {

    return (
        <div className='flex flex-row gap-y-2 gap-x-4 my-2'>
            {/* <div className="overflow-hidden aspect-square rounded-full flex items-center min-w-20 max-w-20 max-h-16">
                <img src="" className='w-full scale-110 rounded-md' alt="User image" />
            </div> */}
            <div className="overflow-hidden min-w-11 max-w-11 h-11 aspect-square rounded-full bg-transparent border-[1px] flex items-center justify-center">
                <FaUser />
            </div>
            <div className='flex flex-col'>
                <div className=" line-clamp-5 font-bold text-sm">{props.userName}</div>
                <small className="text-[8pt]">{props.date.slice(0,10)}</small>
                <div className='text-md mt-1'>{props.comment}</div>
            </div>
        </div>
    )
}
