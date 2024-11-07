import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/index";
import Navbar from "../components/navbar/index";

const RootLayout = () => {
  return (
    <div>
      {/* TODO: navbar @FaizanSurani */}
      <Navbar />
      <Outlet />
      <Footer />
      {/* TODO: footer @FaizanSurani */}
    </div>
  );
};

export default RootLayout;
