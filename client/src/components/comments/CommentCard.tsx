import { FaUser } from "react-icons/fa6"

export const CommentCard = () => {
    return (
        <div className='hover:bg-[#212121] flex flex-row gap-y-2 gap-x-4 items-center my-2'>
            {/* <div className="overflow-hidden aspect-square rounded-full flex items-center min-w-20 max-w-20 max-h-16">
                <img src="" className='w-full scale-110 rounded-md' alt="User image" />
            </div> */}
            <div className="aspect-square overflow-hidden w-12 rounded-full bg-transparent border-[1px] flex items-center justify-center"><FaUser /></div>

            <div className='flex flex-col'>
                <div className=" line-clamp-5 font-bold text-sm">Name</div>
                <div className='text-md'>Maelezo mengi sana</div>
            </div>
        </div>
    )
}
