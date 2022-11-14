import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-2 overflow-hidden sm:px-4 container lg:px-30 py-2 mx-auto">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
