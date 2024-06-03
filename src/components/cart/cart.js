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
import { GoHeartFill } from "react-icons/go";
import { useModal } from "../../context/ModalContext";

import Slide from "@mui/material/Slide";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import NoPhoto from "../../assets/img/No-Image.jpg";
import { useTranslation } from "react-i18next";


export default function Cart({ x, newItemLiked, newItemDisLiked, likedItems }) {
  const [num, setNum] = useState(0);

  const [open, setOpen] = React.useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { t } = useTranslation();

  const handleClickOpen = (data) => {
    openModal({ ...data, type: "product" });
  };

  const sendDisLike = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .post(`${BaseRoot}store/products/${x.id}/likes/?dislike=true`, {}, config)
      .then(function (response) {
        if (response.status === 201) {
          newItemDisLiked(x.id);
        }
      });
  };

  const sendLike = () => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/app/s";
    }
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .post(`${BaseRoot}store/products/${x.id}/likes/`, {}, config)
      .then(function (response) {
        if (response.status === 201) {
          newItemLiked(x.id);
        }
      });
  };
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/products/${x.id}/likes/`)
      .then(function (response) {
        setNum(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(likedItems);
  }, [likedItems]);
  const copyToClipboard = () => {
    let copyText = `${window.location.href}/${x.id}`;
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
          {x.images.length === 0 ? (
            <img
              className="h-48 w-60 object-cover rounded-lg"
              src={NoPhoto}
              alt="no_photo_found"
            />
          ) : (
            <img
              className="h-48 w-60 object-cover rounded-lg"
              src={x.images[0]["image"]}
            />
          )}
          <div className={styles.LikeBox}>
            {likedItems && likedItems.includes(x.id) ? (
              <i className="cursor-pointer">
                <GoHeartFill onClick={sendDisLike} size={20} color="#8806ce" />
              </i>
            ) : (
              <i onClick={sendLike} className="cursor-pointer">
                <FiHeart size={20} color="#8806ce" />
              </i>
            )}
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
            <Link to={`/app/product/${x.id}?status=open`}>
              <IoMdCall size={25} />
              <span className="text-xl">{t("callUs")}</span>
            </Link>
            <Link
              onClick={() => {
                handleClickOpen(x);
              }}
            >
              <MdOutlineOpenInNew size={25} />
              <span className="text-lg">{t("show")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
