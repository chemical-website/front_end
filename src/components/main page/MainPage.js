import { Link } from "react-router-dom";
import mainpage from "./MainPage.module.css";
import { useEffect, useState } from "react";
import UperPart from "./UperPart";
import DownerPart from "./DownerPart";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import styles from "../cart/cart.style.module.css";
import Order from "../../pages/product/order";
import { motion } from "framer-motion";

function MainPage() {
  // let [openimahsolat, setopenopenimahsolat] = useState(0);
  // let [opensanat, setopenopensanat] = useState(0);
  // let [openiconmahsol, setopenopeniconmahsol] = useState(0);
  const [open, setOpen] = useState(0);
  const [showRequestFormModal, setSHowRequestFormModal] = useState(false)
  const [openModal, setOpenModal] = useState(true);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose2 = () => {
    setOpenModal2(false);
  };
  const handleClickOpen2 = () => {
    setOpenModal2(true);
  };
  const handleClose3 = () => {
    setOpenModal3(false);
  };
  const handleClickOpen3 = () => {
    setOpenModal3(true);
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== "") {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }, []);

  return (
    <>
      <div className={mainpage.BBox}>
        <div className={mainpage.TopBox}>
          <UperPart />
        </div>
        <div className={mainpage.DownBox}>
          <DownerPart />
        </div>
        {!showRequestFormModal ? <motion.div
          className="fixed bottom-4 right-4 flex flex-col justify-center items-center gap-4 rounded-lg z-50 p-5 pt-2 customGlass"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: "spring",
            stiffness: 120,
          }}
          style={{fontSize: "20px"}}
        >
          <span className="text-xl font-semibold" style={{ color: "#3B0359" }}>
            سلام دوست عزیز! نیاز به کمک دارید؟
          </span>
          <button
            onClick={() => {setSHowRequestFormModal(true)}}
            style={{ backgroundColor: "#8806CE" }}
            className="w-3/4 rounded-lg py-2 text-gray-200 font-bold"
          >
            ایجاد درخواست
          </button>
        </motion.div> :
          <motion.div
            className="fixed bottom-4 right-4 flex flex-col justify-center items-center gap-4 rounded-lg z-50 p-5 pt-2 customGlass"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: "spring",
            stiffness: 120,
          }}
        >
          <span className="text-2xl font-semibold" style={{ color: "#3B0359" }}>
            ثبت درخواست
          </span>
          <input style={{border: "2px solid #8806CE"}} className="py-1 px-2 rounded-md shadow-md inputPlaceColorized" placeholder="تلفن همراه"/>
          <input style={{border: "2px solid #8806CE"}} className="py-1 px-2 rounded-md shadow-md inputPlaceColorized" placeholder="ایمیل"/>
          <textarea style={{resize: 'none', border: "2px solid #8806CE"}} className="py-1 px-2 rounded-md shadow-md h-24 inputPlaceColorized" placeholder="شرح درخواست"/>
          <button
            style={{ backgroundColor: "#8806CE" }}
            className="w-full rounded-lg py-2 text-gray-200 font-bold"
          >
            ارسال
          </button>
          </motion.div>
        }
        <Dialog
          open={openModal}
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
            <div className={styles.LinkSBox}>
              <Link className="px-6 " to={"/app/s"}>
                "میپذیرم"
              </Link>
            </div>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openModal2}
          keepMounted
          onClose={handleClose2}
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
        </Dialog>
        <Dialog
          open={openModal3}
          keepMounted
          onClose={handleClose3}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
        >
          <Order func={handleClose3} />
        </Dialog>
      </div>
    </>
  );
}

export default MainPage;
