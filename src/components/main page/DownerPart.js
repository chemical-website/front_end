import { Link } from "react-router-dom";
import mainpage from "./MainPage.module.css";
import { useState } from "react";
import ax from "../../assets/img/Photo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDisplay, BsFillShareFill } from "react-icons/bs";
import { MdFilterListAlt, MdHeight } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

  



  let  MahsolatList =[
    {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
 
 
  ]


  





  return (
    <>
      <div className={mainpage.DownBBox}>
       <div className={mainpage.uptitle}> <span className={mainpage.pishnahadT}>پیشنهاد ویژه </span>
        <div className={mainpage.ShowPart}><i><MdFilterListAlt/> </i><div className={mainpage.textP}><span onClick={HameHandler} className={y==0 ? mainpage.pishnahadat2 : mainpage.pishnahadat3 }>نمایش همه</span> <span className={x==0 ? mainpage.pishnahadat2 : mainpage.pishnahadat3 }  onClick={BarkhiHandler}>نمایش برخی </span><span className={z==0 ? mainpage.pishnahadat : mainpage.pishnahadat3 }  onClick={YekhdeHandler}>نمایش یخده</span></div></div>
        </div> 
        <div className={mainpage.mahsolatS}>




          {MahsolatList.map((x) => {
            let id = -1
            id++
            return( 
            <>

            <div  className={mainpage.TopPartOfDownB} >
              <div><img src={x.image}/> <div className={mainpage.LikeBox}><i><RiFullscreenLine/></i><i><AiOutlineHeart/></i><i><BsFillShareFill/></i></div></div>
              <div className={mainpage.downPartt}><h3>{x.titr}</h3><p>{x.tozihat}</p> <div className={mainpage.LinkSBox}><Link><IoMdCall/>{x.tamas}</Link><Link><MdOutlineOpenInNew/>{x.moshahede}</Link></div></div>
              </div>
         
              </>); 
          })}
        </div>
      </div>
    </>
  );
}

export default DownerPart;
