import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export const AdminPostItem = (props: any) => {
    const baseImageUrl = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000';
    const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/deletepost/${props._id}`);
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex rounded flex-row justify-between shadow-md p-2 border-b-2 text-gray-900 dark:text-gray-200 border-gray-200 dark:border-gray-700">
      <div className="flex flex-row gap-3">
        <img src={`${baseImageUrl}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${props.image}`} alt="" className="w-12 h-12 rounded" />
        <div className="flex flex-col">
          <div className="text-sm md:text-xl line-clamp-1">{props.tittle}</div>
          <div className="flex flex-row gap-x-2 text-sm text-gray-500 dark:text-gray-400">
            <small className="">{props.category}</small><small className="h-full border-l-2 border-gray-400"></small>
            <small className="">{props.author}</small><small className="h-full border-l-2 border-gray-400"></small>
            <small className="line-clamp-1">{props.date}</small>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1 justify-between items-center">
        <div className=""><FaEye size={20} /></div>
        <Link to={`/admin/editpost/${props._id}`} className="hover:text-gray-600 px-2 border-gray-700 border-l-2 border-r-2"><FaEdit size={20} /></Link>
        <button onClick={handleDelete} className="hover:text-gray-600 px-2 border-gray-700"><MdDelete size={20} /></button>
      </div>
    </div>
  )
}
