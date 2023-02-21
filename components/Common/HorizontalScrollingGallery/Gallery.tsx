import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "../../useWindowDimension";

interface Props {
  GalleryData: Array<any>;
  BaseRoute: string;
}

const Gallery: React.FC<Props> = ({ GalleryData, BaseRoute }: Props) => {
  const ref = React.useRef<any>();
  const { width, height } = useWindowDimensions();
  console.log(width, height);
  const [WidthState, SetWidthState] = React.useState("");
  const SetImageWidth = (Landscape: boolean) => {
    if (height && height >= 300 && height < 500)
      return Landscape
        ? "md:w-[22rem] sm:h-[400px] "
        : "md:w-[10rem] sm:h-[900px] ";
    else if (height && height >= 500 && height < 600)
      return Landscape
        ? "md:w-[30rem] sm:h-[400px] "
        : "md:w-[14rem] sm:h-[900px] ";
    else if (height && height >= 600 && height <= 700)
      return Landscape
        ? "md:w-[40rem] sm:h-[400px] "
        : "md:w-[20rem] sm:h-[900px] ";
    else if (height && height > 700 && height <= 800)
      return Landscape
        ? "md:w-[50rem] sm:h-[400px] "
        : "md:w-[25rem] sm:h-[900px] ";
    else if (height && height > 800 && height <= 1000)
      return Landscape
        ? "md:w-[58rem] sm:h-[400px] "
        : "md:w-[40rem] sm:h-[900px] ";
    else
      return Landscape
        ? "md:w-[1300px] sm:h-[400px] "
        : "md:w-[630px] sm:h-[900px] ";
  };

  const getScroll = () => {
    const scroll = Math.abs(
      ref.current.getBoundingClientRect().top - ref.current.offsetTop
    );
    console.log(scroll);
  };

  React.useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowRight") {
        ref.current.scrollLeft += 30;
      }
      if (event.key === "ArrowLeft") {
        ref.current.scrollLeft -= 30;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <div
        ref={ref}
        className="Horizontal-Gallery snap-mandatory transition-all duration-300 ease-linear w-full h-full flex md:flex-row flex-col md:overflow-x-scroll scrolling-touch md:gap-0 gap-6 md:pr-0 md:pl-4 pr-4 pl-4 md:pb-1 pb-5"
      >
        {GalleryData.map((item: any, index: number) => (
          <div
            key={index}
            className={`w-full flex justify-center h-full items-start flex-col md:mr-4 `}
          >
            <Link
              href={`${BaseRoute + item.Text}`}
              className={`w-full md:h-[calc(100%-20px)] ${SetImageWidth(
                item.Landscape
              )} relative overflow-hidden Detail-Link transition-all duration-300`}
            >
              <Image
                src={item.URL}
                alt=""
                fill
                className="md:object-cover object-contain transition-all duration-300 ease-in-out md:block hidden"
              />
              <img
                src={item.URL}
                alt=""
                className="w-full h-full md:hidden block"
              />
            </Link>
            <p className="font-Grotesque font-[200] md:text-[13px] text-[12px] md:h-[20px] leading-[18px] text-black tracking-[0.5%] uppercase md:mt-1.5 mt-1">
              {item.Text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
