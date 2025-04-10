
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function Layout() {
  const location = useLocation();
  const hideHeaderFooterPaths = ['/login', '/signup']; // pages where Navbar & Footer should be hidden
  const shouldShowHeaderFooter = !hideHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeaderFooter && <Navbar />}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Outlet />
        </main>
        {shouldShowHeaderFooter && <Footer />}
      </div>
    </>
  );
}

export default Layout;

