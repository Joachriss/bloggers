import { FiMessageSquare } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DashboardPost = (props: any) => {
    return (
        <div className="flex flex-row gap-3">
            <div className="max-w-12 min-w-12 max-h-12 min-h-12 overflow-hidden  aspect-square">
                <img src={`http://localhost:8000/uploads/images/${props.image}`} alt="max-w-12 min-w-12 " className="rounded-md" />

            </div>
            <div className="flex flex-col w-full">
                <div className="text-sm font-bold line-clamp-1">{props.tittle}</div>
                <div className="flex flex-row justify-between text-sm text-gray-500 dark:text-gray-400">
                    <small className="flex flex-row items-center gap-x-1"><FiMessageSquare /> <div>{props.totalComments} Comments</div></small>
                    <small className="flex flex-row items-center gap-x-1"><FaEye /> <div>{props.totalViews} Views</div></small>
                    <Link to={`/admin/editpost/${props._id}`} className="hover:text-gray-900 flex flex-row items-center gap-x-1"><FaEdit /> <div>Edit</div></Link>
                </div>
            </div>
        </div>
    )
}
