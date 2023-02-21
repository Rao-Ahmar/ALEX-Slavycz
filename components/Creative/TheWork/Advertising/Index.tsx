import React from "react";
import Navbar from "../Navbar";
import ImageGallery from "../../../Common/HorizontalScrollingGallery/Gallery";
import { Data } from "../../../../JSON/Data";

const Index: React.FC = () => {
  return (
    <div className="w-full md:h-[calc(100vh-100px)] md:max-h-[calc(100vh-100px)] overflow-hidden bg-OffWhite">
      <div className="w-full md:px-8 px-4">
        <Navbar />
      </div>
      <div className="md:h-[calc(100vh-145px)] mt-2">
        <ImageGallery
          GalleryData={Data.Creative.Advertising}
          BaseRoute={"/creative/work/advertising/"}
        />
      </div>
    </div>
  );
};

export default Index;
