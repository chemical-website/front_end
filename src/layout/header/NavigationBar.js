import { Link, useNavigate } from "react-router-dom";
import { BiImage } from "react-icons/bi";
import navigationBar from "./navigationBar.module.css";
import TasfiyeBox from "./TasfiyeBox";
import { BiSolidUserCircle } from "react-icons/bi";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import ConfigSettingIcon from "../../assets/Icons/ConfigSearch.svg";
import SearchIcon from "../../assets/Icons/Searchicon.svg";
import ArrowLeftIcon from "../../assets/Icons/ArrowLeftIcon.svg";
import { LuLogOut } from "react-icons/lu";
import { useWindowSize } from "@uidotdev/usehooks";
import { TfiViewList } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import CompanyLogo from "../../assets/img/alaadinGroup.webp";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/languageSelector/lang";
import {Backdrop, Dialog} from "@mui/material";
import SignIn from "../../components/main page/SignIn";

function NavigationBar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const size = useWindowSize();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  let [opennav, setopennav] = useState(0);
  const [productNav, setProductNav] = useState([]);
  const [allParentCollection, setAllParentCollection] = useState([]);
  const [activeCategWithSubs, setActiveCategWithSubs] = useState([]);
  let [s, sets] = useState(0);
  const [inputRef, setInputRef] = useState();
  const [avtiveCategory, setActiveCategory] = useState(-1);
  const { t, i18n } = useTranslation();
  const [showBackdrop, setShowBackdrop] = useState(false)

  function openmahsol() {
    setopennav(1);
  }
  function TasfiyeAbshow(num) {
    sets(num);
    const result = [];

    productNav.forEach((category) => {
      if (category.collection.id === num) {
        const subCategory = {
          id: num,
          title: category.title,
          products: category.products,
        };
        result.push(subCategory);
      }
    });
    setActiveCategWithSubs(result);
  }
  function closeemahsol() {
    setopennav(0);
  }
  function TasfiyeAboff() {
    sets(0);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    const language = i18n.language; // Get the current language
    axios.get(`${BaseRoot}/${language}/api/store/collections/`).then(function (response) {
      setAllParentCollection(response.data);
    });

    axios.get(`${BaseRoot}/${language}/api/store/subcollections/`).then(function (response) {
      setProductNav(response.data);
    });
  }, [i18n.language]);

  function openRegistrationBackDrop() {
    setShowBackdrop(true)
  }

  return (
    <>
      <header className={navigationBar.Header}>
        {/* EMSE SHERKAT START */}

        <Link to={"/app"} className={navigationBar.topologo}>
          {/* <img /> */}
          {/* <h1>esme sherkat</h1> */}
          <i>
            <img src={CompanyLogo} alt="logo" />
          </i>
        </Link>

        {/* EMSE SHERKAT END */}
        {/* MENU START */}

        {size.width > 750 ? (
          <div className={navigationBar.Menubox}>
            <div className="relative">
              <Link
                className={[navigationBar.ItemsMenubox]}
                onMouseEnter={openmahsol}
                onMouseLeave={closeemahsol}
                to="/app/products"
              >
                <b> {t("products")} </b>
              </Link>
              <div
                onMouseEnter={openmahsol}
                onMouseLeave={closeemahsol}
                className={
                  opennav === 1
                    ? navigationBar.openmahsolat
                    : navigationBar.DisplayNone
                }
              >
                <div className={navigationBar.RightBox}>
                  {allParentCollection.map((e) => {
                    return (
                      <div
                        className="flex w-full flex-row justify-start gap-5 items-center cursor-pointer"
                        onMouseEnter={() => {
                          TasfiyeAbshow(e.id);
                          setActiveCategory(e.id);
                        }}
                      >
                        <h2>
                          <Link to={`/app/collections/search/${e.title}`}>
                            <button>{e.title}</button>
                          </Link>
                        </h2>
                        {avtiveCategory === e.id && (
                          <img src={ArrowLeftIcon} alt="ArrowIcon" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={navigationBar.LeftBox}>
                  {productNav.map((e) => {
                    return (
                        <TasfiyeBox
                          key={e.id}
                          data={e}
                          id={e.collection.id}
                          show={s}
                          subsData={activeCategWithSubs}
                        />
                    );
                  })}
                </div>
              </div>
            </div>
            <Link className={navigationBar.ItemsMenubox} to="/app/aboutus">
              <b>{t("aboutUs")} </b>
            </Link>
            <Link className={navigationBar.ItemsMenubox} to="/app/news">
              <b>{t("news")} </b>
            </Link>
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                setShowMobileNavbar((prv) => !prv);
              }}
              className="cursor-pointer"
            >
              <TfiViewList size={25} />
            </div>
            <AnimatePresence>
              {showMobileNavbar && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  exit={{ opacity: 0, y: -300 }}
                  className="absolute top-20 bg-white flex flex-col gap-4 w-1/2 shadow-md z-50 rounded-lg py-3"
                >
                  <Link to="/app/products">
                    <div className="w-full flex flex-row justify-center text-lg font-semibold cursor-pointer">
                      {t("products")}
                    </div>
                  </Link>
                  <Link to="/app/news">
                    <div className="w-full flex flex-row justify-center text-lg font-semibold cursor-pointer">
                      {t("news")}
                    </div>
                  </Link>
                  <Link to="/app/aboutus">
                    <div className="w-full flex flex-row justify-center text-lg font-semibold cursor-pointer">
                      {t("aboutUs")}
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* MENU END */}
        {/* SEARCH START */}

        <div className={navigationBar.searchBox}>
          <input
            style={i18n.language === "en" ? {direction: "ltr"} : {}}
            className={navigationBar.input}
            placeholder={t("searchFilter")}
            onChange={(e) => {
              setInputRef(e.target.value);
            }}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = t("searchFilter"))}
          />
          <div className="flex justify-center absolute left-3">
            <Link to={`/app/products/search/${inputRef}`}>
              <img src={SearchIcon} alt="SearchIcon" />
            </Link>
          </div>
        </div>

        {/* SEARCH END */}
        {/* SABTNAM START */}

        <div
          style={{ display: !login ? "flex" : "none" }}
          className={navigationBar.Sabtnam}
        >
          <Link className={navigationBar.vorodicon}>
          <LanguageSelector/>
            <BiSolidUserCircle />
          </Link>
          <Link onClick={openRegistrationBackDrop} className={navigationBar.te}>
            {" "}
            <b> {t("register")} </b>
          </Link>
          <hr
            className="w-5 h-0 rotate-90"
            style={{ borderColor: "#27023b" }}
          />
          <Link onClick={openRegistrationBackDrop}>
            <b>{t("login")}</b>{" "}
          </Link>
        </div>
        <div
          style={{ display: !login ? "none" : "flex" }}
          className={navigationBar.Sabtnam}
        >
          <LanguageSelector/>
          <Link
            onClick={() => {
              localStorage.setItem("token", "");
              navigate("/app/");
              setLogin(false);
            }}
          >
            <div className="flex flex-row gap-2 text-md font-bold justify-center items-center">
              <LuLogOut size={25} />
              خارج می‌شوید؟
            </div>
          </Link>
        </div>

        {/* SABTNAM END */}
        {/* HOVER MUEU START */}

        {/* HOVER MUEU END */}
      </header>

      <Dialog onClose={() => {setShowBackdrop(false)}} open={showBackdrop}>
        <SignIn  onSuccessLogin={() => {setShowBackdrop(false); window.location.reload()}}/>
      </Dialog>
    </>
  );
}
export default NavigationBar;
