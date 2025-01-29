import { DefaultSpinner } from "../components/spinners/DefaultSpinner"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import axios from "axios";
import toast from "react-hot-toast";
import userss from "../assets/images/user.png";



export const EditProfile = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user || null ;
  const [username,setUsername] = useState<any>(user?.name);
  const [aboutMe,setAboutMe] = useState<any>(user?.aboutMe);
  const [email,setEmail] = useState<any>(user?.email);
  const [viewImage, setViewImage] = useState<any>();
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.name);
      setAboutMe(user.aboutMe);
      setEmail(user.email);
      if (user.image) {
        setViewImage(`${import.meta.env.VITE_BACKEND_BASE_URL}/${import.meta.env.VITE_BACKEND_USER_IMAGE_URL}/${user.image}` || `${userss}`);
      }
    }
  },[userContext]);
  const updateProfile = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', username);
      formData.append('email', email);
      formData.append('image', image);
      formData.append('aboutMe', aboutMe);
      const updatedUser = await axios.put(`/updateprofile/${user?.id}`, formData, {headers: { 'Content-Type': 'multipart/form-data' } });
      userContext?.reloadUser();
      console.log(updatedUser);
      setLoading(false);
      toast.success(updatedUser.data.message);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

  }

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if(file === null){
      if (image === null) {
        setViewImage(userss);
      }
      return
    }
    reader.onload = () => {
      setViewImage(reader.result);
      setImage(file);
    };
    reader.readAsDataURL(file);
  };

  
  return (
    <form onSubmit={updateProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full max-w-[1280px] mx-auto">
      <div className="col-span-2 md:col-span-1 mx-auto flex flex-col gap-2">
        <div className="text-center italic overflow-hidden w-[400px] h-[400px]  aspect-square flex justify-center items-center text-xl text-gray-500 dark:text-gray-400 border-2 border-gray-400 dark:border-gray-400 rounded-full">
          {/* Image preview */}
          <img src={viewImage ?  `${viewImage}` : `${userss}`} className="w-full rounded-full h-full object-cover" alt="" />
        </div>
        <input type="file" onChange={handleImage} accept="image/*" name="image" className="p-2 rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" />
      </div>
      <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4">
        <div className="flex flex-col w-full col-span-2 md:col-span-1">
          <label htmlFor="blogName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 bg-transparent rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" name="name" />
        </div>
        <div className="flex flex-col w-full col-span-2 md:col-span-1">
          <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" autoComplete="on" name="email" value={email} disabled={true} onChange={(e) => setEmail(e.target.value)} className="bg-transparent block w-full p-2 rounded-md border-2 text-sm font-medium border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" />
        </div>
        <div className="col-span-2 flex flex-col w-full h-fit">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About me
            <textarea className="bg-transparent mt-2 block w-full p-2 rounded-md border-2 text-sm font-medium border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" rows={10} value={aboutMe} onChange={(e:any)=>setAboutMe(e.target.value)} ></textarea>
          </label>
        </div>
      </div>
      <div className="col-span-2 w-full text-center mt-5">
        <button type="submit" className="bg-gray-700 text-white p-2 rounded-md mx-auto" disabled={loading}>{loading ? <DefaultSpinner /> : 'Update'}</button>
      </div>
    </form>
  )
}
