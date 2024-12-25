import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendyPost } from "../posts/TrendyPost";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setOpen] = React.useState(false);
    const [posts, setPosts] = useState<any>([]);
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
        <div className="sticky top-0 z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <nav className="w-full">
                <div className="justify-between flex flex-row p-6 items-center">
                    <div className="flex items-center">
                        <HiMenuAlt2 onClick={handleMenu} className="cursor-pointer" size={27} />
                    </div>
                    <Link to="/" className="text-4xl font-bold">Describe</Link>
                    <div className="flex flex-row gap-x-5 items-center">
                        <IoSearchSharp size={24} />
                        <div className="p-2 bg-black text-white rounded">Subscribe</div>
                    </div>
                </div>
                <div className="mx-auto hidden md:block px-3 md:px-0 max-w-[1280px]">
                    <div className="flex flex-wrap justify-between py-3 gap-2 my-2 border-t-[1px] border-black font-medium">
                        <Link to='postcategory/World' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">World</Link>
                        <Link to='postcategory/Technology' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Technology</Link>
                        <Link to='postcategory/Gossip' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Gossip</Link>
                        <Link to='postcategory/Politics' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Politics</Link>
                        <Link to='postcategory/Social' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Social</Link>
                        <Link to='postcategory/Sport' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Sport</Link>
                        <Link to='postcategory/Business' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Business</Link>
                        <Link to='postcategory/Health' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Health</Link>
                        <Link to='postcategory/Style' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Style</Link>
                        <Link to='postcategory/Travel' className="px-2 flex justify-center items-center rounded  border-b-4 border-orange-600">Travel</Link>
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
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            {/* <PencilIcon className="size-4 fill-white/30" /> */}
                                            About
                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
                                            Contacts
                                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                        </button>
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
                            [...posts].reverse().slice(0,3).map((post, index) => {
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
                    <Link  to='postcategory/World' className="p-2 flex rounded  border-b-4 border-orange-600">World</Link>
                    <Link  to='postcategory/Technology' className="p-2 flex rounded  border-b-4 border-orange-600">Technology</Link>
                    <Link  to='postcategory/Gossip' className="p-2 flex rounded  border-b-4 border-orange-600">Gossip</Link>
                    <Link  to='postcategory/Politics' className="p-2 flex rounded  border-b-4 border-orange-600">Politics</Link>
                    <Link  to='postcategory/Social' className="p-2 flex rounded  border-b-4 border-orange-600">Social</Link>
                    <Link  to='postcategory/Sport' className="p-2 flex rounded  border-b-4 border-orange-600">Sport</Link>
                    <Link  to='postcategory/Business' className="p-2 flex rounded  border-b-4 border-orange-600">Business</Link>
                    <Link  to='postcategory/Health' className="p-2 flex rounded  border-b-4 border-orange-600">Health</Link>
                    <Link  to='postcategory/Style' className="p-2 flex rounded  border-b-4 border-orange-600">Style</Link>
                    <Link  to='postcategory/Travel' className="p-2 flex rounded  border-b-4 border-orange-600">Travel</Link>
                    <Link  to='postcategory/About' className="p-2 flex rounded  border-b-4 border-orange-600">About</Link>
                    <Link  to='postcategory/Contacts' className="p-2 flex rounded  border-b-4 border-orange-600">Contacts</Link>
                </div>
            </div>
        </div>
    )
}
