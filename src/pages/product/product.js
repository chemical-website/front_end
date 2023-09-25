import { useParams } from "react-router-dom";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BsDisplay, BsFillShareFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useState } from "react";
import Additional from "./additional";
import Property from "./property";

const Product = () => {
    const {id} = useParams()
    // console.log(id)
    const [sectionState , setSectionState] = useState(1)
    const changeState = (num) =>{ 
        setSectionState(num)
    }
    // useState(()=>{
    //     if(sectionState === 1){
    //     }
    // },[sectionState])
    return ( 
        <div className="flex flex-col justify-start items-center">
        <div className="w-full">
        <div className="flex flex-row items-center justify-between w-1/6 mb-9 mt-14" >
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_272)">
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#0C4957"/>
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#3B0359"/>
  </g>
  <defs>
    <clipPath id="clip0_26_272">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_281)">
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#1892AD"/>
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#7606B2"/>
  </g>
  <defs>
    <clipPath id="clip0_26_281">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div>
        محصولات
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_281)">
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#1892AD"/>
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#7606B2"/>
  </g>
  <defs>
    <clipPath id="clip0_26_281">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div>
        پیشنهاد ویژه
        </div>
        <div>
        </div>
        </div>
        </div>

        <div className=" flex flex-row items-center justify-between w-4/5">
            <div className=" w-1/3">
            <Swiper className="w-1/2"
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
            </div>
            <div className=" w-1/3">
                <h3>
                اسم کامل محصول
                </h3>
                <p>
                زیرتوضیحات تک‌خطی
                </p>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <div></div>
            </div>
            <div className=" w-1/3">
            <div style={{background:"#F7EBFE" , width:"60%"  , borderRadius:"0.5rem" , paddingInline:"1.4rem" , paddingBlock:"1.2rem" , marginBottom:"2rem"}}>
                <div className="flex flex-row items-center justify-between">
                    <div  className="flex flex-row items-center justify-between  w-1/2">
                    <div><RiFullscreenLine/></div>
                    <div><AiOutlineHeart/></div>
                    <div><BsFillShareFill/></div>
                    </div>
                    <div>
                        موجود
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div >
                        <p>تماس بگیرید</p>
                        <p>+۹۸۹۱۰۱۲۳۴۵۶</p>
                    </div>
                    <div>
                    <IoMdCall/>
                    </div>
                </div>
            </div>
            <div style={{width:"60%"}}>
                <button style={{background:"#8806CE" , color:"#FFFFFF" , textAlign:"center" , width:"100%" , borderRadius:"0.5rem" , paddingBlock:"0.6rem"}}>ثبت درخواست</button>
            </div>
            </div>
        </div>
        <div style={{width:"90%" , height:"0" , border:" 2px solid #F5F5F5"}}></div>
        <div className="flex flex-col justify-start items-start w-4/5">
            <div className="flex flex-row items-center justify-between  w-1/6">
                <div 
                onClick={()=>{
                    changeState(1)
                }}>
                توضیحات
                </div>
                <div>
                    /
                </div>
                <div onClick={()=>{
                    changeState(2)
                }}>
                مشخصات
                </div>
                <div>
                /
                </div>
                <div onClick={()=>{
                    changeState(3)
                }}>
                نظرات
                </div>
            </div>
            <div style={{display:sectionState===1?"flex":"none"}}>
                <Additional  />
            </div>
            <div  style={{display: sectionState ===2?"flex" : "none"}}>
                <Property />
            </div>
        </div>
        </div>
     );
}
 
export default Product;