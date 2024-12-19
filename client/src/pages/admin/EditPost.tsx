import axios, { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaAngleDown } from "react-icons/fa6";

export const EditPost = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>();
  const [viewImage, setViewImage] = useState<any>();
  const [tittle, setTittle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  // sending post to server side
  const sendPost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('tittle',tittle);
      formData.append('author',author);
      formData.append('description',description);
      formData.append('category',category);
      formData.append('image',image);
      for(let [key,value] of formData.entries()){
        console.log(key,value)
      }
      const { data } = await axios.post("/createpost", formData, { headers: {'Content-Type': 'multipart/form-data'}});
      console.log("Server Response:", data);
      if (data.error) {
        toast.error(data.error);
      }
      else {
        toast.success(data.message);
        navigate('/admin/posts');
      }
    } catch (error: AxiosError | any) {
      console.log(error.response.data.details);
    }
  }

  // toolbar options for quill editor
  const toolbarOptions = [
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'direction': 'rtl' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    ['clean'],
  ];

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files.length > 0) {
      setViewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  }
  return (
    <div className='flex flex-col gap-2 m-4'>
      <h1 className='text-2xl font-bold p-2 gap-4'>Edit post</h1>
      <form className="flex flex-col gap-2 w-full" onSubmit={sendPost} encType='multipart/form-data'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="col-span-2 mx-auto flex flex-col gap-2">
            <div className="text-center italic max-w-[400px] max-h-[250px] flex justify-center items-center text-xl text-gray-500 dark:text-gray-400 border-2 border-gray-400 dark:border-gray-400 rounded-md">

              {/* Image preview */}
              <img src={viewImage} className="w-full h-full object-cover" alt="" />
            </div>
            <input type="file" onChange={handleImage} accept="image/*" name="image" className="p-2 rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" />
          </div>
          <div className="flex flex-col w-full col-span-2 md:col-span-1">
            <label htmlFor="blogName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog title:</label>
            <input type="text" id="blogName" value={tittle} onChange={(e) => setTittle(e.target.value)} className="p-2 rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" name="blogName" />
          </div>
          <div className="flex flex-col w-full col-span-2 md:col-span-1">
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author:</label>
            <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} className=" block w-full p-2 rounded-md border-2 text-sm font-medium border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" />
          </div>

          <Menu as="div" className="relative inline-block text-left col-span-2">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                {category ? category : 'category'}
                <FaAngleDown aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    onClick={() => setCategory('gossip')}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Gossip
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    onClick={() => setCategory('sport')}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Sport
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    onClick={() => setCategory('politics')}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Politics
                  </a>
                </MenuItem>
                {/* <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form> */}
              </div>
            </MenuItems>
          </Menu>


          <div className="col-span-2 flex flex-col w-full h-fit">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog description
              <ReactQuill
                theme="snow"
                id="description"
                value={description}
                placeholder="Start typing here..."
                onChange={setDescription}
                modules={{
                  toolbar: toolbarOptions,
                  history: {          // Enable with custom configurations
                    delay: 2500,
                    userOnly: true
                  },
                }

                }
              /></label>
          </div>
          <div className="col-span-2 w-full text-center mt-5">
            <button type="submit" className="bg-gray-700 text-white p-2 rounded-md mx-auto">Update</button>
          </div>
        </div>
      </form>
    </div>
  )
}
