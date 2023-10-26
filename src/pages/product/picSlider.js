import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Flickity from "react-flickity-component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function PicSlider({ images }) {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: 1500,
    selectedAttraction: 0.01,
    friction: 0.15
  };
  const image = images;
  return (
    <>
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        cellAlign="center"
      >
        {image.map((i) => {
          return (
            <div className="flex flex-row items-center justify-center rounded-2xl">
              <img className="w-full h-full rounded-2xl" src={i.image} />
            </div>
          );
        })}
      </Flickity>
    </>
  );
}
