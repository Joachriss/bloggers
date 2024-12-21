import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbars/Navbar'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
