import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { FaAngleDown } from "react-icons/fa"
import { QuillEditor } from "./QuillEditor"
import { DefaultSpinner } from "./spinners/DefaultSpinner"


export const PostForm = (props: any) => {
    const{viewImage,handleImage,tittle,setTittle,author,setAuthor,category,setCategory,description,setDescription,loading}=props
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="col-span-2 mx-auto flex flex-col gap-2">
            <div className="text-center italic max-w-[400px] max-h-[250px] flex justify-center items-center text-xl text-gray-500 dark:text-gray-400 border-2 border-gray-400 dark:border-gray-400 rounded-md">

              {/* Image preview */}
              <img src={viewImage} className="w-full h-full object-cover" alt="" />
            </div>
            <input type="file" onChange={handleImage} accept="image/*" name="image" className="p-2 rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" />
          </div>
          <div className="flex flex-col w-full col-span-2 md:col-span-1">
            <label htmlFor="blogName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog tittle:</label>
            <input type="text" id="blogName" value={tittle} onChange={(e) => setTittle(e.target.value)} className="p-2 bg-transparent rounded-md text-sm font-medium border-2 border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" name="blogName" />
          </div>
          <div className="flex flex-col w-full col-span-2 md:col-span-1">
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author:</label>
            <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="bg-transparent block w-full p-2 rounded-md border-2 text-sm font-medium border-gray-400  dark:border-gray-300 text-gray-900 dark:text-white" />
          </div>

          <Menu as="div" className="relative inline-block text-left col-span-2">
            <div>
              <MenuButton className="inline-flex bg-transparent w-full justify-center gap-x-1.5 rounded-md dark:text-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-700">
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
              </div>
            </MenuItems>
          </Menu>


          <div className="col-span-2 flex flex-col w-full h-fit">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog description
              <QuillEditor description={description} setDescription={setDescription} />
            </label>
          </div>
          <div className="col-span-2 w-full text-center mt-5">
            <button type="submit" className="bg-gray-700 text-white p-2 rounded-md mx-auto" disabled={loading}>{loading ? <DefaultSpinner /> : 'Update'}</button>
          </div>
        </div>
  )
}
