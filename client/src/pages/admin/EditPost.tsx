import axios, { AxiosError } from 'axios';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { PostForm } from '../../components/posts/PostForm';
import { UserContext } from '../../../context/UserContext';

export const EditPost = () => {
  const params = useParams();
  const postId = params.postid;
  const userContext = useContext(UserContext);
  let userId: string | null = null;
  const navigate = useNavigate();
  const [image, setImage] = useState<any>();
  const [viewImage, setViewImage] = useState<any>();
  const [tittle, setTittle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [visibility, setVisibility] = useState('');
  const [loading, setLoading] = useState(false);
  userId =  userContext?.user?.id || null;

  // request post details
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await axios.get(`/getpostforediting/${postId}`);
        setTittle(data.tittle);
        setAuthor(data.author);
        setDescription(data.description);
        setCategory(data.category);
        setImage(data.image);
        setVisibility(data.visibility);
        
        // Displaying image from the database
        const displayImage = `http://localhost:8000/uploads/images/${data.image}`;
        setViewImage(displayImage);
        
      } catch (error) {
        console.log(error);
      }
    }
    
    getPost();

  }, []);

  // sending post to server side
  const upadatePost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('tittle', tittle);
      formData.append('author', author);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('image', image);
      formData.append('visibility', visibility);
      if (userId !== null) {
        formData.append('editedBy', userId);
      }

      const { data } = await axios.put(`/editpost/${postId}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

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
      setLoading(false);
      toast.error("something went wrong, please check connection or try again");
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
      <h1 className='text-2xl font-bold p-2 gap-4'>Edit post</h1>
      <form className="flex flex-col gap-2 w-full" onSubmit={upadatePost} encType='multipart/form-data'>
        <PostForm viewImage={viewImage}
          setTittle={setTittle}
          setAuthor={setAuthor}
          setDescription={setDescription}
          setCategory={setCategory}
          handleImage={handleImage}
          loading={loading}
          description={description}
          tittle={tittle}
          author={author}
          category={category}
          image={image}
          visibility={visibility}
          setVisibility={setVisibility} 
        />
      </form>
    </div>
  )
}
