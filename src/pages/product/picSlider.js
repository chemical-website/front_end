import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function PicSlider({images}) {
    const image = images
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='w-full'>
        {image.map(i=> {
            return(
                <SwiperSlide className='flex flex-row items-center'>
            <div className='flex flex-row items-center justify-center'>
                <img className=' w-64 h-56'  src={i.image} />
            </div>
        </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
}
