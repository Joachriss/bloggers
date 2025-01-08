import { Link } from 'react-router-dom'

export const RecentPost = (props:any) => {
  return (
    <Link to={`/post/${props._id}`} className='hover:bg-[#212121] hover:text-white flex flex-row gap-y-2 gap-x-4 px-2 items-center py-2'>
        <div className="overflow-hidden flex items-center min-w-20 max-w-20 max-h-16 min-h-16 rounded-md">
            <img src={ `http://localhost:8000/uploads/images/${props.image}`} className='w-full scale-110 rounded-md' alt="post image" />
        </div>
        <div className='flex flex-col'>
            <div className=" line-clamp-2 font-bold text-sm">{props.tittle}</div>
            <small className='text-[9pt]'>{props.date.slice(0,10)}</small>
        </div>
    </Link>
  )
}
