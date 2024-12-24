import { Link } from "react-router-dom"

export const TrendyPost = (props: any) => {
  return (
    <Link reloadDocument={true} to={`post/${props._id}`} className='overflow-hidden rounded-lg relative w-full max-h-80'>
      <img src={`http://localhost:8000/uploads/images/${props.image}`} className="scale-150" alt="Trending post picture" />
      <div className="absolute top-0 bg-opacity-40 bg-black w-full h-full p-3">
        <div className="text-sm w-fit bg-orange-500 p-2 rounded text-white font-bold mb-auto">Trending</div>
        <div className='flex absolute bottom-8 flex-col gap-y-2'>
          <div className="text-lg text-white font-semibold md:line-clamp-2">
            {props.tittle}
          </div>
          <small className="text-gray-200">{props.date}</small>
        </div>
      </div>
    </Link>
  )
}
