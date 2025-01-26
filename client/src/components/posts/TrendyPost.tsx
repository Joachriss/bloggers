import { FaComment, FaEye } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { NumberFormatter } from "../NumberFormatter"

export const TrendyPost = (props: any) => {
    const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL || 'http://localhost:8000';
    return (
    <Link reloadDocument={true} to={`post/${props._id}`} className='overflow-hidden rounded-lg relative w-full max-h-80'>
      <img src={`${baseImageUrl}/uploads/images/${props.image}`} className="scale-150 object-cover" alt="Trending post picture" />
      <div className="absolute top-0 bg-opacity-70 bg-black w-full h-full p-3">
        <div className="text-sm w-fit bg-orange-500 p-2 rounded text-white font-bold mb-auto">Trending</div>
        <div className='flex absolute bottom-3 flex-col gap-y-1'>
          <div className="text-lg text-white font-semibold md:line-clamp-2">
            {props.tittle}
          </div>
          <small className="text-gray-200">{props.date.slice(0,10)}</small>
          <div className="flex flex-row items-center gap-x-4">
            <div className="flex flex-row items-center gap-x-1">
              <div><NumberFormatter value={props.views}/></div>
              <FaEye />
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <div><NumberFormatter value={props.totalComments}/></div>
              <FaComment />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
