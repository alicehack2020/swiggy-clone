import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-4 mx-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
