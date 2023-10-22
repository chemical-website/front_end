import { Link } from "react-router-dom";
import mainpage from "./MainPage.module.css";
import { useEffect, useState } from "react";
import ax from "../../assets/img/Photo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDisplay, BsFillShareFill } from "react-icons/bs";
import { MdFilterListAlt, MdHeight } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { BaseRoot } from "../../baseRoot";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Cart from "../cart/cart";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Product from "../../pages/product/product";



function DownerPart() {
  let [y,sety]=useState(1)
  let [x,setx]=useState(0)
  let [z,setz]=useState(0)

function HameHandler() {
  if (y==1) {
    sety(0)
  } else {
    sety(1)
    setx(0)
    setz(0)
  }
}

  function BarkhiHandler() {
    if (x==1) {
      setx(0)
    } else {
      setx(1)
      sety(0)
      setz(0)
    }
  }

  function YekhdeHandler() {
    if (z==1) {
      setz(0)
    } else {
      setz(1)
      setx(0)
      sety(0)
    }
  }
  const [prdouctData , setProductData] = useState([])
  const [collections , setCollections] = useState([])
  const config = {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  };
  useEffect(()=>{

    axios.get(`${BaseRoot}store/products/` , config).then(
      function(response){
        setProductData(response.data)
      }
    )
  },[y])
  useEffect(()=>{

    axios.get(`${BaseRoot}store/collections/` , config).then(
      function(response){
        setCollections(response.data)
      }
    )
  },[y])
  useEffect(() => {
    if( x ===1) {
      console.log("gih")
      axios.get(`${BaseRoot}store/products/?recommend=True` , config).then(
        function(response){
          setProductData(response.data)
        }
      )
    }
  },[x])


  let  MahsolatList =[
    {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید",
    id:"1"
  },
 
 
  ]


  





  return (
    <>
      <div className={mainpage.DownBBox}>
       <div className={mainpage.uptitle}> <span className={mainpage.pishnahadT}>پیشنهاد ویژه </span>
        <div className={mainpage.ShowPart}><i><MdFilterListAlt/> </i><div className={mainpage.textP}><span onClick={HameHandler} 
        className={y==0 ? mainpage.pishnahadat2 : mainpage.pishnahadat3 }>نمایش همه</span> 
        <span className={x==0 ? mainpage.pishnahadat4 : mainpage.pishnahadat3 }  onClick={() => {
          BarkhiHandler()}}>نمایش برخی </span></div></div>
        </div> 
        <Swiper 
         breakpoints={{
        800: {
          width: 8200,
          slidesPerView: 4,
        },
        500: {
          width: 768,
          slidesPerView: 2,
        },
      }}
          slidesPerView={1} navigation={true} modules={[Navigation]} className='w-full'>
      
  
          {prdouctData.map((x) => {
            return(  
              <SwiperSlide>
              <Cart x={x} />
        </SwiperSlide>

          )})}
          </Swiper>
     </div>
    </>
  );
}

export default DownerPart;


// export function Cart({x}){
//   return(
//     <>

//             <div  className={mainpage.TopPartOfDownB} >
//               <div><img src={x.image}/> <div className={mainpage.LikeBox}><i><RiFullscreenLine/></i><i><AiOutlineHeart/></i><i><BsFillShareFill/></i></div></div>
//               <div className={mainpage.downPartt}><h3>{x.titr}</h3><p>{x.tozihat}</p> <div className={mainpage.LinkSBox}><Link><IoMdCall/>{x.tamas}</Link><Link><MdOutlineOpenInNew/>{x.moshahede}</Link></div></div>
//               </div>
         
//               </>
//   )
// }