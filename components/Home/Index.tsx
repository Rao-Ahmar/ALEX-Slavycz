import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ResponsiveVideo from "../Common/ResponsiveVideo";

const index: React.FC = () => {
  const Router = useRouter();

  return (
    <div
      className={`container w-full md:h-[calc(100vh-100px)] h-[calc(100vh-54px)] overflow-hidden bg-OffWhite`}
    >
      <div className="w-full h-full object-cover md:block hidden">
        <ResponsiveVideo
          URL="/videos/desktop website animation.mp4"
          VideoType="video/mp4"
        />
      </div>
      <div className="w-full h-screen object-cover md:hidden overflow-hidden block md:mt-0 -mt-8">
        <ResponsiveVideo
          URL="/videos/mobile website animation.mp4"
          VideoType="video/mp4"
        />
      </div>
    </div>
  );
};

export default index;
