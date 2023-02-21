import { NextPage } from "next";
import React from "react";
import EditorialDetails from "../../../../components/Creative/TheWork/Editorial/ProjectDetail";
import PageTransition from "../../../../components/PageTransition";

const Details: NextPage = () => {
  return (
    <>
      <PageTransition />
      <EditorialDetails />
    </>
  );
};

export default Details;
