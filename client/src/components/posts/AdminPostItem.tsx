import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AdminPostItem = (props: any) => {
  return (
    <div className="flex rounded flex-row justify-between shadow-md p-2 border-b-2 text-gray-900 dark:text-gray-200 border-gray-200 dark:border-gray-700">
        <div className="flex flex-row gap-3">
            <img src={`http://localhost:8000/uploads/images/${props.image}`} alt=""  className="w-12 h-12 rounded"/>
            <div className="flex flex-col">
                <div className="text-xl">{props.tittle}</div>
                <div className="flex flex-row gap-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <small className="">{props.category}</small><small className="h-full border-l-2 border-gray-400"></small>
                    <small className="">{props.author}</small><small className="h-full border-l-2 border-gray-400"></small>
                    <small className="">{props.date}</small>
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-1 justify-between items-center">
            <div className=""><FaEye size={20} /></div>
            <Link to ={`/admin/editpost/${props._id}`} className="hover:text-gray-600 px-2 border-gray-700 border-l-2 border-r-2"><FaEdit size={20}/></Link>
            <div className=""><MdDelete size={20}/></div>
        </div>
    </div>
  )
}
