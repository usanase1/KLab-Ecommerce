import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
//import React from "react";
import { Outlet } from "react-router-dom"
//import { Route } from "react-router-dom";
//import { Routes } from "react-router-dom";
//import { BrowserRouter } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <>
        <Outlet />
      </>

      <Footer />
    </div>
  )
}
export default Layout
