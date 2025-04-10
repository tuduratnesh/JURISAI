import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { UserProvider, useUser } from "./Context/userContext";
import Login from "./Components/Login";

function Layout() {
  const location = useLocation();
  const hideHeaderFooterPaths = ["/login", "/signup"]; // pages where Navbar & Footer should be hidden
  const shouldShowHeaderFooter = !hideHeaderFooterPaths.includes(
    location.pathname
  );
  const navigate = useNavigate();

  const { user } = useUser();
  useEffect(() => {
    user ? navigate("/") : navigate("/login");
  }, [user]);

  return (
    <>
      <div>
        {shouldShowHeaderFooter && <Navbar />}
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Outlet />
          </main>
          {shouldShowHeaderFooter && <Footer />}
        </div>
      </div>
    </>
  );
}

export default Layout;
