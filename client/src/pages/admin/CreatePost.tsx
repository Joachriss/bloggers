import axios, { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaAngleDown } from "react-icons/fa6";
import pictureHolder from "../../assets/images/placeholder-image.jpg";
import { DefaultSpinner } from '../../components/spinners/DefaultSpinner';
import { QuillEditor } from '../../components/QuillEditor';
import { PostForm } from '../../components/PostForm';

export const CreatePost = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>();
  const [viewImage, setViewImage] = useState<any>();
  const [tittle, setTittle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  // sending post to server side
  const sendPost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('tittle', tittle);
      formData.append('author', author);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('image', image);

      const { data } = await axios.post("/createpost", formData, { headers: { 'Content-Type': 'multipart/form-data' } });

      if (data.error) {
        setLoading(false);
        toast.error(data.error);
      }
      else {
        setLoading(false);
        toast.success(data.message);
        navigate('/admin/posts');
      }
    } catch (error: AxiosError | any) {
      console.log(error.response.data.details);
    }
  }

  

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files.length > 0) {
      setViewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  }
  return (
    <div className='flex flex-col gap-2 m-4'>
      <h1 className='text-2xl font-bold p-2 gap-4'>Create a new post</h1>
      <form className="flex flex-col gap-2 w-full" onSubmit={sendPost} encType='multipart/form-data'>
        <PostForm viewImage={viewImage} handleImage={handleImage} tittle={tittle} author={author} category={category} description={description} setDescription={setDescription} setTittle={setTittle} setAuthor={setAuthor} setCategory={setCategory} loading={loading}/>
      </form>
    </div>
  )
}
