import { useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "react-google-button"
import { DefaultSpinner } from "./spinners/DefaultSpinner";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


export const GoogleAuth = (props:any) => {
  const {loading, setLoading} = props;
  const navigate = useNavigate();
  const location = useLocation();
  const userNavigateToPath = location.state?.from?.pathname || '/';
  const adminNavigateToPath = location.state?.from?.pathname || '/admin';
  
  const handleGoogleLogin = useGoogleLogin({
    onSuccess:async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      try{
        setLoading(true);
        const userInfo = await axios.post('/auth/google', {accessToken} );
  
        console.log(userInfo.data.user);
        toast.success(userInfo.data.message);
        if (userInfo.data.user.role === "admin") {
          navigate(adminNavigateToPath);
        }
        else {
          navigate(userNavigateToPath)
        }
        setLoading(false);
      }catch(error){
        setLoading(false);
        console.log(error);
      }

    },
    onError:(error) => console.log(error),
  });

  return (
    <button disabled={loading} type="button" className="" onClick={() => handleGoogleLogin()}>
      {loading ? <DefaultSpinner /> : <GoogleButton />}
    </button>
  )
}
