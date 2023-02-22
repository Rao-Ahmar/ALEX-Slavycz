import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BioTab from "./ArtistBio/Bio";
import WorkTab from "./ArtistWork/Work";

const Index: React.FC = () => {
  const Router = useRouter();
  const ArtistDetails = Router.query;
  let Artist: string = ArtistDetails.artist?.toString() || "";
  let ArtistTitle: string = ArtistDetails.Title?.toString() || "";
  const Tab = ArtistDetails.Tab;
  const [ArtistWork, Set_ArtistWork] = useState(true);

  useEffect(() => {
    if (Tab === "work") Set_ArtistWork(true);
    else Set_ArtistWork(false);
    localStorage.setItem("Artist", Artist);
    localStorage.setItem("Title", ArtistTitle);
  }, [Router]);

  return (
    <div
      className={`w-full md:h-[calc(100vh-100px)] bg-OffWhite md:overflow-hidden flex justify-center items-center flex-col`}
    >
      <div className="md:h-[65px] md:mt-0 mt-[32px]">
        <h1 className="font-Eurostile font-[700] md:text-[32px] text-[24px] md:leading-[45px] leading-[25px] tracking-[-2%] text-black uppercase text-center">
          {Artist}
        </h1>
        <div className="flex justify-center items-center md:gap-10 gap-4">
          <button
            onClick={() => Set_ArtistWork(true)}
            className={`font-Grotesque text-[13px] bg-transparent Custom-Hover-Cursor ${
              ArtistWork ? "text-black md:font-normal" : "text-Gray font-[300]"
            }  uppercase text-center`}
          >
            {ArtistDetails.Title}
          </button>
          <button
            onClick={() => Set_ArtistWork(false)}
            className={`font-Grotesque  text-[13px] leading-[20px] bg-transparent Custom-Hover-Cursor ${
              !ArtistWork ? "text-black md:font-normal" : "text-Gray font-[300]"
            }  uppercase text-center`}
          >
            Bio
          </button>
        </div>
      </div>
      <div className="w-full md:h-[calc(100%-65px)] md:mt-0 mt-4">
        {ArtistWork && <WorkTab />}
        {!ArtistWork && <BioTab />}
      </div>
    </div>
  );
};

export default Index;
