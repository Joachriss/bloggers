import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import userss from "../assets/images/user.png";
import { Link, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { PostCard } from "../components/posts/PostCard";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";

export const Profile = () => {
    const userContext = useContext(UserContext);
    const params = useParams();
    const profileId = params.userid;
    const [username, setUsername] = useState<any>('');
    const [aboutMe, setAboutMe] = useState<any>('');
    const [email, setEmail] = useState<any>("");
    const [viewImage, setViewImage] = useState<any>();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        profileId === params.userid;
        const profile = async () => {
            try {
                const response = await axios.get(`/getuserbyid/${profileId}`);
                setUsername(response.data.name);
                setAboutMe(response.data.aboutMe);
                setEmail(response.data.email);
                if (response.data.image) {
                    setViewImage(`${import.meta.env.VITE_BACKEND_BASE_URL}/${import.meta.env.VITE_BACKEND_USER_IMAGE_URL}/${response.data.image}` || `${userss}`);
                }
            } catch (error) {
                console.error(error);
            }
        }

        const getPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setLoading(false);
                setPosts(response.data);

            }
            catch (error) {
                console.error(error);
                setLoading(false);
                toast.error('Something went wrong please check connection or try again');
            }
        }

        profile();
        getPosts();
    }, [profileId]);







    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full max-w-[1280px] mx-auto">
            <div className="col-span-2 md:col-span-1 mx-auto flex flex-col gap-2">
                <div className="text-center italic overflow-hidden w-[400px] h-[400px]  aspect-square flex justify-center items-center text-xl text-gray-500 dark:text-gray-400 border-2 border-gray-400 dark:border-gray-400 rounded-full">
                    {/* Image preview */}
                    <img src={viewImage ? `${viewImage}` : `${userss}`} className="w-full rounded-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                {userContext?.user?.id === profileId ? (
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
                <div className="bg-transparent mt-2 block w-full p-2 rounded-md text-lg font-medium text-gray-900 dark:text-white" >{aboutMe ? aboutMe : <div className="text-gray-500 dark:text-gray-400 text-center w-full my-10">No description</div>}</div>
            </div>

            <div className="col-span-full mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
                    <div className="col-span-full text-4xl font-medium text-gray-900 dark:text-white">
                        Works
                    </div>
                    {loading ? (
                        <div className="flex flex-col col-span-full items-center justify-center py-12">
                            <DefaultSpinner />
                        </div>
                    ) :
                        (
                            posts && posts.length > 0 ? (
                                [...posts].reverse().slice(0, 6).filter((post: any) => post.createdBy === profileId).map((post: any) => <PostCard key={post._id} image={post.image} creator={post.createdBy} description={post.description} tittle={post.tittle} category={post.category} author={post.author} date={post.createdAt} _id={post._id} />)
                            ) : (
                                <div className="text-center col-span-full text-gray-950 mx-auto dark:text-gray-100 my-3 p-8">No posts found</div>
                            )

                        )
                    }
                </div>
            </div>
        </div>
    )
}
