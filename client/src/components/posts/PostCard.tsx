import picture from '../../assets/images/sample.jpg';
export const PostCard = (props: any) => {
  return (
    <div className='flex flex-col rounded-xl bg-white p-3 shadow-lg border-[1px]'>
        <div className="mx-auto h-52 w-full overflow-hidden">
            <img src={`http://localhost:8000/uploads/images/${props.image}`} className='rounded-lg' alt="post picture" />
        </div>
        <div className="flex flex-col mt-3 mb-auto">
            <div className="font-bold text-lg line-clamp-1">{props.tittle}</div>
            <div className="text-md md:text-md line-clamp-3">{props.description}</div>
        </div>
        <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-col">
                <small className="text-gray-950 font-bold">By: {props.author}</small>
                <small className="text-gray-500">{props.date}</small>
            </div>
            <small className="border-2 bg-gray-300 px-2 flex justify-center items-center rounded-lg">{props.category}</small>
        </div>
    </div>
  )
}
