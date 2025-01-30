import { Link } from "react-router-dom"
import { UserAvatar } from "../UserAvatar"
import DOMPurify from 'dompurify'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { DeletePostDialog } from "../utils/DeletePostDialog";


export const PostCard = (props: any) => {
    const userContext = useContext(UserContext);
    const user = userContext?.user;
    const { image, tittle, description, author, date, category, creator } = props;
    const baseImageUrl = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000';

    let [isDeleteOpen, setIsDeleteOpen] = useState(false)

    return (
        <div>
            <div className='flex flex-col relative rounded-xl bg-transparent p-3 shadow-lg cursor-pointer'>
                <Link to={`/post/${props._id}`} className="mx-auto max-h-52 w-full overflow-hidden rounded-lg">
                    <img src={`${baseImageUrl}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${image}`} loading="lazy" className='rounded-lg object-cover' alt="post picture" />
                </Link>
                {
                    user?.id === creator && user?.id && (
                        <div className="top-5 absolute right-5 p-2 flex flex-row gap-x-2 rounded-full">
                            <Link to={`/posts/edit/${props._id}`} className="hover:text-white bg-green-600 p-2 rounded-full flex justify-center items-center"><FaEdit size={20} /></Link>
                            <button type="button" onClick={() => setIsDeleteOpen(true)} title="Delete" className="hover:text-white bg-red-600 p-2 rounded-full flex justify-center items-center"><FaTrashAlt size={20} /></button>
                        </div>
                    )
                }
                <Link to={`/post/${props._id}`} className="flex flex-col mt-3 mb-auto">
                    <div className="font-bold text-lg line-clamp-1">{tittle}</div>
                    <div className="md:text-md font-medium line-clamp-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
                </Link>
                <div className="flex flex-row justify-between items-center mt-2">
                    <Link to={`/user/profile/${creator}`} className="flex flex-row justify-between items-center gap-x-2">
                        <UserAvatar userImage={image} />
                        <div className="flex flex-col">
                            <small className="text-gray-950 dark:text-gray-300 font-bold">{author}</small>
                            <small className="text-gray-500 dark:text-gray-400">{date.slice(0, 10)}</small>
                        </div>
                    </Link>
                    <Link to={`/posts/category/${category}`} className="border-2 text-xs bg-gray-300 dark:bg-gray-800 px-2 py-1 flex justify-center items-center rounded-lg">{category}</Link>
                </div>
            </div>

            {/* delete dialog */}
            <DeletePostDialog isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} postId={props._id} />
        </div>
    )
}
