import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="container sm:container lg:container md:container">
      {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
