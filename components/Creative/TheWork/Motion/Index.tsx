import React from "react";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import ResponsiveVideo from "../../../Common/ResponsiveVideo";
import Image from "next/image";
import { Data } from "../../../../JSON/Data";

const Index: React.FC = () => {
  const Router = useRouter();
  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-OffWhite">
      <div className="w-full max-w-[1360px] m-auto md:px-8 px-4 pb-8 flex justify-start items-center flex-col">
        <Navbar />
        {/* Video */}
        <div className="w-full max-w-[1080px] m-auto flex justify-center items-start flex-col mt-2">
          <div className="w-full object-cover">
            <ResponsiveVideo
              URL="/videos/Garcon.mp4"
              VideoType="video/mp4"
              control={true}
            />
          </div>
          <p className="font-Grotesque font-[300] md:text-[13px] text-[10px] leading-[30px] text-black tracking-[5%]">
            2022 Showreel
          </p>
        </div>
        {/* Grid */}
        <div
          className={`w-full grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-6 md:gap-8 gap-4 md:mt-12 mt-4`}
        >
          {Data.Creative.Work.Grid.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center items-start flex-col "
              >
                <div className="w-full md:h-[287.5px] sm:h-[400px] h-[220px] relative overflow-hidden">
                  <Image src={item.URL} alt="" fill className="object-cover" />
                </div>
                <p className="font-Grotesque font-[300] md:text-[13px] text-[10px] leading-[30px] text-black tracking-[5%]">
                  {item.Title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
