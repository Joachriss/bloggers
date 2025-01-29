import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className='w-full border-t-2 border-green-500 shadow pt-7 bg-transparent dark:bg-[]#212222'>
            <div className='mx-auto px-3 md:px-5 max-w-[1200px]'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 justify-between text-start">
                    <div className="col-span-full text-md text-center">
                        Get in touch with us 
                        <Link to='contacts' className="font-bold"> Contacts</Link>
                    </div>
                    <div className="col-span-full mx-auto">
                        <div className="flex gap-x-2 flex-row my-2">
                            <FaInstagram size={24} />
                            <FaFacebook size={24} />
                            <FaTwitter size={24} />
                            <FaTiktok size={24} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-2xl font-bold mt-4">Categories</div>
                        <Link to='posts/category/World' className="w-fit text-md">World</Link>
                        <Link to='posts/category/Technology' className="text-md w-fit p-1">Technology</Link>
                        <Link to='posts/category/Gossip' className="text-md w-fit p-1">Gossip</Link>
                        <Link to='posts/category/Sport' className="text-md w-fit p-1">Sport</Link>
                        <Link to='posts/category/Business' className="text-md w-fit p-1">Business</Link>
                        <Link to='posts/category/Health' className="text-md w-fit p-1">Health</Link>
                        <Link to='posts/category/Style' className="text-md w-fit p-1">Style</Link>
                        <Link to='posts/category/Travel' className="text-md w-fit p-1">Travel</Link>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-2xl font-bold mt-4">Our blog</div>
                        <Link to="/" className="text-md w-fit p-1">Home</Link>
                        <Link to="login" className="text-md w-fit p-1">Login</Link>
                        <Link to="register" className="text-md w-fit p-1">Sign up</Link>
                        <Link to='aboutus' className="text-md w-fit p-1">About us</Link>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-2xl font-bold mt-4">Documents</div>
                        <div className="text-md w-fit p-1">Privacy</div>
                        <div className="text-md w-fit p-1">Terms and conditions</div>
                        <div className="text-md w-fit p-1">Help & Support</div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="text-2xl font-bold mt-4 w-fit">Contacts</div>
                        <div className="flex flex-row gap-x-3 w-fit">
                            <FaPhone size={24} /> <div>255 658 191 222</div>
                        </div>
                        <a href="http://joachriss@gmail.com" className="flex flex-row gap-x-2 items-center"><IoMail size={24} /> <div></div>joachriss@gmail.com</a>
                        <Link to='contacts' className="text-md w-fit p-1">Contact us</Link>
                    </div>
                    <div className="col-span-full mt-2 flex flex-col text-center items-center py-6 border-t-2 border-gray-900 dark:border-gray-300">
                        <small><span className="font-bold">DESCRIBE</span>&copy;Copyright{Date().split(" ").at(3)}  </small>
                        <small>Designed & developed by: <span className="font-bold">+255 658 191 222</span> Email: <span className="font-bold"><a href="mailto:joachriss@gmail.com">joachriss@gmail.com</a></span></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
