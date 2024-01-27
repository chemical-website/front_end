import { Link, useParams } from "react-router-dom";
import bgimg from "../../assets/img/Backdropkk Art.png";
import PicSlider from "../product/picSlider";
import NavigationBar from "../../layout/header/NavigationBar";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/img/Photo (1).png";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { MdOutlineOpenInNew } from "react-icons/md";
import { toast } from "react-toastify";
import closePic from "../../assets/Icons/Close.svg";
import { BaseRoot } from "../../baseRoot";
import iconShow from "../../assets/Icons/Frame 19.png";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import axios from "axios";
import { NewsCart } from "./../news/news";

const NewPage = () => {
  const id = useParams();
  const [info, setInfo] = useState({});
  const [imag, setImag] = useState([]);
  const [news, setNews] = useState([]);
  const [randomNewsIDs, setRandomNewsIDs] = useState([]);
  useEffect(() => {
    axios.get(`${BaseRoot}store/posts/${id.id}/`).then(function (response) {
      setInfo(response.data);
      setImag(response.data["images"]);
    });
  }, []);
  useEffect(() => {
    axios.get(`${BaseRoot}store/posts/`).then(function (response) {
      setNews(response.data);
    });
  }, []);

  useEffect(() => {
    const randomIdStore = [];
    news.forEach((element) => {
      randomIdStore.push(element.id);
    });
    randomIdStore.sort((a, b) => b - a);
    setRandomNewsIDs(randomIdStore.slice(0, 4));
  }, [news]);
  return (
    <div style={{ color: "#3B0359" }}>
      <NavigationBar />
      {/* <div>
                <img src={bgimg} alt="" />
            </div> */}
      <div className="flex flex-col items-center">
        <div className=" w-4/5">
          <div className="flex flex-row items-center justify-between w-2/3 sm:w-1/3 md:w-1/5 mb-9 mt-14">
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
            <div>{info.title}</div>

            <div></div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" text-4xl  pb-16">{info.title}</div>
        <div className=" w-4/6 text-lg pb-16" dangerouslySetInnerHTML={{__html: info.specific_content}}/>
        {/* <div className="w-4/6">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="w-full"
          >
            {imag.map((i) => {
              return (
                <SwiperSlide className="flex flex-row items-center">
                  <div className="flex flex-row items-center justify-center  px-10">
                    <img className=" w-full  h-96" src={i.image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div> */}
      </div>
      {news.length > 1 && <div className=" flex flex-col justify-center items-center pt-24">
        <p className="w-1/6  text-4xl pb-8 text-center">دیگر اخبار</p>
        <div className="w-5/6">
          <Swiper
            breakpoints={{
              1000: {
                width: 1000,
                slidesPerView: 3,
              },
              800: {
                width: 800,
                slidesPerView: 2,
              },
              700: {
                width: 700,
                slidesPerView: 1,
              },
              600: {
                width: 600,
                slidesPerView: 2,
              },
              500: {
                width: 500,
                slidesPerView: 1,
              },
              400: {
                width: 400,
                slidesPerView: 1,
              },
            }}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="w-full h-fit"
          >
            <div className="flex flex-row h-fit">
              {news.map((x) => {
                if (x.id !== parseInt(id.id) && randomNewsIDs.includes(x.id))
                  return <NewsCart info={x} />;
              })}
            </div>
          </Swiper>
        </div>
      </div>}
    </div>
  );
};

export default NewPage;
