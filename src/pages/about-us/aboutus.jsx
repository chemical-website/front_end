import { Link } from "react-router-dom";
import bgimg from "../../assets/img/Backdropkk Art.png";
import PicSlider from "../product/picSlider";
import NavigationBar from "../../layout/header/NavigationBar";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/img/Photo (1).png";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import { useTranslation } from "react-i18next";

const listofUser = [
  { pic: img1, titleKey: "nameOfPic", textKey: "descriptionOfPic" },
  { pic: img1, titleKey: "nameOfPic", textKey: "descriptionOfPic" },
  { pic: img1, titleKey: "nameOfPic", textKey: "descriptionOfPic" },
  { pic: img1, titleKey: "nameOfPic", textKey: "descriptionOfPic" },
  { pic: img1, titleKey: "nameOfPic", textKey: "descriptionOfPic" },
];

const UserCart = ({ x, t }) => {
  return (
      <div>
        <img src={x.pic} />
        <p>{t(x.titleKey)}</p>
        <p>{t(x.textKey)}</p>
      </div>
  );
}

const AboutUsPage = () => {
  const [info, setInfo] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language; // Get the current language

    axios.get(`${BaseRoot}/${language}/api/store/about-us/`).then(function (response) {
      if (response.data[0])
        setInfo(response.data[0].content);
    });
  }, [i18n.language]);

  return (
      <div style={{ color: "#3B0359" }}>
        <NavigationBar />
        <div className="w-full">
          <img className="w-full object-cover" src={bgimg} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4/5">
            <div className="flex flex-row items-center justify-start gap-3 w-2/3 sm:w-1/3 md:w-1/5 mb-9 mt-14">
              <div>
                <Link to={"/app"}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <g clipPath="url(#clip0_26_272)">
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
                  <g clipPath="url(#clip0_26_281)">
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
              <div className="text-xl font-bold">{t("aboutUsTitle")}</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center" style={{ fontFamily: "Markazi Text" }}>
          {info !== "" ? <div className="w-4/5" dangerouslySetInnerHTML={{ __html: info }} /> : <div className="w-4/5">{t("aboutsUsNoInfo")}</div>}
        </div>
        <div className="flex flex-col justify-center items-center pt-24">
          <p className="w-full text-center md:w-1/6 text-3xl pb-8 ">{t("ourTeam")}</p>
          <div className="w-3/6 sm:w-5/6">
            <Swiper
                style={{
                  "--swiper-pagination-color": "#8806CE",
                  "--swiper-navigation-color": "#8806CE",
                }}
                breakpoints={{
                  1400: {
                    width: 1400,
                    slidesPerView: 4
                  },
                  1000: {
                    width: 1000,
                    slidesPerView: 4
                  },
                  800: {
                    width: 800,
                    slidesPerView: 2,
                  },
                  700: {
                    width: 700,
                    slidesPerView: 2
                  },
                  600: {
                    width: 600,
                    slidesPerView: 2
                  },
                  500: {
                    width: 500,
                    slidesPerView: 1,
                  },
                  400: {
                    width: 400,
                    slidesPerView: 1
                  }
                }}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="w-full"
            >
              {listofUser.map((x) => {
                return (
                    <SwiperSlide className="flex justify-center my-10 px-12">
                      <UserCart x={x} t={t} />
                    </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
  );
};

export default AboutUsPage;
