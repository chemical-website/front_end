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
import { motion, AnimatePresence } from "framer-motion"

function NavigationBar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const size = useWindowSize();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  let [opennav, setopennav] = useState(0);
  const [productNav, setProductNav] = useState([]);
  let [s, sets] = useState(0);
  const [inputRef, setInputRef] = useState();
  const [avtiveCategory, setActiveCategory] = useState(-1);

  function openmahsol() {
    setopennav(1);
  }
  function TasfiyeAbshow(num) {
    sets(num);
  }
  function closeemahsol() {
    setopennav(0);
  }
  function TasfiyeAboff() {
    sets(0);
  }

  useEffect(() => {
    if (localStorage.getItem("token") !== "") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  useEffect(() => {
    axios.get(`${BaseRoot}store/collections/`).then(function (response) {
      setProductNav(response.data);
    });
  }, []);
  return (
    <>
      <header className={navigationBar.Header}>
        {/* EMSE SHERKAT START */}

        <Link to={"/app"} className={navigationBar.topologo}>
          {/* <img /> */}
          <h1>esme sherkat</h1>
          <i>
            <BiImage size={35} />
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
                <b> محصولات </b>
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
                  {productNav.map((e) => {
                    return (
                      <div
                        className="flex w-full flex-row justify-start gap-5 items-center cursor-pointer"
                        onMouseEnter={() => {
                          TasfiyeAbshow(e.id);
                          setActiveCategory(e.id);
                        }}
                        onMouseLeave={TasfiyeAboff}
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
                      <div
                        onMouseEnter={() => {
                          TasfiyeAbshow(e.id);
                        }}
                        onMouseLeave={TasfiyeAboff}
                      >
                        <TasfiyeBox data={e} show={s} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link className={navigationBar.ItemsMenubox} to="/app/aboutus">
              <b> درباره ما </b>
            </Link>
            <Link className={navigationBar.ItemsMenubox} to="/app/news">
              <b> اخبار </b>
            </Link>
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                setShowMobileNavbar((prv) => !prv);
              }}
            >
              <TfiViewList size={25} />
            </div>
            <AnimatePresence>
            {showMobileNavbar && (
              <motion.div 
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.1}}
                exit={{opacity: 0, y: -300}}
                className="absolute top-16 bg-slate-100 flex flex-col p-5 gap-4 w-full shadow-md z-50">
                <div className="w-full flex flex-row justify-center text-lg font-semibold">
                  محصولات
                </div>
                <div className="w-full flex flex-row justify-center text-lg font-semibold">
                  اخبار
                </div>
                <div className="w-full flex flex-row justify-center text-lg font-semibold">
                  درباره ما
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </>
        )}

        {/* MENU END */}
        {/* SEARCH START */}

        <div className={navigationBar.searchBox}>
          <div className="flex justify-center flex-1">
            <img src={ConfigSettingIcon} alt="ConfigSearch" />
          </div>
          <input
            className={navigationBar.input}
            placeholder="دنبال چه چیزی می‌گردید؟"
            onChange={(e) => {
              setInputRef(e.target.value);
            }}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "دنبال چه چیزی می‌گردید؟")}
          />
          <div className="flex justify-center flex-1">
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
            <BiSolidUserCircle />
          </Link>
          <Link to="/app/s" className={navigationBar.te}>
            {" "}
            <b> ثبت نام </b>
          </Link>

          <Link to="/app/s">
            <b>ورود</b>{" "}
          </Link>
        </div>
        <div
          style={{ display: !login ? "none" : "flex" }}
          className={navigationBar.Sabtnam}
        >
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
    </>
  );
}
export default NavigationBar;
