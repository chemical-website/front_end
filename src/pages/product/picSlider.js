import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function PicSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='w-2/3'>
        <SwiperSlide>
            <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-row items-center justify-center'>
                slide 1
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
