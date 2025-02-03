import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import contactss from "../assets/images/contacts.png"

export const Contacts = () => {
    return (
        <div className="w-full mb-24">
            <div className="px-3 max-w-[1280px] mx-auto">
                <div className="text-6xl my-6 px-4">Contacts</div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <img src={contactss} loading="lazy" className="w-[70%] mx-auto" alt="" />
                    <div className="flex flex-col gap-y-5 text-xl text-center mx-auto md:text-start">
                        <div className="text-4xl  my-6">Contact us</div>
                        <div className="flex flex-row gap-x-2"><FaPhone size={24} /> <div>+255 658 191 222</div></div>
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

            </div>

        </div>
    )
}
