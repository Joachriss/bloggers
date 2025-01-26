import { Link } from 'react-router-dom'

export const SearchPost = (props:any) => {
    const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL || 'http://localhost:8000';
    return (
        <>
            <Link to={`/post/${props._id}`} onClick={props.closeSearch} className='hover:bg-[#212121] hover:text-white flex flex-row gap-y-1 gap-x-4 px-2 items-center py-2'>
                <div className="overflow-hidden flex items-center min-w-10 max-w-10 max-h-8 min-h-8 rounded-md">
                    <img src={`${baseImageUrl}/uploads/images/${props.image}`} className='w-full scale-110 rounded-md' alt="post image" />
                </div>
                <div className='flex flex-col'>
                    <div className=" line-clamp-2 font-bold text-sm">{props.tittle}</div>
                </div>
            </Link>
        </>
    )
}
