import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Creative/TheWork/Navbar";
import Image from "next/image";
import { Data } from "../../../JSON/Data";
import SVG from "../../../SVG/SVG";
import { useRouter } from "next/router";
import ResponsiveVideo from "../../Common/ResponsiveVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

function Details() {
  const Router = useRouter();
  const ProjectName = Router.query.ProjectName;
  const [SliderLength, SetSliderLength] = useState<any>([]);
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState<string>("");

  const SliderRef = useRef<any>();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      console.log(event.key);
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
    if (!Router.query.ProjectName) {
      Router.back();
    }
    if (Router.query.advertising)
      SetSliderLength(Data.Artist.ArtistDemo[0]?.Project);
    else SetSliderLength(Data.Artist.ArtistDemo[0]?.Project);

    // Get Artist details
    setName(localStorage.getItem("Artist") || "");
    setTitle(localStorage.getItem("Title") || "");
  }, []);

  const [CheckPhone, SetCheckPhone] = useState("");

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
  const length = SliderLength.length;

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
          ? "h-[calc(100vh-130px)]"
          : "h-[calc(100vh-54px)]"
      } md:relative md:z-[100] md:-mt-[50px] mt-[54px]`}
    >
      <div className="md:h-[65px] h-[50px] flex justify-center items-center flex-col">
        <h1 className="font-Eurostile font-[700] md:text-[32px] text-[24px] md:leading-[45px] leading-[25px] tracking-[-2%] text-black uppercase text-center">
          {Name}
        </h1>
        <div className="flex justify-center items-center md:gap-10 gap-4">
          <p className="font-Grotesque font-normal text-[12px] uppercase">
            {Title}
          </p>
          <Link
            className="font-Grotesque font-[300] text-[12px] uppercase Custom-Hover-Cursor"
            href={{
              pathname: `/artist/${Name}`,
              query: { Title: Title, Tab: "bio" },
            }}
          >
            BIO
          </Link>
        </div>
      </div>
      <div className="w-full relative overflow-hidden md:h-[calc(100%-65px)] h-[calc(100%-130px)] m-auto md:px-8 px-4 pt-5 pb-1">
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
      <div className="flex md:justify-between justify-center items-center w-full md:flex-row flex-col-reverse md:h-[50px] h-[80px] md:px-8 px-4 md:pb-3">
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
        <p className="font-Grotesque font-[200] text-black md:text-[13px] text-[10px] leading-[20px] tracking-[0.5%] uppercase">
          {ProjectName}
        </p>
        <button
          onClick={Router.back}
          className="font-Eurostile font-normal text-[14px] uppercase text-Gray leading-[60px] tracking-[5%] Custom-Hover-Cursor md:block hidden"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default Details;
