import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <div className="text-4xl font-bold">Error</div>  
      <div>
      Go <Link to="/" className="hover:text-blue-700 font-bold">Home</Link>
      </div>
    </div>
  )
}
