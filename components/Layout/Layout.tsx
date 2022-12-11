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
      <div className="container lg:px-10 md:px-8 sm:px-6 px-4">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
