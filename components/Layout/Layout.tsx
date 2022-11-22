import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = (props: { children: any }) => {
  return (
    <div className="">
      <Navbar />
      <div className="container">
      {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
