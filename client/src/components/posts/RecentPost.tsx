import { FaEye } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { NumberFormatter } from '../NumberFormatter'

export const RecentPost = (props: any) => {
    const baseImageUrl = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000';
    return (
    <Link to={`/post/${props._id}`} className='dark:hover:bg-[#212121] hover:text-black  hover:bg-[#f1f1f1] dark:hover:text-white flex flex-row gap-y-2 gap-x-4 px-2 items-center py-2'>
      <div className="overflow-hidden flex items-center min-w-20 max-w-20 max-h-16 min-h-16 rounded-md">
        <img src={`${baseImageUrl}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${props.image}`} className='w-full scale-110 rounded-md' alt="post image" />
      </div>
      <div className='flex flex-col'>
        <div className=" line-clamp-2 font-bold text-sm">{props.tittle}</div>
        <div className='flex flex-row gap-x-2 text-[9pt]'>
            {props.date.slice(0, 10)} 
            <div className='flex flex-row items-center gap-x-1'>
              <NumberFormatter value={props.views}/><FaEye />
            </div>
        </div>
      </div>
    </Link>
  )
}
