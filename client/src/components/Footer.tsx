import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className='w-full border-t-2  shadow pt-7 bg-transparent dark:bg-slate-900'>
            <div className='mx-auto px-3 md:px-0 max-w-[1200px]'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 justify-between text-start">
                    <div className="col-span-full text-md text-center">
                        Get in touch with us 
                        <Link to='contacts' className="font-bold"> Contacts</Link>
                    </div>
                    <div className="col-span-full mx-auto">
                        <div className="flex gap-x-2 flex-row  my-2">
                            <FaInstagram size={24} />
                            <FaFacebook size={24} />
                            <FaTwitter size={24} />
                            <FaTiktok size={24} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl font-bold">Categories</div>
                        <Link to='postcategory/World' className="text-md">World</Link>
                        <Link to='postcategory/Technology' className="text-md">Technology</Link>
                        <Link to='postcategory/Gossip' className="text-md">Gossip</Link>
                        <Link to='postcategory/Politics' className="text-md">Politics</Link>
                        <Link to='postcategory/Social' className="text-md">Social</Link>
                        <Link to='postcategory/Sport' className="text-md">Sport</Link>
                        <Link to='postcategory/Business' className="text-md">Business</Link>
                        <Link to='postcategory/Health' className="text-md">Health</Link>
                        <Link to='postcategory/Style' className="text-md">Style</Link>
                        <Link to='postcategory/Travel' className="text-md">Travel</Link>
                        <Link to='postcategory/About' className="text-md">About</Link>
                        <Link to='postcategory/Contacts' className="text-md">Contacts</Link>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl font-bold">Our blog</div>
                        <Link to="/" className="text-md">Home</Link>
                        <Link to="login" className="text-md">Login</Link>
                        <Link to="register" className="text-md">Sign up</Link>
                        <Link to='aboutus' className="text-md">About us</Link>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl font-bold">Documents</div>
                        <div className="text-md">Privacy</div>
                        <div className="text-md">Terms and conditions</div>
                        <div className="text-md">Help & Support</div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl font-bold">Contacts</div>
                        <div className="flex flex-row gap-x-2"><FaPhone size={24} /> <div>255 658 191 222</div></div>
                        <a href="http://joachriss@gmail.com" className="flex flex-row gap-x-2 items-center"><IoMail size={24} /> <div></div>joachriss@gmail.com</a>
                        <Link to='contacts' className="text-md">Contact us</Link>
                        {/* <div className="flex flex-row justify-between my-2">
                            <FaInstagram size={24} />
                            <FaFacebook size={24} />
                            <FaTwitter size={24} />
                            <FaTiktok size={24} />
                        </div> */}
                    </div>
                    <div className="col-span-full mt-2 flex flex-col justify-center items-center py-6 border-t-2 border-gray-900 dark:border-gray-300">
                        <small><span className="font-bold">DESCRIBE</span>&copy;Copyright{Date().split(" ").at(3)}  </small>
                        <small>Designed by: <span className="font-bold">+255 658 191 222</span> Email: <span className="font-bold"><a href="mailto:joachriss@gmail.com">joachriss@gmail.com</a></span></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
