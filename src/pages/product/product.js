import { useParams } from "react-router-dom";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BsDisplay, BsFillShareFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { BaseRoot } from "../../baseRoot";
import "swiper/css";
import { Fragment, useEffect, useState } from "react";
import Additional from "./additional";
import Property from "./property";
import { Navigation } from "swiper/modules";
import notExisteIcon from "../../assets/Icons/Close.svg";
import ExisteIcon from "../../assets/Icons/Done.svg";
import "swiper/css/navigation";
import Comment from "./comment";
import PicSlider from "./picSlider";
import NavigationBar from "../../layout/header/NavigationBar";
import axios from "axios";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { Dialog } from "@mui/material";
import Order from "./order";
import { FiHeart } from "react-icons/fi";

const Product = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [info, setInfo] = useState({});
  const [desc, setDesc] = useState("");
  const [prevDesc, setPrewDesc] = useState(false);
  const [tags, setTags] = useState([]);
  const [prop, setProp] = useState({});
  const [sectionState, setSectionState] = useState(1);
  const changeState = (num) => {
    setSectionState(num);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/products/${id}/`, config)
      .then(function (response) {
        setInfo(response.data);
        setTags(response.data.tags);
        setDesc(response.data.description);
        setPrewDesc(response.data.preview_description);
        setProp(response.data.properties);
        setImages(response.data.images);
        if (response.data.properties == undefined) {
          setProp({ "": "" });
        }
        // console.log(response.data.properties)
      });
  }, []);
  const copyToClipboard = () => {
    let copyText = `${window.location.hostname}${
      window.location.port === 80 ? null : ":" + window.location.port
    }${window.location.pathname}/${info.id}`;
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

  return (
    <Fragment>
      <NavigationBar />
      <div className="flex flex-col justify-start items-center">
        <div className="w-4/5">
          <div className="flex flex-row items-center justify-start gap-2 w-auto mb-9 mt-14">
            <div>
              <Link to={"/app"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_26_272)">
                    <path
                      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                      fill="#0C4957"
                    />
                    <path
                      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                      fill="#3B0359"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_26_272">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_26_281)">
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    fill="#1892AD"
                  />
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    fill="#7606B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26_281">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>محصولات</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_26_281)">
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    fill="#1892AD"
                  />
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    fill="#7606B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26_281">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>{info.title}</div>
            <div></div>
          </div>
        </div>

        <div className=" flex flex-col w-full lg:flex-row lg:items-start gap-7 lg:gap-0 items-center justify-between lg:w-4/5 mb-12">
          <div className="w-8/12 lg:w-1/3 flex justify-center flex-col items-first">
            <PicSlider images={images} />
          </div>
          <div className="w-4/5 lg:w-1/3 flex flex-col h-full">
            <h3 className="font-bold text-3xl">{info.title}</h3>
            <p className="  font-medium text-lg mb-10">
              {info.short_description}
            </p>
            <div className="font-normal text-lg w-full">
              {prevDesc.length > 1000
                ? prevDesc.substring(0, 1000) + " [ادامه در پایین صفحه]"
                : prevDesc}
            </div>
          </div>
          <div className="w-4/5 md:w-1/4 flex justify-center flex-col items-center md:items-center gap-3">
            <div
              style={{
                background: "#F7EBFE",
                borderRadius: "1.3rem",
                color: "#7606B2",
              }}
              className="p-5 w-3/5 max-xl:w-4/5 max-lg:w-full"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between  w-1/2">
                  <div onClick={copyToClipboard} className="cursor-pointer">
                    <BsFillShareFill size={25} />
                  </div>
                  <div
                    onClick={() => {
                      toast("Liked.");
                    }}
                    className="cursor-pointer"
                  >
                    <FiHeart size={25} />
                  </div>
                </div>
                <div
                  style={{ display: info.inventory > 0 ? "flex" : "none" }}
                  className=" text-2xl flex flex-row items-center"
                >
                  <img src={ExisteIcon} className="w-9" />
                  موجود
                </div>
                <div
                  style={{ display: info.inventory <= 0 ? "flex" : "none" }}
                  className=" text-sm flex flex-row items-center"
                >
                  <img src={notExisteIcon} className="w-9" />
                  ناموجود
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-7">
                <div>
                  <p className="  font-bold text-xl">تماس بگیرید</p>
                  <p className="text-xl" style={{ direction: "rtl" }}>
                    ۹۸۹۹۰۰۷۸۴۳۲۲+
                  </p>
                </div>
                <div>
                  <IoMdCall size={25} />
                </div>
              </div>
            </div>
            <div
              className="w-3/5 max-xl:w-4/5 max-lg:w-full"
              onClick={handleClickOpen}
            >
              <button
                style={{
                  background: "#8806CE",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  borderRadius: "1rem",
                  paddingBlock: "0.6rem",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                ثبت درخواست
              </button>
            </div>
            <div className=" grid grid-cols-3 w-3/5 max-xl:w-4/5 max-lg:w-full gap-3 mt-5">
              {tags.map((e) => {
                return (
                  <div
                    style={{ background: "#F7EBFE", color: "#3B0359" }}
                    className="p-4 py-1 rounded-md text-center font-bold text-base flex flex-row justify-center"
                  >
                    {e.tag.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{ width: "80%", height: "0", border: " 2px solid #F5F5F5" }}
        ></div>
        <div className="flex flex-col justify-start items-start w-4/5">
          <div className="flex flex-col md:flex-row justify-center md:w-auto w-full items-center md:justify-between w-1/6 mt-5">
            <div
              style={{ color: sectionState === 1 ? "#3B0359" : "#D184FB" }}
              className=" font-semibold text-3xl mx-4 cursor-pointer"
              onClick={() => {
                changeState(1);
              }}
            >
              توضیحات
            </div>
            <div>/</div>
            <div
              style={{ color: sectionState === 2 ? "#3B0359" : "#D184FB" }}
              className=" font-semibold text-3xl mx-4 cursor-pointer"
              onClick={() => {
                changeState(2);
              }}
            >
              مشخصات
            </div>
            <div>/</div>
            <div
              style={{ color: sectionState === 3 ? "#3B0359" : "#D184FB" }}
              className=" font-semibold text-3xl mx-4 cursor-pointer"
              onClick={() => {
                changeState(3);
              }}
            >
              نظرات
            </div>
          </div>
          <div
            className="h-fit mb-5 w-full"
            style={{ display: sectionState === 1 ? "flex" : "none" }}
          >
            <Additional text={info.description} />
          </div>
          <div
            className="w-full h-fit mb-5"
            style={{ display: sectionState === 2 ? "flex" : "none" }}
          >
            <Property prop={prop} />
          </div>
          <div
            className="w-full h-fit mb-5"
            style={{ display: sectionState === 3 ? "flex" : "none" }}
          >
            <Comment id={id} />
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
      >
        <Order id={id} />
      </Dialog>
    </Fragment>
  );
};

export default Product;
