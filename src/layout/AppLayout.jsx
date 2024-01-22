import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
const AppLayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Footer />
      </div>

      <div>
        <NavBar />
      </div>

      <div className="mt-4 mx-2 sm:mx-20 ">
        <Outlet />
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
