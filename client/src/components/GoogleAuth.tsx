import { useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "react-google-button"


export const GoogleAuth = () => {

  const handleGoogleLogin = useGoogleLogin({
    onSuccess:(tokenResponse) => console.log(tokenResponse.access_token),
    onError:(error) => console.log(error),
  });

  return (
    <div className="" onClick={() => handleGoogleLogin()}>
      <GoogleButton />
    </div>
  )
}
