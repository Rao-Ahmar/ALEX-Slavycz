import { NextPage } from "next";
import React from "react";
import AdvertisingPage from "../../../../components/Creative/TheWork/Advertising/Index";
import PageTransition from "../../../../components/PageTransition";

const advertising: NextPage = () => {
  return (
    <>
      <PageTransition />
      <AdvertisingPage />
    </>
  );
}

export default advertising;
