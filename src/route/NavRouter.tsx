import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const WithNav = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const WithoutNav = () => {
  return <Outlet />
}

export { WithNav, WithoutNav }
