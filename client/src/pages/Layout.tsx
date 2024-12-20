import { AdminNavbar } from '../components/navbars/AdminNavbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <AdminNavbar/>
        <div className="w-full">
          <div className="mx-auto px-3 md:px-0 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]">
            <div className="flex overflow-x-scroll justify-between gap-2 my-2">
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">World</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Technology</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Gossip</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Politics</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Social</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Sport</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Business</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Health</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Style</div>
              <div className="px-2 flex justify-center items-center text-md rounded  border-b-4 border-orange-600">Travel</div>
            </div>
          </div>
        </div>
        <Outlet/>
    </div>
  )
}
