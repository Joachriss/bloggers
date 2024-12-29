import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"

export const Contacts = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-y-5 max-w-[1200px] px-3 mx-auto text-center md:text-start">
                <div className="text-xl font-extrabold mt-4">Contacts</div>
                <div className="flex flex-row gap-x-2"><FaPhone size={24} /> <div>255 658 191 222</div></div>
                <a href="http://joachriss@gmail.com">
                    <div className="flex flex-row gap-x-2">
                        <IoMail size={24} />
                        <div>joachriss@gmail.com</div>
                    </div>
                </a>
                <div className="flex flex-row gap-6 my-2">
                    <FaInstagram size={30} />
                    <FaFacebook size={30} />
                    <FaTwitter size={30} />
                    <FaTiktok size={30} />
                </div>
            </div>
        </div>
    )
}
