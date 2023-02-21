import { NextPage } from "next";
import React from "react";
import EditorialDetails from "../../../../components/Creative/TheWork/Advertising/ProjectDetail";
import PageTransition from "../../../../components/PageTransition";

const advertising: NextPage = () => {
  return (
    <>
      <PageTransition />
      <EditorialDetails />
    </>
  );
};

export default advertising;
