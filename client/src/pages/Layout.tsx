import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbars/Navbar'
import { Footer } from '../components/Footer'
import { ThemeButton } from '../components/ThemeButton'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <ThemeButton/>
        <Footer/>

    </div>
  )
}
