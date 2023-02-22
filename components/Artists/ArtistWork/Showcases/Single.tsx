import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  Title: string;
  Img: string;
  Height: string;
}

const Single: React.FC<Props> = ({ Title, Img, Height }: Props) => {
  return (
    <div className="w-full flex justify-center items-start flex-col">
      <Link
        href={``}
        className={`md:[50%] w-full ${Height} h-[422px] relative Detail-Link overflow-hidden`}
      >
        <Image
          src={Img}
          alt="picture"
          fill
          className="object-cover transition-all duration-300 ease-in-out"
        />
      </Link>
      <p className="font-Grotesque font-[300] md:text-[13px] text-[11px] leading-[20px] text-black md:mt-3 mt-2">
        {Title}
      </p>
    </div>
  );
};

export default Single;
