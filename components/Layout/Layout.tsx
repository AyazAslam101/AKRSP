import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="container lg:container sm:container  md:container md:px-2 lg:px-0 px-4">
      {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
