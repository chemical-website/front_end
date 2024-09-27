import React, {useRef, useState} from "react";
// Import Swiper React components
import Flickity from "react-flickity-component";


export default function PicSlider({images, isForBanner = false}) {
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
                {image.map((i, index) => {

                    if (isForBanner) {
                        return (
                            <div key={index} className="w-full">
                                <img
                                    className="w-full h-[calc(100vh-100px)] object-cover rounded-2xl"
                                    src={i.image}
                                    alt={`slide-${index}`}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="flex flex-row items-center justify-center rounded-2xl">
                                <img className="w-96  h-80 rounded-2xl" src={i.image} alt={`slide-${index}`}/>
                            </div>
                        )
                    }

                })}
            </Flickity>
        </>
    );
}
