import { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ThemeButton = () => {
    // getting system theme preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark,setIsDark] = useState<boolean>(systemTheme);

    // set theme process
    const dark = document.documentElement;
    if(isDark === true){
        dark.setAttribute('class','dark');
    }else{
        dark.setAttribute('class','');
    }

    // set theme onclick event handler
    const setTheme = () =>{
        setIsDark(!isDark);
    }
  return (
    <button className="p-3 flex justify-center text-center fixed bottom-10 end-10 border-2 dark:bg-gray-800 bg-gray-800 rounded-full text-gray-200" onClick={setTheme}>
        {isDark ? <FaSun/> :<FaMoon/> }
    </button>
  )
}
