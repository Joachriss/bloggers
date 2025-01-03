import { FiMessageSquare } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DashboardPost = (props: any) => {
    return (
        <div className="flex flex-row gap-3">
            <img src={`http://localhost:8000/uploads/images/${props.image}`} alt="" className="w-12 h-12 rounded-md" />
            <div className="flex flex-col w-full">
                <div className="text-sm font-bold line-clamp-1">{props.tittle}</div>
                <div className="flex flex-row justify-between text-sm text-gray-500 dark:text-gray-400">
                    <small className="flex flex-row items-center gap-x-1"><FiMessageSquare /> <div>324 Comments</div></small>
                    <small className="flex flex-row items-center gap-x-1"><FaEye /> <div>857 Views</div></small>
                    <Link to={`/admin/editpost/${props._id}`} className="hover:text-gray-900 flex flex-row items-center gap-x-1"><FaEdit /> <div>Edit</div></Link>
                </div>
            </div>
        </div>
    )
}
