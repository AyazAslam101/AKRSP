import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl lg:max-w-6xl md:max-w-6xl sm:max-w-6xl xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto lg: md:py-8 sm:py-4 lg:px-2 overflow-hidden container">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
