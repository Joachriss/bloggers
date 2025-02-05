import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { MdClose, MdKeyboardArrowDown, MdLogin, MdLogout, MdOutlineLogout } from "react-icons/md";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { TrendyPost } from "../posts/TrendyPost";
import { Link, NavLink } from "react-router-dom";
import { SearchPost } from "../posts/SearchPost";
import { GiArchiveRegister } from "react-icons/gi";
import { UserAvatar } from "../UserAvatar";
import toast from "react-hot-toast";
import userAvatarImage from "../../assets/images/user.png";
import { UserContext } from "../../../context/UserContext";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [posts, setPosts] = useState<any>([]);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdown = dropdownOpen ? '' : 'hidden';
    const active = 'px-2 flex justify-center items-center rounded  border-b-4 border-green-600';
    const notActive = 'px-2 flex justify-center items-center rounded hover:border-b border-green-300';
    const activeMobile = 'px-2 w-fit flex rounded  border-b-4 border-green-600';
    const notActiveMobile = 'px-2 flex items-center rounded';
    const userContext = useContext(UserContext);
    let userImage = userContext?.user?.image || null;
    const isDesktopNavLinkActive = ({ isActive }: any) => {
        return isActive ? active : notActive;
    }
    const isMobileNavLinkActive = ({ isActive }: any) => {
        return isActive ? activeMobile : notActiveMobile;
    }

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    // for backdrop
    const handleBackdrop = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    }

    // image checker
    const userImageCheck = ()=>{
        if (!userImage) {
            return null;
        }
        userImage = userImage.toString();
        userImage = userImage.trim();
        return userImage.startsWith('http') ? userImage : `${import.meta.env.VITE_BACKEND_BASE_URL}/${import.meta.env.VITE_BACKEND_POST_IMAGE_URL}/${userImage}`; 
    }

    const userAvatar = userImageCheck() || userAvatarImage;

    useEffect(() => {
        userContext?.reloadUser();
        userImage =userContext?.user?.image || null;
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
                toast.error('Something went wrong please check connection or try again');
            }
        };
        fetchPosts();
    }, [userContext?.user?.id]);

    return (
        <div className="sticky top-0 mynav z-30 w-full bg-white dark:text-white border-b border-gray-200 dark:bg-[#131313] dark:border-gray-700">
            <nav className="w-full">
                <div className="justify-between flex flex-row px-3 sm:px-5 py-3 items-center">
                    <div className="flex items-center">
                        <HiMenuAlt2 onClick={handleMenu} className="cursor-pointer" size={27} />
                    </div>
                    <Link to="/" className="text-4xl font-bold"><span className="text-green-600 font-bold">/</span><span className="text-orange-600 text- font-bold">/</span>Describe</Link>
                    <div className="flex flex-row gap-x-1 md:gap-x-5 items-center">
                        <button onClick={() => setIsOpenSearch(true)} className="hover:border-white border-transparent border p-1 rounded-full flex justify-center items-center"><IoSearchSharp size={22} /></button>

                        <div className="flex items-center ms-3 relative">
                            <div>
                                <button type="button" onClick={() => {setDropdownOpen(!dropdownOpen)}} className="flex text-sm hover:bg-gray-200 bg-transparent rounded-full overflow-hidden aspect-square focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="rounded-full w-8 aspect-square object-cover" src={userAvatar} alt="user photo" />
                                </button>
                            </div>
                            <div className={`z-50 ${dropdown} top-8 end-1 absolute my-4 text-base min-w-[200px] list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                        {userContext?.user?.name}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        {userContext?.user?.email}
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <Link to="/posts/create" >
                                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Create Post</div>
                                    </Link>
                                    <Link to={`user/profile/${userContext?.user?.id}`}>
                                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">My profile</div>
                                    </Link>
                                    {/* <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                    </li> */}
                                    <li onClick={() => userContext?.logout()}>
                                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button className="p-2 text-sm bg-black text-white rounded-lg">Subscribe</button>
                    </div>
                </div>
                <div className="mx-auto hidden md:block px-3 md:px-0 max-w-[1280px]">
                    <div className="flex flex-wrap justify-between px-3 py-2 gap-1 my-2 border-t-[1px] border-black dark:border-gray-300 font-medium">
                        <NavLink to='/' className={isDesktopNavLinkActive}>Home</NavLink>
                        <NavLink to='posts/category/all' className={isDesktopNavLinkActive}>All</NavLink>
                        <NavLink to='posts/category/World' className={isDesktopNavLinkActive}>World</NavLink>
                        <NavLink to='posts/category/Technology' className={isDesktopNavLinkActive}>Technology</NavLink>
                        {/* <Link to='posts/category/Gossip' className={isDesktopNavLinkActive}>Gossip</Link> */}
                        {/* <Link to='posts/category/Politics' className={isDesktopNavLinkActive}>Politics</Link>
                        <Link to='posts/category/Social' className={isDesktopNavLinkActive}>Social</Link> */}
                        <NavLink to='posts/category/Sport' className={isDesktopNavLinkActive}>Sport</NavLink>
                        <NavLink to='posts/category/Business' className={isDesktopNavLinkActive}>Business</NavLink>
                        <NavLink to='posts/category/Health' className={isDesktopNavLinkActive}>Health</NavLink>
                        <NavLink to='posts/category/Style' className={isDesktopNavLinkActive}>Style</NavLink>
                        <NavLink to='posts/category/Travel' className={isDesktopNavLinkActive}>Travel</NavLink>
                        <div className=" border-gray-600 border-r-4"></div>
                        {
                            !userContext?.user ? (
                                <>
                                    <NavLink to='login' state={{ from: location.pathname }} className="px-2 hover:border-red-500 flex justify-center items-center rounded  border-b-4 border-gray-600">Log in</NavLink>
                                    <NavLink to='register' className="px-2 flex justify-center items-center hover:border-red-500 rounded  border-b-4 border-gray-600">Register</NavLink>
                                </>
                            ) : (
                                <div onClick={() => userContext?.logout()} className="cursor-pointer hover:border-red-500 px-2 flex flex-row justify-center items-center gap-x-1 rounded  border-b-4 border-gray-600"><MdOutlineLogout size={22} /><div>Logout</div></div>
                            )
                        }
                        <div className="flex flex-row items-center font-semibold">
                            <Menu>
                                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                                    More <MdKeyboardArrowDown size={22} />
                                    {/* <ChevronDownIcon className="size-4 fill-white/60" /> */}
                                </MenuButton>

                                <MenuItems
                                    transition
                                    anchor="bottom end"
                                    className="w-52 z-50 origin-top-right rounded-xl border border-white/5 bg-gray-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                                >
                                    <MenuItem>
                                        <Link to="aboutus" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            {/* <PencilIcon className="size-4 fill-white/30" /> */}
                                            About
                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='contacts' className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
                                            Contacts
                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                        </Link>
                                    </MenuItem>
                                    <div className="my-1 h-px bg-white/5" />
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            {/* <ArchiveBoxXMarkIcon className="size-4 fill-white/30" /> */}
                                            Archive
                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            {/* <TrashIcon className="size-4 fill-white/30" /> */}
                                            Delete
                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Backdrop layer */}
            {
                isOpen || dropdownOpen ? (
                    <div onClick={handleBackdrop} className="fixed inset-0 bg-black/10 top-0 w-full h-screen "></div>
                ) : null
            }

            {/* Trending posts in desktop view */}
            <div className={`absolute bg-black bg-opacity-[95%] hidden md:block top-0 w-[60%] h-screen duration-200 ease-in-out ${isOpen ? 'translate-x-0' : ' -translate-x-full'} `}>
                <div className="w-full flex flex-row justify-between p-3 mt-2">
                    <div className="text-xl font-bold text-white">Trending</div>
                    <div className="text-sm text-gray-100 font-bold cursor-pointer p-1 bg-red-800 rounded-md" onClick={handleMenu}><IoCloseSharp size={24} /></div>
                </div>
                <div className="grid grid-cols-2 mt-5 gap-4 p-3 h-[90vh] overflow-y-scroll">
                    {posts && posts.length > 0 ?
                        (
                            [...posts].reverse().slice(0, 4).map((post, index) => {
                                return <TrendyPost key={index} image={post.image} tittle={post.tittle} views={post.viewedBy.length} totalComments={post.comments.length} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />
                            })
                        ) : (
                            <div className="flex col-span-full w-full h-screen justify-center items-center text-white text-center">No posts found</div>
                        )
                    }

                </div>
            </div>

            {/* Mobile view menu */}
            <div className={`absolute flex p-3 flex-col bg-black bg-opacity-[95%]  md:hidden z-10 top-0 w-[70%] h-screen duration-200 ease-in-out ${isOpen ? 'translate-x-0' : ' -translate-x-full'} `}>
                <div className="w-full flex flex-row justify-between mt-2">
                    <div className="text-xl font-bold text-white">Menu</div>
                    <div className="text-sm text-gray-100 flex items-center font-bold cursor-pointer p-1 bg-red-800 rounded-md" onClick={handleMenu}><MdClose /></div>
                </div>
                <div className="flex flex-col text-white justify-between py-3 gap-y-4 gap-x-1 md:gap-x-2 text-sm my-2 border-t-[1px] border-black">
                    <NavLink reloadDocument={true} to='posts/category/World' className={isMobileNavLinkActive}>World</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/Technology' className={isMobileNavLinkActive}>Technology</NavLink>
                    {/* <Link reloadDocument={true} to='posts/category/Gossip' className={isMobileNavLinkActive}>Gossip</Link> */}
                    {/* <Link reloadDocument={true} to='posts/category/Politics' className={isMobileNavLinkActive}>Politics</Link>
                    <Link reloadDocument={true} to='posts/category/Social' className={isMobileNavLinkActive}>Social</Link> */}
                    <NavLink reloadDocument={true} to='posts/category/Sport' className={isMobileNavLinkActive}>Sport</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/Business' className={isMobileNavLinkActive}>Business</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/Health' className={isMobileNavLinkActive}>Health</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/Style' className={isMobileNavLinkActive}>Style</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/Travel' className={isMobileNavLinkActive}>Travel</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/About' className={isMobileNavLinkActive}>About</NavLink>
                    <NavLink reloadDocument={true} to='posts/category/Contacts' className={isMobileNavLinkActive}>Contacts</NavLink>
                    <div className=" border-gray-600 border-b-4 my-3"></div>
                    <NavLink to={`user/profile/${userContext?.user?.id}`} className="px- flex flex-row items-center gap-x-4 w-fit  border-gray-600"><UserAvatar /><div>Profile</div></NavLink>
                    {
                        !userContext?.user ? (
                            <>
                                <NavLink to='login' className=" flex flex-row items-center gap-x-4 w-fit  border-gray-600"><MdLogin size={24} /><div>Log in</div></NavLink>
                                <NavLink to='register' className=" flex flex-row items-center gap-x-4 w-fit  border-gray-600"><GiArchiveRegister size={24} /><div>Register</div></NavLink>
                            </>
                        ) : (
                            <div onClick={() => userContext?.logout()} className="cursor-pointer flex flex-row items-center gap-x-4 w-fit  border-gray-600"><MdLogout size={24} /><div>Logout</div></div>
                        )


                    }
                </div>
            </div>

            {/* Search bar dialog */}
            <Dialog open={isOpenSearch} onClose={() => setIsOpenSearch(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-md" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-lg">
                    <DialogPanel className="min-w-[90%] md:min-w-[50%] space-y-4 max-w-lg rounded-xl bg-[#212121] text-gray-100 p-12">
                        <div className="flex flex-row justify-between">
                            <DialogTitle className="font-bold">Search</DialogTitle>
                            <div>
                                <button onClick={() => setIsOpenSearch(false)}><IoCloseSharp size={24} /></button>
                            </div>
                        </div>
                        <input autoFocus={isOpenSearch} type="search" className="w-full p-2 rounded-md bg-transparent border-[1px] border-gray-600" placeholder="Search..." name="search" id="search" contentEditable={true} value={search} onChange={(e) => setSearch(e.target.value)} />
                        <div className="relative mb-5 -mt-3">
                            <div className="min-h-[30vh] max-h-[30vh] overflow-y-scroll p-2 w-full">
                                {posts && posts.length > 0 ?
                                    (
                                        [...posts].reverse().slice(0, 6).filter((post) => search ? post.tittle.toLowerCase().includes(search.toLowerCase()) : null).map((post, index) => {
                                            return <SearchPost key={index} closeSearch={() => setIsOpenSearch(false)} image={post.image} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />
                                        })
                                    ) : (
                                        <div className="flex justify-center items-center text-white">No posts found</div>
                                    )
                                }
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}
