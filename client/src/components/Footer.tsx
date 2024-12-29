import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className='w-full border-t-2  shadow pt-9'>
            <div className='mx-auto px-3 md:px-0 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 justify-between text-center sm:text-start">
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
                        <div className="text-md">Home</div>
                        <div className="text-md">About us</div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl font-bold">Documents</div>
                        <div className="text-md">Privacy</div>
                        <div className="text-md">Terms and conditions</div>
                        <div className="text-md">Help & Support</div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl font-bold">Contacts</div>
                        <div className="text-md">Home</div>
                        <div className="text-md">About us</div>
                    </div>
                    <div className="col-span-full mt-2 flex flex-col justify-center items-center py-6 border-t-2 border-gray-900">
                        <small>Copyright&copy;<span className="font-bold">DESCRIBE</span></small>
                        <small>{Date().toLocaleLowerCase()}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
