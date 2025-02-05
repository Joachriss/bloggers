import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { LoginNavbar } from "../components/navbars/LoginNavbar";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";

export const EmailPasswordResetRequest = () => {
    const [email, setEmail] = useState('');
    const [loading,setLoading]=useState(false);

    const handleVerifyEmail = async () => {
        setLoading(true)
        try {
            if (email) {
                const response = await axios.post(`/requestpasswordresettoken`,{email});
                console.log(response);
                if (response.data.message) {
                    toast.success(response.data.message);
                    setLoading(false)
                } else {
                    toast.error(response.data.error);
                    setLoading(false);
                }

            }
        }
        catch (error: any) {
            console.log(error);
            toast.error(error.message);
            setLoading(false)
        }
    }
    return (
        <div className="w-full h-screen bg-transparent">
            <LoginNavbar />
            <div className="flex items-center h-full">
                <div className="max-w-md mx-auto px-3">
                    <div className="text-2xl md:text-5xl text-center my-10 font-bold">Request password change</div>
                    <p className="mb-5 text-lg">
                        Please, enter your email below
                    </p>
                    <div className="mb-2 mt-1 flex flex-col gap-y-5">
                        <input required onChange={(e) => setEmail(e.target.value)} type="email" name="comment" placeholder="name@example.com" className='p-2 shadow-lg rounded-lg bg-transparent w-full border-2 border-gray-800' />
                        <button type="submit" onClick={handleVerifyEmail} className="p-2 bg-green-700 duration-100 hover:bg-gray-800 shadow-lg text-white rounded-lg mt-2 flex mx-auto" disabled={loading}>{loading ? <DefaultSpinner/> : 'Submit'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
