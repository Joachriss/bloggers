import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { LoginNavbar } from "../components/navbars/LoginNavbar";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";

export const ResetPassword = () => {
    const navigate = useNavigate();
    const params = useParams();
    const token = params.token;
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleVerifyEmail = async () => {
        setLoading(true);
        try {
            if (token && password === confirmPassword) {
                const response = await axios.post(`/resetpassword`,{passwordResetToken:token,newPassword:password});
                console.log(response);
                if (response.data.message) {
                    toast.success(response.data.message);
                    navigate('/login');
                } else {
                    toast.error(response.data.error);
                }
                setLoading(false)
            } else {
                toast.error("Passwords do not match")
                setLoading(false);
            }
        }
        catch (error: any) {
            console.log(error);
            setLoading(false);
            toast.error(error.message);
        }
    }
    return (
        <div className="w-full h-screen bg-transparent">
            <LoginNavbar />
            <div className="flex items-center h-full">
                <div className="max-w-md mx-auto px-3">
                    <div className="text-2xl md:text-5xl text-center my-10 font-bold">Reset password</div>
                    <p className="mb-5 text-lg">
                        Confirm the new password
                    </p>
                    <div className="mb-2 mt-1 flex flex-col gap-y-5">
                        <div className="flex flex-col">
                            <label htmlFor="password">New password</label>
                            <input required onChange={(e) => setPassword(e.target.value)} id="password" type="password" name="password" placeholder="....." className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Confirm new password</label>
                            <input required onChange={(e) => setConfirmPassword(e.target.value)} id="password" type="password" name="password" placeholder="....." className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' />
                        </div>
                        <button type="submit" onClick={handleVerifyEmail} className="p-2 bg-green-700 duration-100 hover:bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex mx-auto" disabled={loading}>{loading ? <DefaultSpinner /> : 'Reset'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
