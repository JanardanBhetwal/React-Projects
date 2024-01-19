import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
