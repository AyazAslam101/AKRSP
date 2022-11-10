import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = (props: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className="m-8 ml-28 mr-28">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
