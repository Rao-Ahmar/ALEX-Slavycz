import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

interface Props {
  URL: string;
  VideoType: string;
  control?: boolean;
}

const ResponsiveVideo: React.FC<Props> = ({
  URL,
  VideoType,
  control = false,
}: Props) => {
  const Router = useRouter();
  const videoRef = useRef<HTMLVideoElement | any>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef && videoRef?.current.play();
    }, 2000)
  }, []);

  return (
    <video
      loop={true}
      ref={videoRef}
      controls={control}
      className={`w-full h-full ${
        Router.pathname === "/" ? "object-cover" : "object-contain"
      } ${control ? "pointer-events-auto" : "pointer-events-none"} `}
    >
      <source src={URL} type={VideoType} />
    </video>
  );
};

export default ResponsiveVideo;
