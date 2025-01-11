import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendyPost } from "../posts/TrendyPost";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setOpen] = React.useState(false);
    const [posts, setPosts] = useState<any>([]);
    const active = 'px-2 flex justify-center items-center rounded  border-b-4 border-green-600';
    const notActive = 'px-2 flex justify-center items-center rounded';
    const activeMobile = 'px-2 flex rounded  border-b-4 border-green-600';
    const notActiveMobile = 'px-2 flex items-center rounded';
    const isDesktopNavLinkActive = ({isActive}:any) =>{
        return isActive ? active : notActive;
    }
    const isMobileNavLinkActive = ({isActive}:any) =>{
        return isActive ? activeMobile : notActiveMobile;
    }

    const handleMenu = () => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="sticky top-0 mynav z-30 w-full bg-white dark:text-white border-b border-gray-200 dark:bg-[#131313] dark:border-gray-700">
            <nav className="w-full">
                <div className="justify-between flex flex-row px-3 sm:px-5 py-3 items-center">
                    <div className="flex items-center">
                        <HiMenuAlt2 onClick={handleMenu} className="cursor-pointer" size={27} />
                    </div>
                    <Link to="/" className="text-4xl font-bold"><span className="text-green-600 font-bold">/</span><span  className="text-orange-600 text- font-bold">/</span>Describe</Link>
                    <div className="flex flex-row gap-x-5 items-center">
                        <IoSearchSharp size={24} />
                        <button className="p-2 bg-black text-white rounded-lg">Subscribe</button>
                    </div>
                </div>
                <div className="mx-auto hidden md:block px-3 md:px-0 max-w-[1280px]">
                    <div className="flex flex-wrap justify-between px-3 py-2 gap-1 my-2 border-t-[1px] border-black dark:border-gray-300 font-medium">
                        <NavLink to='postcategory/World' className={isDesktopNavLinkActive}>World</NavLink>
                        <NavLink to='postcategory/Technology' className={isDesktopNavLinkActive}>Technology</NavLink>
                        {/* <Link to='postcategory/Gossip' className={isDesktopNavLinkActive}>Gossip</Link> */}
                        {/* <Link to='postcategory/Politics' className={isDesktopNavLinkActive}>Politics</Link>
                        <Link to='postcategory/Social' className={isDesktopNavLinkActive}>Social</Link> */}
                        <NavLink to='postcategory/Sport' className={isDesktopNavLinkActive}>Sport</NavLink>
                        <NavLink to='postcategory/Business' className={isDesktopNavLinkActive}>Business</NavLink>
                        <NavLink to='postcategory/Health' className={isDesktopNavLinkActive}>Health</NavLink>
                        <NavLink to='postcategory/Style' className={isDesktopNavLinkActive}>Style</NavLink>
                        <NavLink to='postcategory/Travel' className={isDesktopNavLinkActive}>Travel</NavLink>
                        <div className=" border-gray-600 border-r-4"></div>
                        <NavLink to='login' className="px-2 flex justify-center items-center rounded  border-b-4 border-gray-600">Log in</NavLink>
                        <NavLink to='register' className="px-2 flex justify-center items-center rounded  border-b-4 border-gray-600">Register</NavLink>
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
                                        <Link to ='contacts' className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
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

            <div onClick={handleMenu} className={`absolute top-0 w-full h-screen ${isOpen ? '' : 'hidden'}`}>

            </div>
            <div className={`absolute bg-black bg-opacity-[95%] hidden md:block top-0 w-[60%] h-screen duration-300 ease-in-out ${isOpen ? 'translate-x-0' : ' -translate-x-full'} `}>
                <div className="w-full flex flex-row justify-between p-3 mt-2">
                    <div className="text-xl font-bold text-white">Trending</div>
                    <div className="text-sm text-gray-100 font-bold cursor-pointer p-1 bg-red-800 rounded-md" onClick={handleMenu}><IoCloseSharp size={24} /></div>
                </div>
                <div className="grid grid-cols-2 mt-5 gap-4 p-3 h-[90vh] overflow-y-scroll">
                    {posts && posts.length > 0 ?
                        (
                            [...posts].reverse().slice(0,5).map((post, index) => {
                                return <TrendyPost key={index} image={post.image} tittle={post.tittle} category={post.category} author={post.author} date={post.updatedAt} _id={post._id} />
                            })
                        ) : (
                            <div className="flex justify-center items-center text-white">No posts found</div>
                        )
                    }

                </div>
            </div>
            <div className={`absolute flex p-3 flex-col bg-black bg-opacity-[95%]  md:hidden z-10 top-0 w-[70%] h-screen duration-200 ease-in-out ${isOpen ? 'translate-x-0' : ' -translate-x-full'} `}>
                <div className="w-full flex flex-row justify-between mt-2">
                    <div className="text-xl font-bold text-white">Menu</div>
                    <div className="text-sm text-gray-100 font-bold cursor-pointer p-1 bg-red-800 rounded-md" onClick={handleMenu}>X</div>
                </div>
                <div className="flex flex-col text-white justify-between py-3 gap-2 my-2 border-t-[1px] border-black">
                    <NavLink reloadDocument={true} to='postcategory/World' className={isMobileNavLinkActive}>World</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/Technology' className={isMobileNavLinkActive}>Technology</NavLink>
                    {/* <Link reloadDocument={true} to='postcategory/Gossip' className={isMobileNavLinkActive}>Gossip</Link> */}
                    {/* <Link reloadDocument={true} to='postcategory/Politics' className={isMobileNavLinkActive}>Politics</Link>
                    <Link reloadDocument={true} to='postcategory/Social' className={isMobileNavLinkActive}>Social</Link> */}
                    <NavLink reloadDocument={true} to='postcategory/Sport' className={isMobileNavLinkActive}>Sport</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/Business' className={isMobileNavLinkActive}>Business</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/Health' className={isMobileNavLinkActive}>Health</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/Style' className={isMobileNavLinkActive}>Style</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/Travel' className={isMobileNavLinkActive}>Travel</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/About' className={isMobileNavLinkActive}>About</NavLink>
                    <NavLink reloadDocument={true} to='postcategory/Contacts' className={isMobileNavLinkActive}>Contacts</NavLink>
                </div>
            </div>
        </div>
    )
}
