import { Link } from "react-router-dom"

export const LoginNavbar = () => {
    return (
        <nav className="absolute top-0 w-full flex flex-row justify-between items-center py-5 px-3">
            <Link to="/" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                <div><span className="text-green-600 font-bold">/</span><span className="text-orange-600 text- font-bold">/</span>Describe</div>
            </Link>
            <div className="flex flex-row gap-x-2 items-center">
                <Link to='/login' className="px-2 hover:border-red-500 flex justify-center items-center rounded  border-b-4 border-gray-600">Log in</Link>
                <Link to='/register' className="px-2 flex justify-center items-center hover:border-red-500 rounded  border-b-4 border-gray-600">Register</Link>
            </div>
        </nav>
    )
}
