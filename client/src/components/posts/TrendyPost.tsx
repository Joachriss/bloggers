
export const TrendyPost = (props:any) => {
  return (
    <div className='w-64 h-80 overflow-hidden rounded-lg relative'>
        <img src={`http://localhost:8000/uploads/images/${props.image}`} className="w-full h-full" alt="" />
        <div className="absolute top-0 bg-opacity-40 bg-black w-full h-full p-3">
            <div className="text-sm w-fit bg-orange-500 p-2 rounded text-white font-bold mb-auto">Trending</div>
            <div className='flex absolute bottom-8 flex-col gap-y-5 '>
                <div className="text-md text-white font-semibold line-clamp-2">
                    {props.tittle}
                </div>
                <small className="text-gray-200">{props.date}</small>
            </div>
        </div>
    </div>
  )
}
