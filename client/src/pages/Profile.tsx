import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import userss from "../assets/images/user.png";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export const Profile = () => {
    const userContext = useContext(UserContext);
    const user = userContext?.user || null;
    const [username, setUsername] = useState<any>('');
    const [aboutMe, setAboutMe] = useState<any>('');
    const [email, setEmail] = useState<any>("");
    const [viewImage, setViewImage] = useState<any>();
    useEffect(() => {
        if (user) {
            setUsername(user.name);
            setAboutMe(user.aboutMe);
            setEmail(user.email);
            if (user.image) {
                setViewImage(`${import.meta.env.VITE_BACKEND_BASE_URL}/${import.meta.env.VITE_BACKEND_USER_IMAGE_URL}/${user.image}` || `${userss}`);
            }
        }
    }, [userContext]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full max-w-[1280px] mx-auto">
            <div className="col-span-2 md:col-span-1 mx-auto flex flex-col gap-2">
                <div className="text-center italic overflow-hidden w-[400px] h-[400px]  aspect-square flex justify-center items-center text-xl text-gray-500 dark:text-gray-400 border-2 border-gray-400 dark:border-gray-400 rounded-full">
                    {/* Image preview */}
                    <img src={viewImage ? `${viewImage}` : `${userss}`} className="w-full rounded-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                {userContext?.user ? (
                    <Link to="/user/editprofile" className="w-full ms-auto text-end mt-5">
                        <button type="submit" className="bg-green-700 text-white p-2 rounded-md mx-auto md:mx-0 md:ms-auto flex items-center gap-2 hover:bg-gray-700"><FaEdit /><div>Edit Profile</div></button>
                    </Link>
                ) : ('')
                }
                <div className="flex flex-row items-center gap-2 w-full">
                    <div className="block text-lg font-medium text-gray-900 dark:text-white">Name:</div>
                    <div id="name" className="bg-transparent font-bold text-lg text-gray-900 dark:text-white">{username}</div>
                </div>
                <div className="flex flex-row items-center gap-2 w-full">
                    <div className="block text-lg font-medium text-gray-900 dark:text-white">Email:</div>
                    <div id="email" className="bg-transparent font-bold text-lg text-gray-900 dark:text-white">{email}</div>
                </div>
                <div className="grid grid-cols-3 gap-1 mb-4">
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
                            Post <br />  <span className="text-green-700 font-extrabold dark:text-green-500">12</span>
                        </p>
                    </div>
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
                            Views <br />  <span className="text-green-700 font-extrabold dark:text-green-500">689</span>
                        </p>
                    </div>
                    <div className="flex text-center items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
                            Impressions <br /> <span className="text-green-700 font-extrabold dark:text-green-500">3k</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-span-full flex flex-col mt-5 w-full h-fit">
                <label className="block text-4xl font-medium text-gray-900 dark:text-white">About me</label>
                <div className="bg-transparent mt-2 block w-full p-2 rounded-md text-lg font-medium text-gray-900 dark:text-white" >{aboutMe}</div>
            </div>
        </div>
    )
}
