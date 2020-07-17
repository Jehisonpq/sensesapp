import React from "react";

import Header from "./header";
import Nav from "./nav";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
