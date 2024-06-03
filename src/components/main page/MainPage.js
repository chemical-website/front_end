import mainpage from "./MainPage.module.css";
import { useEffect, useState, useRef } from "react";
import UperPart from "./UperPart";
import DownerPart from "./DownerPart";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useModal } from "../../context/ModalContext";
import axios from "axios";
import { BaseRoot } from "./../../baseRoot";
import { useNavigate } from "react-router-dom";
import ShowToast from "./../../utilities/ShowToast";
import { useTranslation } from "react-i18next";


function MainPage() {
  // let [openimahsolat, setopenopenimahsolat] = useState(0);
  // let [opensanat, setopenopensanat] = useState(0);
  // let [openiconmahsol, setopenopeniconmahsol] = useState(0);
  const { isModalOpen, openModal, closeModal, acceptRule } = useModal();
  const [showRequestFormModal, setSHowRequestFormModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const textRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const { t, i18n  } = useTranslation();



  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     openModal({ type: "showRules" });
  //   }
  // }, []);


  const sendRequest = () => {
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    if (!email.includes("@")) {
      ShowToast("لطفا ایمیل معتبری وارد کنید", "e");
      return;
    } else if (!phone.startsWith("09")) {
      ShowToast("شماره همراه باید با ۰۹ شروع شود", "e");
      return;
    } else if (phone.length !== 11) {
      console.log(phone.length);
      ShowToast("شماره همراه باید ۱۱ رقم باشد", "e");
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
        ShowToast("با موفقیت ارسال شد.");
        setSHowRequestFormModal(false);
        setShowRequestModal(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {/* {acceptRule && ( */}
      <div className={mainpage.BBox}>
        <div className={mainpage.TopBox}>
          {/*<UperPart />*/}
        </div>
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
                style={{ color: "#3B0359" }}
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
                style={{ border: "2px solid #8806CE" }}
                className="py-1 px-2 rounded-md shadow-md inputPlaceColorized"
                placeholder={t("popUpPhone")}
              />
              <input
                ref={emailRef}
                style={{ border: "2px solid #8806CE" }}
                className="py-1 px-2 rounded-md shadow-md inputPlaceColorized"
                placeholder={t("popUpEmail")}
              />
              <textarea
                ref={textRef}
                style={{ resize: "none", border: "2px solid #8806CE" }}
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
        {/* <Dialog
          open={openModal}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
        >
          // {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> *
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div
                className="flex flex-col md:flex-row items-center"
              >
                <div style={{color:"#7606B2"}} className="w-full md:w-full flex flex-col items-center p-10 text-sm md:text-xl">
                  هر کشوری قانون و مقررات خاصی دارد که افراد باید تابع آن باشند.
                  لازم به ذکر است که در صورت سرپیچی از قوانین، مجازاتی خواهند
                  داشت؛ حال افراد باید بتوانند با آگاهی داشتن از قوانین کشور خود
                  زندگی خوبی را پشت سر بگذارند. در حقیقت قوانین همان باید و
                  نبایدهایی هستند که افراد باید بر اساس آن‌ها پیش روند. اگر
                  جامعه و کشوری قانون و مقرراتی نداشته باشد، به هیچ ‌وجه پیشرفت
                  نمی‌کند و همچنین به اهداف خود نخواهد رسید.
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className="bg-slate-500">
              <Link className="mb-10 ml-10 p-4 rounded-xl" style={{background:"rgb(136, 6, 206)" , color:"snow"}} to={"/app/s"}>
             میپذیرم
              </Link>
            </div>
          </DialogActions>
        </Dialog> */}

        {/* <Dialog
          open={openModal2}
          keepMounted
          onClose={handleClose2}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div
                className="flex flex-col md:flex-row items-center"
                style={{ height: "25rem" }}
              >
                <div className="w-full md:w-full flex flex-col items-center">
                  هر کشوری قانون و مقررات خاصی دارد که افراد باید تابع آن باشند.
                  لازم به ذکر است که در صورت سرپیچی از قوانین، مجازاتی خواهند
                  داشت؛ حال افراد باید بتوانند با آگاهی داشتن از قوانین کشور خود
                  زندگی خوبی را پشت سر بگذارند. در حقیقت قوانین همان باید و
                  نبایدهایی هستند که افراد باید بر اساس آن‌ها پیش روند. اگر
                  جامعه و کشوری قانون و مقرراتی نداشته باشد، به هیچ ‌وجه پیشرفت
                  نمی‌کند و همچنین به اهداف خود نخواهد رسید.
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClickOpen3}> ثبت درخواست</button>
          </DialogActions>
        </Dialog> */}
        {/* <Dialog
          open={openModal3}
          keepMounted
          onClose={handleClose3}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
        >
          <Order func={handleClose3} />
        </Dialog> */}
      </div>
      {/* )} */}
    </>
  );
}

export default MainPage;
