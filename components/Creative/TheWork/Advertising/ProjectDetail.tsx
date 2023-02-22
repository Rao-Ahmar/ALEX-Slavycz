import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import { Data } from "../../../../JSON/Data";
import SVG from "../../../../SVG/SVG";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Details() {
  const Router = useRouter();
  const SliderRef = useRef<any>();
  const [SliderLength, SetSliderLength] = useState<any>([]);
  const [CheckPhone, SetCheckPhone] = useState("");

  const [Title, setTitle] = useState<any>("");

  const SetProjectTitle = () => {
    if (Router.query.advertising) setTitle(Router.query.advertising);
    else Router.push("/creative/work/advertising");
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowRight") {
        SliderRef.current.onClickNext();
      }
      if (event.key === "ArrowLeft") {
        SliderRef.current.onClickPrev();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    SetSliderLength(Data.Creative.Advertising[0].Project);
    SetProjectTitle();
  }, []);

  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      SetCheckPhone("Phone");
      console.log("Phone");
    } else {
      SetCheckPhone("Desktop");
      console.log("Desktop");
    }
  }, [Router]);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    SliderRef.current.onClickNext();
  };
  const prevSlide = () => {
    SliderRef.current.onClickPrev();
  };
  if (!Array.isArray(SliderLength) || SliderLength.length <= 0) {
    return null;
  }

  return (
    <div
      className={`w-full md:h-[calc(100vh-100px)] ${
        CheckPhone === "Phone"
          ? "h-[calc(100vh-120px)]"
          : "h-[calc(100vh-54px)]"
      } md:overflow-hidden bg-OffWhite`}
    >
      <Navbar />
      <div className="w-full relative overflow-hidden md:h-[calc(100%-95px)] h-[calc(100%-145px)] m-auto md:px-8 px-4 md:pt-1 md:pb-2">
        <Carousel
          ref={SliderRef}
          dynamicHeight={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          emulateTouch={true}
          swipeable={true}
          infiniteLoop={true}
          selectedItem={current}
          onChange={(currentIndex, item) => {
            setCurrent(currentIndex);
          }}
        >
          {SliderLength.map((slide, index) => {
            return slide.IsVideo ? (
              <div
                className="relative px-1 h-full md:w-full flex justify-center items-center"
                key={index}
              >
                <video
                  className="md:absolute md:h-full"
                  loop={true}
                  playsInline
                  autoPlay
                  muted
                  controls={true}
                >
                  <source src={slide.IMG} type={"video/mp4"} />
                </video>
              </div>
            ) : (
              <img
                key={index}
                src={slide.IMG}
                alt=""
                className="object-contain w-full h-full px-1"
              />
            );
          })}
        </Carousel>
      </div>
      <div className="flex md:justify-between justify-center items-center w-full md:flex-row flex-col-reverse md:h-[50px] h-[100px] md:px-8 px-4 md:pb-3">
        {/* Pagination */}
        <div className="flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="bg-transparent md:w-[10px] w-[7px] md:h-[17px] h-[14px] Custom-Hover-Cursor"
          >
            <SVG.Back />
          </button>
          <div className="md:w-[56px] w-[25px] md:mx-0 mx-[26px] flex justify-center items-center">
            <p className="font-Eurostile font-normal md:text-[14px] text-[10px] text-Gray md:leading-[60px] leading-[45px] tracking-[5%]">
              {current + 1 + "/" + SliderLength?.length}
            </p>
          </div>
          <button
            onClick={nextSlide}
            className="bg-transparent md:w-[10px] w-[7px] md:h-[17px] h-[14px] Custom-Hover-Cursor"
          >
            <SVG.Next />
          </button>
        </div>
        <p className="font-Grotesque font-[200] text-black md:text-[13px] text-[11px] leading-[20px] tracking-[0.5%] uppercase">
          {Title}
        </p>
        <button
          onClick={Router.back}
          className="font-Eurostile font-normal text-[14px] uppercase text-Gray leading-[20px] tracking-[5%] Custom-Hover-Cursor md:block hidden"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default Details;
