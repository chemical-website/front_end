import { Link, useParams } from "react-router-dom";
import bgimg from "../../assets/img/Backdropkk Art.png"
import PicSlider from "../product/picSlider";
import NavigationBar from "../../layout/header/NavigationBar";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/img/Photo (1).png"
import { SwiperSlide , Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { MdOutlineOpenInNew } from "react-icons/md";
import { toast } from "react-toastify";
import closePic from "../../assets/Icons/Close.svg"
import { BaseRoot } from "../../baseRoot";
import iconShow from "../../assets/Icons/Frame 19.png"
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import axios from "axios";

const listofUser = [{"pic": img1 , "title" :"سرتیتر اسم محصول" , "text" : "زیرتیتر توضیح"} , {"pic": img1 , "title" :"سرتیتر اسم محصول" , "text" : "زیرتیتر توضیح"} ,{"pic": img1 , "title" :"سرتیتر اسم محصول" , "text" : "زیرتیتر توضیح"} ,{"pic": img1 , "title" :"سرتیتر اسم محصول" , "text" : "زیرتیتر توضیح"} ,{"pic": img1 , "title" :"سرتیتر اسم محصول" , "text" : "زیرتیتر توضیح"}]
const listImg = [img1 , img1 , img1]
const NewsCart = ({info})=> {
  const [open, setOpen] = useState(false);
  const copyToClipboard = () => {
    let copyText = "http://154.91.170.238/app/news";
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <div className='flex flex-col  justify-between items-start h-fit mx-9' style={{width:"20rem"}}>
            <div style={{width:"100%" , height:"18rem" , position:"relative"}}>
            <img alt='' className=" h-72  w-80 " src={info.images[0].image} />
            <div style={{position:"absolute" , left:"5px" , top:"5px" , background:"#fff" , borderRadius:"0.5rem" , boxShadow:"0px 0px 10px 0px #DCF5FA"}}>
                <div onClick={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z" fill="#1CA9C9"/>
                  <path d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z" fill="#8806CE"/>
                </svg>
                </div>
            </div>
            </div>
            <div>
                <p style={{color:"#27023B"}} className=' font-semibold text-xl mt-4'>{info.title}</p>
            </div>
            <div className='flex flex-row justify-between items-center  w-1/3'>
                <p  style={{color:"#D184FB"}} className=" font-normal text-base">{ `${new Date(info.creation_date).getFullYear()} - ${new Date(info.creation_date).getMonth()} - ${new Date(info.creation_date).getDate()}`}</p>
                <p  style={{color:"#D184FB"}} className=" font-normal text-base">{
                  `${new Date(info.creation_date).getHours()} :  ${new Date(info.creation_date).getMinutes()} `
                }</p>
            </div>
            <div style={{color:"#3B0359"}} className=' font-normal text-lg overflow-hidden h-12'>{info.content.substring(0, 50)}</div>

            <div className=' self-end flex flex-row items-center mt-4'>
            <Link onClick={handleClickOpen} className=' flex flex-row items-center' style={{color:"#8806CE"}}><MdOutlineOpenInNew/>مشاهده بیشتر</Link>
            </div>

            <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <DialogContent>
        <Link className="w-full flex justify-end p-4" onClick={handleClose}>
            <img alt=""  src={closePic} />
      </Link>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="flex flex-col md:flex-row items-center"  style={{height:"25rem"}}>
                <div className="w-full  md:w-1/2">
                <Swiper navigation={true} modules={[Navigation]} className='w-2/3'>
                {
                  info.images.map(e=>{
                    return(
                      <SwiperSlide>
                    <div className='flex flex-row items-center justify-center'>
                        <img alt='' className="  scale-90 w-4/5 h-96"  src={e.image} />
                    </div>
                </SwiperSlide>
                    )
                  })
                }
                 </Swiper>
                </div>
                <div className="w-1/2" >
                  <div>{info.title}</div>
                  <div>{`${new Date(info.creation_date).getFullYear()} - ${new Date(info.creation_date).getMonth()} - ${new Date(info.creation_date).getDate()}`}</div>
                  <div>
                    {info.content.substring(0,250)}
                  </div>
                </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <div className=" absolute flex justify-end " style={{left:"1rem" , bottom:"0"}}><Link to={`/app/news/${info.id}`}>
            <img className=" w-14 h-16"  alt="" src={iconShow} />
        </Link></div>
        </DialogActions>
      </Dialog>
        </div>
    )
}

const NewPage = () => {
  const id = useParams();
  const [info , setInfo] = useState({})
  const [imag , setImag] = useState([])
  const [news , setNews] = useState([])
  useEffect(()=>{

    axios.get(`${BaseRoot}store/posts/${id.id}/`).then(
      function(response){
        setInfo(response.data)
        setImag(response.data["images"])
      }
    )
  },[])
  useEffect(()=>{

    axios.get(`${BaseRoot}store/posts/`).then(
      function(response){
        setNews(response.data)
      }
    )
  },[])
    return ( 
        <div style={{color:"#3B0359"}}>
        <NavigationBar />
            {/* <div>
                <img src={bgimg} alt="" />
            </div> */}
            <div className="flex flex-col items-center">
            <div className=" w-4/5">
            <div className="flex flex-row items-center justify-between w-2/3 sm:w-1/3 md:w-1/5 mb-9 mt-14" >
        <div>
        <Link to={"/app"}>
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
</Link>
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
       {info.title}
        </div>
       
        <div>
        </div>
        </div>
            </div>
            </div>
            <div className=" flex flex-col items-center">
            <div  className=" text-4xl  pb-16">
                {info.title}
            </div>
                <div className=" w-4/6 text-lg pb-16">
                {info.content}
                </div>
                <div className="w-4/6">
                <Swiper navigation={true} pagination={true} modules={[Navigation , Pagination]} className='w-full'>
                    {imag.map(i=> {
                        return(
                            <SwiperSlide className='flex flex-row items-center'>
                        <div className='flex flex-row items-center justify-center'>
                            <img className=' w-full  h-96'  src={i.image} alt="" />
                        </div>
                    </SwiperSlide>
            )
        })}
      </Swiper>
            </div>
            
            </div>
                  <div className=" flex flex-col justify-center items-center pt-24">
                  <p className="w-1/6  text-4xl pb-8 ">دیگر اخبار</p>
                  <div className="w-4/6">
                    <Swiper 
         breakpoints={{
        800: {
          slidesPerView: 4,
        },
        500: {
          width:500,
          slidesPerView: 1,
        },
        400: {
          width:400
        }
      }}
          slidesPerView={1}  navigation={true} pagination={true} modules={[Navigation , Pagination]} className='w-full h-96'>
      
  
          {news.map((x) => {
            return(  
              <SwiperSlide className="flex  justify-center w-3/4">
              <NewsCart info={x} />
        </SwiperSlide>

          )})}
          </Swiper>
                    </div>
                  </div>
                  
        </div>
     );
}
 
export default NewPage;