import { NextPage } from "next";
import React from "react";
import Motion from "../../../components/Creative/TheWork/Motion/Index";
import PageTransition from "../../../components/PageTransition";

const motion: NextPage = () => {
  return (
    <>
      <PageTransition />
      <Motion />
    </>
  );
};

export default motion;
