import React from "react";
import ImageGallery from "../../Common/HorizontalScrollingGallery/Gallery";
import { Data } from "../../../JSON/Data";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  return (
    <div className="w-full h-full mt-4 md:pb-2">
      <ImageGallery
        GalleryData={Data.Artist.ArtistDemo}
        BaseRoute={"/artist/work/"}
      />
    </div>
  );
};

export default Index;


