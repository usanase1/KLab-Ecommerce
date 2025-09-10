import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import PreFooter from "../components/PreFooter"
import CategoryMenu from "../components/CategoryMenu"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <div className="flex flex-1">
        <CategoryMenu />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      {/* <PreFooter /> */}
      <Footer />
    </div>
  )
}
export default Layout
