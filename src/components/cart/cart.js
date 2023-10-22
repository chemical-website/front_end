// const Cart = () => {
//     return (
//         <div style={{width:"15.56rem" , height:"22rem"}} className=" flex flex-col  gap-3   justify-between items-start p-3">
//             <div className=" relative">
//                 {/* <img /> */}
//                 <div style={{width:"14rem" , height:"14rem" , background:"pink"}}></div>
//                 <div className=" absolute top-1 left-1 flex flex-col items-center bg-white">
//                     <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
//                     <path d="M10.5 21H7.5V28.5H15V25.5H10.5V21ZM7.5 15H10.5V10.5H15V7.5H7.5V15ZM25.5 25.5H21V28.5H28.5V21H25.5V25.5ZM21 7.5V10.5H25.5V15H28.5V7.5H21Z" fill="#1CA9C9"/>
//                     <path d="M10.5 21H7.5V28.5H15V25.5H10.5V21ZM7.5 15H10.5V10.5H15V7.5H7.5V15ZM25.5 25.5H21V28.5H28.5V21H25.5V25.5ZM21 7.5V10.5H25.5V15H28.5V7.5H21Z" fill="#8806CE"/>
//                     </svg>
//                     </div>
//                     <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//                     <path d="M17.8751 3.25C15.9901 3.25 14.1809 4.1275 13.0001 5.51417C11.8192 4.1275 10.0101 3.25 8.12508 3.25C4.78841 3.25 2.16675 5.87167 2.16675 9.20833C2.16675 13.3033 5.85008 16.64 11.4292 21.71L13.0001 23.1292L14.5709 21.6992C20.1501 16.64 23.8334 13.3033 23.8334 9.20833C23.8334 5.87167 21.2117 3.25 17.8751 3.25ZM13.1084 20.0958L13.0001 20.2042L12.8917 20.0958C7.73508 15.4267 4.33341 12.3392 4.33341 9.20833C4.33341 7.04167 5.95841 5.41667 8.12508 5.41667C9.79342 5.41667 11.4184 6.48917 11.9926 7.97333H14.0184C14.5817 6.48917 16.2067 5.41667 17.8751 5.41667C20.0417 5.41667 21.6667 7.04167 21.6667 9.20833C21.6667 12.3392 18.2651 15.4267 13.1084 20.0958Z" fill="#1CA9C9"/>
//                     <path d="M17.8751 3.25C15.9901 3.25 14.1809 4.1275 13.0001 5.51417C11.8192 4.1275 10.0101 3.25 8.12508 3.25C4.78841 3.25 2.16675 5.87167 2.16675 9.20833C2.16675 13.3033 5.85008 16.64 11.4292 21.71L13.0001 23.1292L14.5709 21.6992C20.1501 16.64 23.8334 13.3033 23.8334 9.20833C23.8334 5.87167 21.2117 3.25 17.8751 3.25ZM13.1084 20.0958L13.0001 20.2042L12.8917 20.0958C7.73508 15.4267 4.33341 12.3392 4.33341 9.20833C4.33341 7.04167 5.95841 5.41667 8.12508 5.41667C9.79342 5.41667 11.4184 6.48917 11.9926 7.97333H14.0184C14.5817 6.48917 16.2067 5.41667 17.8751 5.41667C20.0417 5.41667 21.6667 7.04167 21.6667 9.20833C21.6667 12.3392 18.2651 15.4267 13.1084 20.0958Z" fill="#8806CE"/>
//                     </svg>
//                     </div>
//                     <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//                     <path d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7583C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4908 9.6525 12.2417L17.29 7.78917C17.875 8.33084 18.6442 8.66667 19.5 8.66667C21.2983 8.66667 22.75 7.21501 22.75 5.41667C22.75 3.61834 21.2983 2.16667 19.5 2.16667C17.7017 2.16667 16.25 3.61834 16.25 5.41667C16.25 5.67667 16.2933 5.92584 16.3475 6.175L8.71 10.6275C8.125 10.0858 7.35583 9.75001 6.5 9.75001C4.70167 9.75001 3.25 11.2017 3.25 13C3.25 14.7983 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5833C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5833C22.6633 18.8392 21.2442 17.42 19.5 17.42Z" fill="#1CA9C9"/>
//                     <path d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7583C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4908 9.6525 12.2417L17.29 7.78917C17.875 8.33084 18.6442 8.66667 19.5 8.66667C21.2983 8.66667 22.75 7.21501 22.75 5.41667C22.75 3.61834 21.2983 2.16667 19.5 2.16667C17.7017 2.16667 16.25 3.61834 16.25 5.41667C16.25 5.67667 16.2933 5.92584 16.3475 6.175L8.71 10.6275C8.125 10.0858 7.35583 9.75001 6.5 9.75001C4.70167 9.75001 3.25 11.2017 3.25 13C3.25 14.7983 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5833C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5833C22.6633 18.8392 21.2442 17.42 19.5 17.42Z" fill="#8806CE"/>
//                     </svg>
//                     </div>
//                 </div>
//             </div>
//             <div style={{color:"#7606B2"}}>
//                 <p style={{fontWeight:"500"}} className=" text-2xl">سرتیتر اسم محصول</p>
//                 <p style={{fontWeight:"400"}} className=" text-lg">زیرتیتر توضیح</p>
//             </div>
//             <div className=" flex flex-row  items-center justify-between w-full">
//                 <div className=" flex flex-row  items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M16.025 12.7167L13.9084 12.475C13.4 12.4167 12.9 12.5917 12.5417 12.95L11.0084 14.4833C8.65003 13.2833 6.7167 11.3583 5.5167 8.99167L7.05837 7.45001C7.4167 7.09167 7.5917 6.59167 7.53337 6.08334L7.2917 3.98334C7.1917 3.14167 6.48337 2.50834 5.63337 2.50834H4.1917C3.25003 2.50834 2.4667 3.29167 2.52503 4.23334C2.9667 11.35 8.65837 17.0333 15.7667 17.475C16.7084 17.5333 17.4917 16.75 17.4917 15.8083V14.3667C17.5 13.525 16.8667 12.8167 16.025 12.7167Z" fill="#1CA9C9"/>
//                 <path d="M16.025 12.7167L13.9084 12.475C13.4 12.4167 12.9 12.5917 12.5417 12.95L11.0084 14.4833C8.65003 13.2833 6.7167 11.3583 5.5167 8.99167L7.05837 7.45001C7.4167 7.09167 7.5917 6.59167 7.53337 6.08334L7.2917 3.98334C7.1917 3.14167 6.48337 2.50834 5.63337 2.50834H4.1917C3.25003 2.50834 2.4667 3.29167 2.52503 4.23334C2.9667 11.35 8.65837 17.0333 15.7667 17.475C16.7084 17.5333 17.4917 16.75 17.4917 15.8083V14.3667C17.5 13.525 16.8667 12.8167 16.025 12.7167Z" fill="#8806CE"/>
//                 </svg>
//                 <p>تماس بگیرید</p>
//                 </div>
//                 <div className=" flex flex-row  items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill="#1CA9C9"/>
//                 <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill="#8806CE"/>
//                 </svg>
//                 <p>مشاهده</p>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Cart;

import styles from "./cart.style.module.css";
import ax from "../../assets/img/Photo.png";
import { IoMdCall } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDisplay, BsFillShareFill } from "react-icons/bs";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function Cart({ x }) {
  const [open, setOpen] = React.useState(false);
  const [img, setImage] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const copyToClipboard = () => {
    let copyText = `http://154.91.170.238/app/product/${x.id}`;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("کپی شد", {position: toast.POSITION.TOP_RIGHT, style: {fontFamily: "VazirD", textAlign: "right"}});
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  let link = `/app/product/${x.id}`;
  return (
    <div>
      <div className={styles.TopPartOfDownB}>
        <div>
          <img
            className="h-48 w-60 object-cover rounded-xl"
            src={x.images[0]["image"]}
          />{" "}
          <div className={styles.LikeBox}>
            <i onClick={copyToClipboard}>
              <BsFillShareFill />
            </i>
          </div>
        </div>
        <div className={styles.downPartt}>
          <h3>{x.title}</h3>
          <p>
            {x.short_description.length > 50
              ? x.short_description.slice(0, 50) + "..."
              : x.short_description}
          </p>
          <div className={styles.LinkSBox}>
            <Link>
              <IoMdCall size={25} />
              <span className="text-lg font-bold">تماس بگیرید</span>
            </Link>
            <Link onClick={handleClickOpen}>
              <MdOutlineOpenInNew size={25} />
              <span className="text-lg font-bold">مشاهده</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
        >
          {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div
                className="flex flex-col md:flex-row items-center"
                style={{ height: "25rem" }}
              >
                <div className="w-full  md:w-1/2">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="w-full flex items-center"
                  >
                    {x.images.map((i) => {
                      return (
                        <SwiperSlide>
                          <div className="flex flex-row items-center justify-center w-full">
                            <img
                              className=" w-4/5 h-96"
                              alt=""
                              src={i["image"]}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                  <div
                    style={{ color: "#27023B" }}
                    className="   text-center md:text-start text-4xl"
                  >
                    {x.title}
                  </div>
                  <div
                    style={{ color: "#27023B" }}
                    className="  text-center md:text-start text-xl"
                  >
                    {x.short_description}
                  </div>
                  <div
                    style={{ color: "#27023B" }}
                    className=" text-center md:text-start  text-lg"
                  >
                    {x.description}
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className={styles.LinkSBox}>
              <Link to={link}>
                <MdOutlineOpenInNew size={30} />
                مشاهده
              </Link>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
