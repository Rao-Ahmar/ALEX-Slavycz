import { NextPage } from "next";
import React from "react";
import BrandingPage from "../../../../components/Creative/TheWork/Branding/Index";
import PageTransition from "../../../../components/PageTransition";

const Branding: NextPage = () => {
  return (
    <>
      <PageTransition />
      <BrandingPage />
    </>
  );
}

export default Branding;
