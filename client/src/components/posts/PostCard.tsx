import { Link } from "react-router-dom"


export const PostCard = (props: any) => {
    return (
        <Link to={`/post/${props._id}`} className='flex flex-col rounded-xl bg-white dark:bg-slate-900 p-3 shadow-lg cursor-pointer'>
            <div className="mx-auto max-h-52 w-full overflow-hidden rounded-lg">
                <img src={`http://localhost:8000/uploads/images/${props.image}`} className='rounded-lg scale-110' alt="post picture" />
            </div>
            <div className="flex flex-col mt-3 mb-auto">
                <div className="font-bold text-lg line-clamp-1">{props.tittle}</div>
                <div className="md:text-md font-medium md:text-md line-clamp-2" dangerouslySetInnerHTML={{ __html: props.description }}></div>
            </div>
            <div className="flex flex-row justify-between items-center mt-6">
                <div className="flex flex-col">
                    <small className="text-gray-950 dark:text-gray-300 font-bold">By: {props.author}</small>
                    <small className="text-gray-500 dark:text-gray-400">{props.date.slice(0,10)}</small>
                </div>
                <small className="border-2 bg-gray-300 dark:bg-gray-800 px-2 py-1 flex justify-center items-center rounded-lg">{props.category}</small>
            </div>
        </Link>
    )
}
