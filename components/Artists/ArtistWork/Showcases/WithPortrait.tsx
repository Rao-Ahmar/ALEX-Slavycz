import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  IsPortraitOnRightSide: boolean;
  Title: string;
  LeftImage: string;
  RightImage: string;
  BaseRoute: string;
  ProjectID: string;
}

const WithPortrait: React.FC<Props> = ({
  IsPortraitOnRightSide,
  Title,
  LeftImage,
  RightImage,
  BaseRoute,
  ProjectID,
}: Props) => {
  return (
    <div className="w-full flex justify-center items-start flex-col">
      {/* Pictures */}
      <div
        className={`w-full md:h-[778.87px] flex justify-center items-center md:flex-row flex-col gap-8`}
      >
        {/* Left */}
        <Link
          // href={`"/artist/work/"${Title}`}
          href={`${BaseRoute + Title}?ID=${ProjectID}`}
          className={`${
            IsPortraitOnRightSide
              ? "md:w-[599.08px]"
              : "md:w-[calc(100%-599.08px)]"
          } w-full h-full relative Detail-Link overflow-hidden md:block hidden`}
        >
          <Image
            src={LeftImage}
            alt="picture"
            fill
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </Link>
        {/* Right */}
        <Link
          href={`${BaseRoute + Title}?ID=${ProjectID}`}
          className={`${
            !IsPortraitOnRightSide
              ? "md:w-[599.08px]"
              : "md:w-[calc(100%-599.08px)]"
          } w-full md:h-full h-[233px] relative Detail-Link overflow-hidden`}
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

export default WithPortrait;
