import { Link } from "react-router-dom"
import { UserAvatar } from "../UserAvatar"
import aboutus from '../../assets/images/aboutus.png'
import DOMPurify from 'dompurify'


export const PostCard = (props: any) => {
    const {image,tittle,description,author,date,category} = props;
    const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL || 'http://localhost:8000';
    console.log(image)
    return (
        <Link to={`/post/${props._id}`} className='flex flex-col rounded-xl bg-transparent p-3 shadow-lg cursor-pointer'>
            <div className="mx-auto max-h-52 w-full overflow-hidden rounded-lg">
                <img src={`${baseImageUrl}/uploads/images/${image}`} loading="lazy" className='rounded-lg object-cover' alt="post picture" />
            </div>
            <div className="flex flex-col mt-3 mb-auto">
                <div className="font-bold text-lg line-clamp-1">{tittle}</div>
                <div className="md:text-md font-medium line-clamp-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
                <div className="flex flex-row justify-between items-center gap-x-2">
                    <UserAvatar userImage={image}/>
                    <div className="flex flex-col">
                        <small className="text-gray-950 dark:text-gray-300 font-bold">{author}</small>
                        <small className="text-gray-500 dark:text-gray-400">{date.slice(0,10)}</small>
                    </div>
                </div>
                <small className="border-2 bg-gray-300 dark:bg-gray-800 px-2 py-1 flex justify-center items-center rounded-lg">{category}</small>
            </div>
        </Link>
    )
}
