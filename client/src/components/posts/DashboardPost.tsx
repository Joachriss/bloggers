import samplepic from "../../assets/images/sample.jpg";
import { FiMessageSquare } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const DashboardPost = () => {
    return (
        <div className="flex flex-row gap-3">
            <img src={samplepic} alt="" className="w-12 h-12 rounded-md" />
            <div className="flex flex-col w-full">
                <div className="text-xl">name of the post</div>
                <div className="flex flex-row justify-between text-sm text-gray-500 dark:text-gray-400">
                    <small className="flex flex-row items-center gap-x-1"><FiMessageSquare /> <div>324 Comments</div></small>
                    <small className="flex flex-row items-center gap-x-1"><FaEye /> <div>857 Views</div></small>
                    <small className="flex flex-row items-center gap-x-1"><FaEdit /> <div>Edit</div></small>
                </div>
            </div>
        </div>
    )
}
