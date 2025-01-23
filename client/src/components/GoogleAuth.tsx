import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import GoogleButton from "react-google-button"
import { DefaultSpinner } from "./spinners/DefaultSpinner";
import axios from "axios";


export const GoogleAuth = (props:any) => {
  const {loading, setLoading} = props;
  const [userData, setUserData] = useState<any>(null);
  
  const handleGoogleLogin = useGoogleLogin({
    onSuccess:async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      console.log(tokenResponse);
      console.log(accessToken);
      try{
        setLoading(true);
        const userInfo = await axios.post('/auth/google', {accessToken} );
  
        console.log(userInfo.data);
        setUserData(userInfo.data);
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
