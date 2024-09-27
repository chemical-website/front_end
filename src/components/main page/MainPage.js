import mainpage from "./MainPage.module.css";
import { useEffect, useState, useRef } from "react";
import UperPart from "./UperPart";
import DownerPart from "./DownerPart";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import ShowToast from "./../../utilities/ShowToast";
import { useTranslation } from "react-i18next";
import PicSlider from "../../pages/product/picSlider";

function MainPage() {
  const [showRequestFormModal, setSHowRequestFormModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(true);
  const [bannerImages, setBannerImages] = useState([])
  const textRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  const isRtl = direction === "rtl";

  const sendRequest = () => {
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    if (!email.includes("@")) {
      ShowToast(t("submitAValidEmail"), "e");
      return;
    } else if (!phone.startsWith("09")) {
      ShowToast("شماره همراه باید با ۰۹ شروع شود", "e");
      return;
    } else if (phone.length !== 11) {
      console.log(phone.length);
      ShowToast(t("phoneNumberMustELevenChar"), "e");
      return;
    }

    const language = i18n.language; // Get the current language
    axios
        .post(`${BaseRoot}/${language}/api/store/products/-1/orders/`, {
          phone: phoneRef.current.value,
          description: textRef.current.value,
          email: emailRef.current.value,
        })
        .then(function (response) {
          ShowToast(t("sentSuccessfully"));
          setSHowRequestFormModal(false);
          setShowRequestModal(false);
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  useEffect(() => {
    const language = i18n.language; // Get the current language
    const imageTempArr = []
    axios.get(`${BaseRoot}/${language}/api/store/image-banners/`).then(
        res => {
          setBannerImages(res.data)
        }
    )
  }, []);

  return (
      <>
        <div className={mainpage.BBox}>
          <PicSlider images={bannerImages} isForBanner={true}></PicSlider>
          {/*<div className={mainpage.TopBox}*/}
          {/*>*/}
          {/*  /!*<UperPart />*!/*/}
          {/*</div>*/}
          <div className={mainpage.DownBox}>
            <DownerPart />
          </div>
          {!showRequestFormModal && showRequestModal ? (
              <motion.div
                  className="fixed bottom-4 right-4 flex flex-col justify-center items-center gap-4 rounded-lg z-50 p-5 px-2 pt-2 customGlass"
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                    type: "spring",
                    stiffness: 120,
                  }}
                  style={{ fontSize: "20px" }}
              >
                <div className="flex flex-row justify-between items-center gap-1 w-full">
              <span
                  className="text-xl font-semibold w-full"
                  style={{
                    direction: isRtl ? "rtl" : "ltr",
                    color: "#3B0359",
                  }}
              >
                {t("popUpWelcomeMsg")}
              </span>
                  <div
                      onClick={() => {
                        setShowRequestModal(false);
                      }}
                      className="cursor-pointer"
                  >
                    <RxCross2 size={23} />
                  </div>
                </div>
                <button
                    onClick={() => {
                      setSHowRequestFormModal(true);
                    }}
                    style={{ backgroundColor: "#8806CE" }}
                    className="w-3/4 rounded-lg py-2 text-gray-200 font-bold"
                >
                  {t("popUpNewReq")}
                </button>
              </motion.div>
          ) : showRequestFormModal ? (
              <motion.div
                  className="fixed bottom-4 right-4 rounded-lg z-50 customGlass"
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                    type: "spring",
                    stiffness: 120,
                  }}
              >
                <div className="relative h-full w-full flex flex-col justify-center items-center gap-4 p-5 pt-2 rounded-lg">
              <span
                  className="text-2xl font-semibold"
                  style={{ color: "#3B0359" }}
              >
                {t("popUpNewReq")}
              </span>
                  <input
                      ref={phoneRef}
                      style={{
                        border: "2px solid #8806CE",
                        direction: isRtl ? "rtl" : "ltr",
                        textAlign: isRtl ? "right" : "left",
                      }}
                      className="py-1 px-2 rounded-md shadow-md inputPlaceColorized"
                      placeholder={t("popUpPhone")}
                  />
                  <input
                      ref={emailRef}
                      style={{
                        border: "2px solid #8806CE",
                        direction: isRtl ? "rtl" : "ltr",
                        textAlign: isRtl ? "right" : "left",
                      }}
                      className="py-1 px-2 rounded-md shadow-md inputPlaceColorized"
                      placeholder={t("popUpEmail")}
                  />
                  <textarea
                      ref={textRef}
                      style={{
                        resize: "none",
                        border: "2px solid #8806CE",
                        direction: isRtl ? "rtl" : "ltr",
                        textAlign: isRtl ? "right" : "left",
                      }}
                      className="py-1 px-2 rounded-md shadow-md h-24 inputPlaceColorized"
                      placeholder={t("popUpRequestText")}
                  />
                  <button
                      onClick={sendRequest}
                      style={{ backgroundColor: "#8806CE" }}
                      className="w-full rounded-lg py-2 text-gray-200 font-bold"
                  >
                    {t("popUpSend")}
                  </button>
                  <div
                      onClick={() => {
                        setSHowRequestFormModal(false);
                        setShowRequestModal(false);
                      }}
                      className="absolute top-3 left-3 cursor-pointer"
                  >
                    <RxCross2 size={25} />
                  </div>
                </div>
              </motion.div>
          ) : null}
        </div>
      </>
  );
}

export default MainPage;
