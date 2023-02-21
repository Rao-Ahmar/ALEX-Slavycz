import { NextPage } from "next";
import React from "react";
import EditorialPage from "../../../../components/Creative/TheWork/Editorial/Index";
import PageTransition from "../../../../components/PageTransition";

const Editorial: NextPage = () => {
  return (
    <>
      <PageTransition />
      <EditorialPage />
    </>
  );
};

export default Editorial;
