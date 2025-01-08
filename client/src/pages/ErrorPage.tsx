import { Button } from "@headlessui/react"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div className="flex w-full h-screen text-center justify-center items-center flex-col">
      <div className="text-4xl font-bold">Error</div>
      <h1 className="text-5xl font-bold  mb-3">404</h1>
      <div className="text-3xl">Oops...!</div>
      <p className="text-2xl">Sorry, an unexpected error has occurred. <br /><span className="text-lg">The page you requested is not available</span></p>
      <div><Link to="/" className=""><Button className="hover:font-extrabold underline text-blue-600" color="primary">Go home</Button></Link></div>
      <div>
        {/* Go <Link to="/" className="hover:text-blue-700 font-bold">Home</Link> */}
      </div>
    </div>
  )
}
