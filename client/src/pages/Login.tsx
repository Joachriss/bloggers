import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import { DefaultSpinner } from "../components/spinners/DefaultSpinner";
import { GoogleAuth } from "../components/GoogleAuth";
import { LoginNavbar } from "../components/navbars/LoginNavbar";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userNavigateToPath = location.state?.from?.pathname || '/';
  const adminNavigateToPath = location.state?.from?.pathname || '/admin';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);
  // login user
  const loginUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!userContext?.user) {
      try {

        const { data } = await axios.post("/login", { email, password });

        if (data.error) {
          setLoading(false);
          toast.error(data.error);
        } else {
          await userContext?.reloadUser();
          setLoading(false);
          toast.success("login successiful");

          if (data.user.role === "admin") {
            navigate(adminNavigateToPath);
          }
          else {
            navigate(userNavigateToPath)
          }

        }
      } catch (error) {
        console.log(error);
        toast.error("Login: something went wrong, please check connection or try again");
      }
    }
    else{
      toast.success('You are already logged in');
      if(userContext?.user?.role === 'admin'){
        navigate(adminNavigateToPath);
      }
      else{
        navigate(userNavigateToPath);
      }
    }
  }
  return (
    <section className="bg-transparent">
      <LoginNavbar/>
      <div className="flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={loginUser} action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <Link to="/passwordresetrequest" className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-300">Forgot password?</Link>
              </div>
              <button type="submit" className="w-full text-gray-600 dark:text-gray-300 border-2 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 " disabled={loading}>{loading ?<DefaultSpinner />:"Sign in"}</button>
              <div className="mx-auto w-fit">
                <GoogleAuth loading={loading} setLoading={setLoading}/>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to="/register" className="font-extrabold text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
              <div className="text-center font-light text-lg w-full"><Link to='/' className="p-2 hover:font-bold flex flex-row items-center gap-x-1 mx-auto text-center w-fit"><FaHome />Homepage</Link></div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
