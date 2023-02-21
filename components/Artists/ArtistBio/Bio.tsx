import React from "react";
import Image from "next/image";

const Bio: React.FC = () => {
  return (
    <div className="w-full h-full bg-OffWhite md:mt-8 mt-6">
      <div className="w-full max-w-[1360px] m-auto md:px-8 px-4 flex justify-center items-center md:flex-row flex-col md:gap-16 gap-6">
        <div className="md:w-[372px] w-full md:h-[468px] h-[460px] relative md:-mt-6">
          <Image
            src={"/alexbio.png"}
            alt="Artist"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-[calc(100%-372px)] flex justify-center items-center flex-col">
          <p className="font-Grotesque font-[300] md:text-[16px] text-[10px] md:leading-[27px] leading-[20px] tracking-[0.5%] ">
            Alex Slavycz is a Canadian born creative director. With extensive
            working expertise in the fields of creative & artistic direction,
            fashion styling, visual merchandising & design, Alex is truly a
            multi-dimensional creative who has crafted iconic above the line
            campaigns, motion, digital and printed imagery for a multitude of
            international clients since 2001.
            <br /> <br />
            Born to a Ukrainian – Ecuadorian family in Canada, Alex has lived
            and worked across the Americas, Asia and Europe most of his life.
            His uniquely rich cross-cultural experiences have always been at the
            heart of his vision and inspiration, combining genuine local
            perspectives & cultural sensitivity with the highest global
            standards of creation & execution.
            <br /> <br />
            Not only has he led major creative projects for clients such as
            Ports, Estee Lauder, Elizabeth Arden, Revlon, Clinique, C&A, Net A
            Porter, Alex also devotes himself to creating inspiring editorial
            content for publications such as WSJ, T magazine, Harpers Bazaar,
            Rouge Fashion Book, Tatler & Vogue Me.
          </p>
          <div className="flex justify-center items-center gap-6 my-8">
            <a
              href=""
              target={"_blank"}
              className="font-Grotesque font-medium md:text-[18px] text-[16px] leading-[20px] uppercase underline"
            >
              INSTAGRAM
            </a>
            <a
              href=""
              target={"_blank"}
              className="font-Grotesque font-medium md:text-[18px] text-[16px] uppercase underline"
            >
              CONTACT AGENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
