import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  Title: string;
  LeftImage: string;
  RightImage: string;
}

const TwoHalved: React.FC<Props> = ({
  LeftImage,
  RightImage,
  Title,
}: Props) => {
  return (
    <div className="w-full flex justify-center items-start flex-col">
      <div
        className={`w-full md:h-[948.92px] flex justify-center items-center md:flex-row flex-col gap-8`}
      >
        <Link
          href={``}
          className={`md:[50%] w-full h-full relative Detail-Link overflow-hidden md:block hidden`}
        >
          <Image
            src={LeftImage}
            alt="picture"
            fill
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </Link>
        <Link
          href={``}
          className={`md:[50%] w-full md:h-full h-[422px] relative Detail-Link overflow-hidden`}
        >
          <Image
            src={RightImage}
            alt="picture"
            fill
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
      <p className="font-Grotesque font-[300] md:text-[13px] text-[11px] leading-[20px] text-black md:mt-3 mt-2">
        {Title}
      </p>
    </div>
  );
};

export default TwoHalved;
