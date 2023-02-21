import { NextPage } from "next";
import React from "react";
import ArtistProjectDetails from "../../../components/Artists/ArtistWork/ArtistProjectDetails";
import PageTransition from "../../../components/PageTransition";

const DetailedProject: NextPage = () => {
  return (
    <>
      <PageTransition />
      <ArtistProjectDetails />
    </>
  );
};

export default DetailedProject;
