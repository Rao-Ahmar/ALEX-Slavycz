import { NextPage } from "next";
import React from "react";
import Artists from "../../components/Artists/Index";
import PageTransition from "../../components/PageTransition";

const Index: NextPage = () => {
  return <>
  <PageTransition />
  <Artists />
  </>
}

export default Index;
