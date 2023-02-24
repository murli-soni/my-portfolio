import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>PORTFOLIO</title>
      </Head>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
