import type { ReactNode } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CategoryMenu from "../components/CategoryMenu"

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <div className="flex flex-1">
        <CategoryMenu />
        <main className="flex-1">{children}</main>
      </div>

      <Footer />
    </div>
  )
}
export default Layout
