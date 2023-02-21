import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  Title: string;
  LeftImg: string;
  MiddleImg: string;
  RightImg: string;
}

const Three: React.FC<Props> = ({
  Title,
  LeftImg,
  MiddleImg,
  RightImg,
}: Props) => {
  return (
    <div className="w-full flex justify-center items-start flex-col">
      <div className="w-full h-[550.99px] grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-8">
        <Link
          href={``}
          className={`md:[50%] w-full h-full relative Detail-Link overflow-hidden md:block hidden`}
        >
          <Image
            src={LeftImg}
            alt="picture"
            fill
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </Link>
        <Link
          href={``}
          className={`md:[50%] w-full h-full relative Detail-Link overflow-hidden md:block hidden`}
        >
          <Image
            src={MiddleImg}
            alt="picture"
            fill
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </Link>
        <Link
          href={``}
          className={`md:[50%] w-full h-full relative Detail-Link overflow-hidden`}
        >
          <Image
            src={RightImg}
            alt="picture"
            fill
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
      <p className="font-Grotesque font-[300] md:text-[16px] text-[12px] leading-[20px] text-black md:mt-3 mt-2">
        {Title}
      </p>
    </div>
  );
};

export default Three;
