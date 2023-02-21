import React, { ReactNode } from "react";
import Navigation from "../Global/Navigation/Navigation";
import Footer from "../Global/Footer/Footer";

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
