import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = (props: { children: any }) => {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="bg-bgprimary">
        <Header />
      </div>
      <div className="container mx-auto xl:px-11 lg:px-8 md:px-6 sm:px-4 px-3">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
