import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbars/Navbar'
import { Footer } from '../components/Footer'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}
