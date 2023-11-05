import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineOpenInNew } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { BaseRoot } from "../../baseRoot";
import NavigationBar from "../../layout/header/NavigationBar";
import { Link } from "react-router-dom";
import axios from "axios";
import copy from "copy-to-clipboard";
import ClarifyPersianDate from "./../../utilities/ClatifyPersianDate";
import jalaliMoment from "jalali-moment";
import ShowToast from "./../../utilities/ShowToast";
import { useModal } from "../../context/ModalContext";
import ToPersianNumber from "./../../utilities/ToPersianNumber";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const NewsCart = ({ info }) => {
  console.log(info);
  const { openModal } = useModal();
  const [showFeatures, setShowFeatures] = useState(false);

  const copyToClipboard = () => {
    let copyText = `${window.location.hostname}${
      window.location.port === 80 ? null : ":" + window.location.port
    }${window.location.pathname}/${info.id}`;
    let isCopy = copy(copyText);
    if (isCopy) {
      ShowToast("کپی شد!");
    }
  };

  const handleClickOpen = (data) => {
    openModal({ ...data, type: "news" });
  };

  return (
    <div
      onMouseEnter={() => setShowFeatures(true)}
      onMouseLeave={() => setShowFeatures(false)}
      className="flex flex-col justify-between items-start overflow-x-hidden  h-fit mx-9 gap-2 mb-4"
      style={{ width: "20rem" }}
    >
      <div style={{ width: "100%", height: "18rem", position: "relative" }}>
        <img
          alt=""
          className=" h-72 w-80 object-cover rounded-2xl"
          src={info.images[0].image}
        />
        <AnimatePresence>
          {showFeatures && (
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              exit={{ x: -50 }}
              className="absolute top-2 left-2 bg-slate-50 py-2 px-1 rounded-lg shadow-md cursor-pointer"
            >
              <div onClick={copyToClipboard}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z"
                    fill="#1CA9C9"
                  />
                  <path
                    d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z"
                    fill="#8806CE"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <p style={{ color: "#27023B" }} className=" font-semibold text-xl mt-4">
          {info.title}
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <p style={{ color: "#D184FB" }} className=" font-normal text-base">
          {ClarifyPersianDate(
            jalaliMoment(info.creation_date).format("jYYYY-jMM-jDD ")
          )}
        </p>
        <p style={{ color: "#D184FB" }} className=" font-normal text-base">
          {ClarifyPersianDate(
            jalaliMoment(info.creation_date).format("HH:mm:ss")
          )}
        </p>
      </div>
      <div style={{ color: "#3B0359" }} className=" font-normal text-lg">
        {info.content.split(".")[0].length < 500
          ? info.content.split(".")[0] + "."
          : info.content.split(".")[0].slice(0, 500)}
      </div>

      <div className=" self-end flex flex-row items-center mt-4 text-xl">
        <Link
          onClick={() => {
            handleClickOpen(info);
          }}
          className=" flex flex-row items-center gap-2"
          style={{ color: "#8806CE" }}
        >
          <MdOutlineOpenInNew size={25} />
          مشاهده بیشتر
        </Link>
      </div>

      {/* <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <DialogContent>
          <Link className="w-full flex justify-end p-4" onClick={handleClose}>
            <img alt="" src={closePic} />
          </Link>
          <DialogContentText id="alert-dialog-slide-description">
            <div
              className="flex flex-col md:flex-row items-center"
              style={{ height: "25rem" }}
            >
              <div className="w-full  md:w-1/2">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="w-2/3"
                >
                  {info.images.map((e) => {
                    return (
                      <SwiperSlide>
                        <div className="flex flex-row items-center justify-center">
                          <img
                            alt=""
                            className="  scale-90 w-4/5 h-96"
                            src={e.image}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="w-1/2">
                <div>{info.title}</div>
                <div>{`${new Date(
                  info.creation_date
                ).getFullYear()} - ${new Date(
                  info.creation_date
                ).getMonth()} - ${new Date(
                  info.creation_date
                ).getDate()}`}</div>
                <div>{info.content.substring(0, 250)}</div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div
            className=" absolute flex justify-end "
            style={{ left: "1rem", bottom: "0" }}
          >
            <Link to={`/app/news/${info.id}`}>
              <img className=" w-14 h-16" alt="" src={iconShow} />
            </Link>
          </div>
        </DialogActions>
      </Dialog> */}
    </div>
  );
};

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [sort, setSort] = useState(false);
  const [collection, setCollections] = useState([]);
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/collections/`, config)
      .then(function (response) {
        setCollections(response.data);
      });
  }, []);
  useEffect(() => {
    axios.get(`${BaseRoot}store/posts/`, config).then(function (response) {
      setNews(response.data);
    });
  }, []);
  useEffect(() => {
    if (sort == false) {
      setNews(news.sort((a, b) => a.id - b.id));
    } else {
      setNews(news.sort((a, b) => b.id - a.id));
    }
  }, [sort]);
  return (
    <Fragment>
      <NavigationBar />
      <div className="flex flex-col justify-start items-center">
        <div className="w-5/6">
          <div className="flex flex-row items-center justify-start gap-3  w-2/3 sm:w-1/3 md:w-1/5 mb-9 mb-9 mt-14">
            <div className="">
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
            <div>اخبار</div>
            <div></div>
          </div>
        </div>
        <div className="w-5/6 flex flex-row justify-end items-center">
          <div className="flex flex-row justify-center md:justify-end gap-10 items-center w-full">
            <div className="text-lg">{ToPersianNumber(news.length)} محصول</div>
            <div
              onClick={() => {
                setSort((prv) => !prv);
              }}
              style={{
                border: "1.5px solid #7606B2",
                borderRadius: "0.5rem",
              }}
              className="flex flex-row justify-between items-center px-3 py-1 gap-1 cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_442_1378)">
                    <path
                      d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
                      fill="#1892AD"
                    />
                    <path
                      d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
                      fill="#7606B2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_442_1378">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className=" text-xs md:text-base">تاریخ انتشار</p>
              <div>
                {sort === true ? (
                  <HiOutlineArrowSmDown size={25} color="#7606B2" />
                ) : (
                  <HiOutlineArrowSmUp size={25} color="#7606B2" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-4/5 flex-row justify-between items-start mt-12">
              <div className='mt-8 w-4/5'>
      <div className='grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-4 w-full'>
      {news.map(e=> {
        return(
          <NewsCart info={{ ...e, description: e.content }}  />
        )
      })}
      </div>
      </div>
      </div>
      </div>
    </Fragment>
  );
};

export default NewsPage;
