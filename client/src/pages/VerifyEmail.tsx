import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginNavbar } from "../components/navbars/LoginNavbar";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";
import { GiCheckMark } from "react-icons/gi";

export const VerifyEmail = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleVerifyEmail = async () => {
        setLoading(true);
        try {
            if (token) {
                const response = await axios.post(`/verifyemail/${token}`);
                console.log(response);
                if (response.data.message) {
                    toast.success(response.data.message);
                    await setLoading(false);
                    setIsVerified(true);
                    navigate('/login');
                }
                else {
                    toast.error(response.data.error);
                    setLoading(false);
                }
            }
            else {
                toast.error('Token is required');
                setLoading(false);
            }
        }
        catch (error: any) {
            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }
    }
    return (
        <div className="w-full h-screen bg-transparent">
            <LoginNavbar />
            <div className="flex items-center h-full">
                <div className="max-w-md mx-auto px-3">
                    <div className="text-2xl md:text-5xl text-center my-10 font-bold">Email verification</div>
                    {
                        isVerified ? (
                            <div className="text-lg text-center flex flex-col items-center gap-3">
                                <div className="text-center font-bold">Email verified!</div>
                                <div className="p-5 w-fit rounded-full bg-green-600 text-white">
                                    <GiCheckMark size={22}/>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-5 text-lg">
                                    Enter the token sent to your email to verify your account
                                </div>
                                <div className="mb-2 mt-1 flex flex-col gap-y-5">
                                    <input required onChange={(e) => setToken(e.target.value)} type="text" pattern="[0-9]" inputMode="numeric" maxLength={6} name="token" placeholder="123456" className='p-2 text-center shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' />
                                    <button type="submit" onClick={handleVerifyEmail} className="p-2 bg-green-700 duration-100 hover:bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex mx-auto">{loading ? <DefaultSpinner /> : 'Verify'}</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
