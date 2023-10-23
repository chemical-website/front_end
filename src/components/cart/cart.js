import styles from "./cart.style.module.css"
import ax from "../../assets/img/Photo.png";
import closePic from "../../assets/Icons/Close.svg"
import { IoMdCall } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillShareFill } from "react-icons/bs";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconShow from "../../assets/Icons/Frame 19.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation , Pagination } from 'swiper/modules';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Cart({x}){
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const copyToClipboard = () => {
    let copyText = `http://154.91.170.238/app/product/${x.id}`;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  let link = `/app/product/${x.id}`
    return(
      <div div className="w-full flex flex-col items-center">
  
              <div  className={styles.TopPartOfDownB} >
                <div><img className=" h-48 w-60" src={x.images[0]["image"]}/> <div className={styles.LikeBox}><i onClick={copyToClipboard}><BsFillShareFill/></i></div></div>
                <div className={styles.downPartt}><h3>{x.title}</h3><p className="  overflow-hidden h-10">{x.short_description}</p> <div className={styles.LinkSBox}><Link ><IoMdCall/>"تماس بگیرید"</Link><Link onClick={handleClickOpen}><MdOutlineOpenInNew/>"مشاهده کنید"</Link></div></div>
                </div>
                <div 
                style={{overflowY:"visible"}}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
        sx={{overflowY:"visible"}}
      >
      <div className="w-full flex justify-end" onClick={handleClose}>
            <img alt=""  src={closePic} />
      </div>
        <DialogContent>
          <div className=" p-10">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full  md:w-1/2">
                <Swiper navigation={true} pagination={true} modules={[Navigation ,Pagination]} className='w-full flex items-center'>
        {x.images.map(i=>{
          return(
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center w-full'>
               <img className=" w-4/5 h-96" alt="" src={i["image"]} />
            </div>
        </SwiperSlide>
          )
        })}
 
                 </Swiper>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start" >
                  <div style={{color:"#27023B"}} className="   text-center md:text-start text-4xl">{x.title}</div>
                  <div style={{color:"#27023B"}}   className="  text-center md:text-start text-xl p">{x.short_description}</div>
                  <div style={{color:"#27023B"}}  className=" text-center md:text-start  text-lg h-28 overflow-hidden">
                    {x.description}
                  </div>
                  <div  className=" flex flex-row justify-around items-center w-full">
                    {x.tags.map(e=>{
                   
                      return(
                        <div className=" p-2 rounded-lg border-purple-900 text-base  border-2 border-solid">
                        {e.tag.title}
                        </div>
                      )
                    })}
                  </div>
                </div>
            </div>
          </div>
        </DialogContent>
        <div className=" flex justify-end"><Link to={link}>
            <img className=" w-14 h-16"  alt="" src={iconShow} />
        </Link></div>
      </Dialog>
    </div>
                </div>
    )
  }