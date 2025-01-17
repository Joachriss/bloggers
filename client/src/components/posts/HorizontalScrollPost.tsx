import { Link } from 'react-router-dom'

export const HorizontalScrollPost = (props: any) => {
    return (
        <Link to={`/post/${props._id}`} className='flex flex-col rounded-xl w-52 bg-transparent p-3 shadow-lg cursor-pointer'>
            <div className="mx-auto aspect-square  w-52 overflow-hidden rounded-lg">
                <img src={`http://localhost:8000/uploads/images/${props.image}`} loading="lazy" className='rounded-lg object-cover aspect-square' alt="post picture" />
            </div>
            <div className="mt-3 mb-auto px-1">
                <div className="text-xs md:text-md font-medium line-clamp-2">{props.tittle}</div>
                {/* <div className="" dangerouslySetInnerHTML={{ __html: props.description }}></div> */}
            </div>
            <div className="grid grid-cols-1 px-1 md:grid-cols-2 justify-between items-center mt-1">
                <div className="flex flex-row justify-between items-center gap-x-2">
                    <small className="text-gray-950 dark:text-gray-300 font-bold">{props.views} Views</small>
                    {/* <small className="text-gray-500 dark:text-gray-400">{props.date.slice(0,10)}</small> */}
                </div>
            </div>
        </Link>
    )
}
