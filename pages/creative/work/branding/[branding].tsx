import { NextPage } from "next";
import React from "react";
import EditorialDetails from "../../../../components/Creative/TheWork/Branding/ProjectDetail";
import PageTransition from "../../../../components/PageTransition";

const branding: NextPage = () => {
  return (
    <>
      <PageTransition />
      <EditorialDetails />
    </>
  );
};

export default branding;
