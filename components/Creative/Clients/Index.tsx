import React from "react";
import Image from "next/image";

const Index: React.FC = () => {
  return (
    <div className="w-full md:h-[calc(100vh-100px)] bg-OffWhite">
      <div className="w-full max-w-[1360px] m-auto md:px-8 px-4 py-4 flex justify-center items-center flex-col">
        {/* <h1 className="font-Eurostile font-bold md:text-[54px] text-[20px] md:leading-[45px] leading-[55px] text-black uppercase ">
          CLIENTS
        </h1> */}
        <section className="w-full grid md:grid-cols-5 grid-cols-3 md:grid-rows-6 grid-rows-6 md:gap-8 gap-6 md:mt-5 ">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28,
          ].map((index: number) => {
            return (
              <div className="relative md:w-[50%] w-[70%] m-auto min-h-[77.46px] ">
                <Image
                  src={`/clients/${index}.png`}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Index;
