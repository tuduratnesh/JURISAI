import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Layout