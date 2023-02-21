import { NextPage } from "next";
import React from "react";
import TheClients from "../../components/Creative/Clients/Index";
import PageTransition from "../../components/PageTransition";

const clients: NextPage = () => {
  return (
    <>
      <PageTransition />
      <TheClients />
    </>
  );
};

export default clients;
