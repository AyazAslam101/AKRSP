import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto py-10 px-2 overflow-hidden container">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
