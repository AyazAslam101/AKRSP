import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-bgprimary">
        <Header />
      </div>
      <div className="container px-12">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
