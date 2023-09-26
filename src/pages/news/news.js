import React, { Fragment, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineOpenInNew } from "react-icons/md";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import NavigationBar from '../../layout/header/NavigationBar';
import { Link } from 'react-router-dom';

const NewsCart = ()=> {
    return(
        <div className='flex flex-col  justify-between items-start h-fit mx-9'>
            <div style={{background:"#F7EBFE" , width:"100%" , height:"18rem" , position:"relative"}}>
            <div style={{position:"absolute" , left:"5px" , top:"5px" , background:"#fff" , borderRadius:"0.5rem" , boxShadow:"0px 0px 10px 0px #DCF5FA"}}>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M17.8751 3.25C15.9901 3.25 14.1809 4.1275 13.0001 5.51417C11.8192 4.1275 10.0101 3.25 8.12508 3.25C4.78841 3.25 2.16675 5.87167 2.16675 9.20833C2.16675 13.3033 5.85008 16.64 11.4292 21.71L13.0001 23.1292L14.5709 21.6992C20.1501 16.64 23.8334 13.3033 23.8334 9.20833C23.8334 5.87167 21.2117 3.25 17.8751 3.25ZM13.1084 20.0958L13.0001 20.2042L12.8917 20.0958C7.73508 15.4267 4.33341 12.3392 4.33341 9.20833C4.33341 7.04167 5.95841 5.41667 8.12508 5.41667C9.79342 5.41667 11.4184 6.48917 11.9926 7.97333H14.0184C14.5817 6.48917 16.2067 5.41667 17.8751 5.41667C20.0417 5.41667 21.6667 7.04167 21.6667 9.20833C21.6667 12.3392 18.2651 15.4267 13.1084 20.0958Z" fill="#1CA9C9"/>
  <path d="M17.8751 3.25C15.9901 3.25 14.1809 4.1275 13.0001 5.51417C11.8192 4.1275 10.0101 3.25 8.12508 3.25C4.78841 3.25 2.16675 5.87167 2.16675 9.20833C2.16675 13.3033 5.85008 16.64 11.4292 21.71L13.0001 23.1292L14.5709 21.6992C20.1501 16.64 23.8334 13.3033 23.8334 9.20833C23.8334 5.87167 21.2117 3.25 17.8751 3.25ZM13.1084 20.0958L13.0001 20.2042L12.8917 20.0958C7.73508 15.4267 4.33341 12.3392 4.33341 9.20833C4.33341 7.04167 5.95841 5.41667 8.12508 5.41667C9.79342 5.41667 11.4184 6.48917 11.9926 7.97333H14.0184C14.5817 6.48917 16.2067 5.41667 17.8751 5.41667C20.0417 5.41667 21.6667 7.04167 21.6667 9.20833C21.6667 12.3392 18.2651 15.4267 13.1084 20.0958Z" fill="#8806CE"/>
</svg></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z" fill="#1CA9C9"/>
  <path d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z" fill="#8806CE"/>
</svg>
                </div>
            </div>
            </div>
            <div>
                <p style={{color:"#27023B"}} className=' font-semibold text-xl mt-4'>عمده رشد منابع درآمدی بودجه در دولت سیزدهم از افزایش صادرات نفت است</p>
            </div>
            <div className='flex flex-row justify-between items-center  w-1/3'>
                <p  style={{color:"#D184FB"}} className=" font-normal text-base">۱۴۰۱/۸/۱۲</p>
                <p  style={{color:"#D184FB"}} className=" font-normal text-base">۵:۳۰</p>
                <p  style={{color:"#D184FB"}} className=" font-normal text-base">۱۵بازدید</p>
            </div>
            <div style={{color:"#3B0359"}} className=' font-normal text-lg'>پلتس در روز ۱۸ آگوست ، قیمت ایزومر زایلین ترکیبی را با ۳ دلار افزایش بر اساس ترم تحویل کره جنوبی و با همین میزان افزایش بر اساس ترم تحویل تایوان و با ۶ دلار افزایش بر اساس ترم تحویل چین ارزیابی نمود .</div>

            <div className=' self-end flex flex-row items-center mt-4'>
            <Link className=' flex flex-row items-center' style={{color:"#8806CE"}}><MdOutlineOpenInNew/>مشاهده بیشتر</Link>
            </div>
        </div>
    )
}

const NewsPage = () => {
    return ( 
        <Fragment>
        <NavigationBar />
            <div className='flex flex-row justify-between items-end'>
              <div className='mt-8 w-2/3'>
             <Swiper  direction='vertical' slidesPerView={2}  style={{height:"60rem" , width:"100%"}}>
        <SwiperSlide className='mb-12 h-fit'>
            <div className=' grid grid-cols-2'>
                <NewsCart />
                <NewsCart />
            </div>
        </SwiperSlide>
        <SwiperSlide className='mb-12'>
            <div className=' grid grid-cols-2'>
                <NewsCart />
                <NewsCart />
            </div>
        </SwiperSlide>
        <SwiperSlide className='mb-12'>
            <div className=' grid grid-cols-2'>
                <NewsCart />
                <NewsCart />
            </div>
        </SwiperSlide>
        <SwiperSlide className='mb-12'>
            <div className=' grid grid-cols-2'>
                <NewsCart />
                <NewsCart />
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
        </Fragment>
    
     );
}
 
export default NewsPage;