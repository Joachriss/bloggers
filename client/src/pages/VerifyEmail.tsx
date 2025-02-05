import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginNavbar } from "../components/navbars/LoginNavbar";

export const VerifyEmail = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');

    const handleVerifyEmail = async () => {
        try {
            if (token) {
                const response = await axios.post(`/verifyemail/${token}`);
                console.log(response);
                toast.success(response.data.message);
            } else {
                navigate('/login');
            }
        }
        catch (error : any) {
            console.log(error);
            toast.error(error.message);
        }
    }
    return (
        <div className="w-full h-screen bg-transparent">
            <LoginNavbar />
            <div className="flex items-center h-full">
                <div className="max-w-md mx-auto px-3">
                    <div className="text-2xl md:text-5xl text-center my-10 font-bold">Email verification</div>
                    <p className="mb-5 text-lg">
                        Enter the token sent to your email to verify your account
                    </p>
                    <div className="mb-2 mt-1 flex flex-col gap-y-5">
                        <input required onChange={(e) => setToken(e.target.value)} type="text" pattern="[0-9]" inputMode="numeric" maxLength={6} name="comment" placeholder="123456" className='p-2 text-center shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' />
                        <button type="submit" onClick={handleVerifyEmail} className="p-2 bg-green-700 duration-100 hover:bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex mx-auto">Verify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
