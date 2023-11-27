import styles from "./cart.style.module.css";
import { IoMdCall } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillShareFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiHeart } from "react-icons/fi";
import { useModal } from "../../context/ModalContext";

import Slide from "@mui/material/Slide";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import ToPersianNumber from "./../../utilities/ToPersianNumber";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart({ x }) {
  const [num, setNum] = useState(0);

  const [open, setOpen] = React.useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const handleClickOpen = (data) => {
    openModal({ ...data, type: "product" });
  };
  const sendLike = () => {
    if (!localStorage.getItem("token")) {
      window.location.href = '/app/s'
    }
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .post(`${BaseRoot}store/products/${x.id}/likes/`, config, {
        user: ` Authorization: ${localStorage.getItem("token")}`,
      })
      .then(function (response) {
        console.log(response.data);
      });
  };
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/products/${x.id}/likes/`)
      .then(function (response) {
        setNum(response.data);
      });
  }, []);
  const copyToClipboard = () => {
    let copyText = `${window.location.hostname}${
      window.location.port === 80 ? null : ":" + window.location.port
    }${window.location.pathname}/${x.id}`;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("کپی شد", {
        style: {
          textAlign: "start",
          direction: "rtl",
          fontFamily: "Markazi Text",
          fontSize: "20px",
        },
      });
    }
  };
  let link = `/app/product/${x.id}`;
  return (
    <div div className="w-auto flex flex-col items-center">
      <div className={styles.TopPartOfDownB}>
        <div>
          <img
            className="h-48 w-60 object-cover rounded-lg"
            src={x.images[0]["image"]}
          />
          <div className={styles.LikeBox}>
            <i onClick={sendLike} className="cursor-pointer">
              <FiHeart size={20} color="#8806ce" />
            </i>
            {/* <i> {num}</i> */}
            <i onClick={copyToClipboard} className="cursor-pointer">
              <BsFillShareFill size={20} color="#8806ce" />
            </i>
          </div>
          {/* <div className="absolute flex flex-row justify-center items-center gap-1 top-6 right-6 px-2 font-bold bg-slate-50 rounded-md">
            <span>{ToPersianNumber(num)}</span>
            <FiHeart size={20} color="#8806ce" />
          </div> */}
        </div>
        <div className={styles.downPartt}>
          <h3>{x.title}</h3>
          <p className="overflow-hidden h-10">{x.short_description}</p>{" "}
          <div className={styles.LinkSBox}>
            <Link to={"/app/aboutus"}>
              <IoMdCall size={25} />
              <span className="text-xl">تماس بگیرید</span>
            </Link>
            <Link
              onClick={() => {
                handleClickOpen(x);
              }}
            >
              <MdOutlineOpenInNew size={25} />
              <span className="text-lg">مشاهده</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
