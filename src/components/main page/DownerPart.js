import mainpage from "./MainPage.module.css";
import { useEffect, useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import { BaseRoot } from "../../baseRoot";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cart from "../cart/cart";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../Modal/Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Product from "../../pages/product/product";

function DownerPart() {
  let [y, sety] = useState(1);
  let [x, setx] = useState(0);
  let [z, setz] = useState(0);

  function HameHandler() {
    if (y == 1) {
      sety(0);
    } else {
      sety(1);
      setx(0);
      setz(0);
    }
  }

  function BarkhiHandler() {
    if (x == 1) {
      setx(0);
    } else {
      setx(1);
      sety(0);
      setz(0);
    }
  }

  function YekhdeHandler() {
    if (z == 1) {
      setz(0);
    } else {
      setz(1);
      setx(0);
      sety(0);
    }
  }
  const [prdouctData, setProductData] = useState([]);
  const [collections, setCollections] = useState([]);
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios.get(`${BaseRoot}store/products/`, config).then(function (response) {
      setProductData(response.data);
    });
  }, [y]);
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/collections/`, config)
      .then(function (response) {
        setCollections(response.data);
      });
  }, [y]);
  useEffect(() => {
    if (x === 1) {
      console.log("gih");
      axios
        .get(`${BaseRoot}store/products/?recommend=True`, config)
        .then(function (response) {
          setProductData(response.data);
        });
    }
  }, [x]);
  return (
    <>
      <div className={mainpage.DownBBox}>
        <div className={mainpage.uptitle}>
          {" "}
          <span className={mainpage.pishnahadT}>پیشنهاد ویژه </span>
          <div className={mainpage.ShowPart}>
            <i>
              <MdFilterListAlt />{" "}
            </i>
            <div className={mainpage.textP}>
              <span
                onClick={HameHandler}
                className={
                  y == 0 ? mainpage.pishnahadat2 : mainpage.pishnahadat3
                }
              >
                نمایش همه
              </span>
              <span
                className={
                  x == 0 ? mainpage.pishnahadat4 : mainpage.pishnahadat3
                }
                onClick={() => {
                  BarkhiHandler();
                }}
              >
                نمایش برخی{" "}
              </span>
            </div>
          </div>
        </div>
        <Swiper 
         breakpoints={{
        800: {
          slidesPerView: 4,
        },
        500: {
          width: 768,
          slidesPerView: 1,
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
