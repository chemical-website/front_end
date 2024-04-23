import { Link } from "react-router-dom";
import mainpage from "./MainPage.module.css";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import ShapesIcon from "../../assets/Icons/Shapes.svg";
import SettingsIcon from "../../assets/Icons/Settings.svg";
import BuyCartIcon from "../../assets/Icons/BuyCart.svg";
import SearchIcon from "../../assets/Icons/SearchIconWhite.svg";
import SearchIconPurple from "../../assets/Icons/SearchIconPurple.svg";
import { useNavigate } from "react-router-dom"

function MainPage() {
  let [openimahsolat, setopenopenimahsolat] = useState(0);
  let [opensanat, setopenopensanat] = useState(0);
  let [openiconmahsol, setopenopeniconmahsol] = useState(0);
  const [mahsolatData, setMahsolatData] = useState([]);
  const [masolat, setMahsolat] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [search, setSearch] = useState("");
  const [stat, setStat] = useState(false);
  const [subCatgs, setSubCatgs] = useState([])
  const [filterSubCollection, setFilterSubCollection] = useState()
  const [filterIndustry, setFilterIndustry] = useState(false)
  const [filterProduct, setFilterProduct] = useState(false)
  const navigate = useNavigate(false)

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/collections/`, config)
      .then(function (response) {
        setMahsolatData(response.data);
      });

    axios
        .get(`${BaseRoot}store/subcollections/`, config)
        .then(function (response) {
          setSubCatgs(response.data);
        });
  }, []);
  useEffect(() => {
    axios.get(`${BaseRoot}store/products/`, config).then(function (response) {
      setMahsolat(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${BaseRoot}store/industries/`, config).then(function (response) {
      setIndustry(response.data);
    });
  }, []);
  function DastebandiSearch() {
    if (openimahsolat === 1) {
      setopenopenimahsolat(0);

    } else {
      setopenopenimahsolat(1);
      setopenopensanat(0);
      setopenopeniconmahsol(0);
    }
  }
  function SanatSearch() {
    if (opensanat === 1) {
      setopenopensanat(0);
    } else {
      setopenopensanat(1);
      setopenopenimahsolat(0);
      setopenopeniconmahsol(0);
    }
  }
  function MahsolSearch() {
    if (openiconmahsol === 1) {
      setopenopeniconmahsol(0);
    } else {
      setopenopeniconmahsol(1);
      setopenopensanat(0);
      setopenopenimahsolat(0);
    }
  }

  function goToSearchFilterPage() {
    if (filterSubCollection && filterIndustry)
      navigate(`/app/search/?subCollection=${filterSubCollection}&industry=${filterIndustry}`)
    else if (filterSubCollection)
      navigate(`/app/search/?subCollection=${filterSubCollection}`)
    else if (filterIndustry)
      navigate(`/app/search/?&industry=${filterIndustry}`)
  }

  return (
    <>
      {/* <h1 className=" hidden md:block">شرکت تولید کننده پلیمر صنعتی تهران</h1> */}

      { <div className={mainpage.SearchBox}>
        <button
          className={mainpage.Chosdastebandi}
          onClick={DastebandiSearch}
          // onBlur={DastebandiSearch}
        >
          <i className={mainpage.leftIcon}>
            {openimahsolat == 0 ? (
              <AiFillCaretDown color="#27023b" />
            ) : (
              <AiFillCaretUp color="#27023b" />
            )}
          </i>
          <span className={mainpage.SearchDastebandi}>
            <span
              className="text-base sm:text-lg font-bold"
              style={{ color: "#3B0359" }}
            >
              { filterSubCollection ? filterSubCollection : "انتخاب دسته بندی" }
            </span>
            <i className={mainpage.rightIcon}>
              <img src={ShapesIcon} alt="ShapeIcon" />
            </i>
          </span>
        </button>
        <button
          className={mainpage.Chosdastebandi}
          onClick={SanatSearch}
          // onBlur={SanatSearch}
        >
          <i className={mainpage.leftIcon}>
            {opensanat == 0 ? (
              <AiFillCaretDown color="#27023b" />
            ) : (
              <AiFillCaretUp color="#27023b" />
            )}
          </i>
          <span className={mainpage.SearchDastebandi}>
            <span
              className="text-base sm:text-lg font-bold"
              style={{ color: "#3B0359" }}
            >
              { filterIndustry ? filterIndustry : "انتخاب صنعت" }
            </span>
            <i className={mainpage.rightIcon}>
              <img src={SettingsIcon} alt="SettingIcon" />
            </i>
          </span>
        </button>
        <button
          className={mainpage.Chosdastebandi}
          onClick={MahsolSearch}
          // onBlur={MahsolSearch}

        >
          <i className={mainpage.leftIcon}>
            {openiconmahsol == 0 ? (
              <AiFillCaretDown color="#27023b" />
            ) : (
              <AiFillCaretUp color="#27023b" />
            )}
          </i>
          <div className={mainpage.SearchDastebandi}>
            <span
              className="text-base sm:text-lg font-bold"
              style={{ color: "#3B0359" }}
            >
              { filterProduct ? filterProduct : "انتخاب محصول" }
            </span>
            <i className={mainpage.rightIcon}>
              <img src={BuyCartIcon} alt="BuyCartIcon" />
            </i>
          </div>
        </button>

        <div
          className={
            openimahsolat == 0 ? mainpage.displaynone : mainpage.SearchOpenBox1
          }
        >
          <div className={mainpage.inputf}>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="تایپ کنید"
            />
            <i
              onClick={() => {
                setMahsolatData(mahsolatData.filter((e) => e.title === search));
              }}
              className={mainpage.searchIcon}
            >
              <img src={SearchIconPurple} alt="SearchIcon" />
            </i>
          </div>
          <div className={mainpage.dataListBox1}>
            {subCatgs.map((x) => {
              return (
                <div className={mainpage.eachDataItem} onClick={() => {setFilterSubCollection(x.title); setopenopenimahsolat(0)}}>
                  <span>
                    {x.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={
            opensanat == 0 ? mainpage.displaynone : mainpage.SearchOpenBox2
          }
        >
          <div className={mainpage.inputf}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="تایپ کنید"
            />
            <i
              onClick={() => {
                setMahsolatData(mahsolatData.filter((e) => e.title === search));
              }}
              className={mainpage.searchIcon}
            >
              <img src={SearchIconPurple} alt="SearchIcon" />
            </i>
          </div>
          {industry.map((x) => {
            return (
              <div className={mainpage.eachDataItem} onClick={() => {setFilterIndustry(x.title); setopenopensanat(0)}}>
                <span>{x.title}</span>
              </div>
            );
          })}
        </div>

        <div
          className={
            openiconmahsol == 0 ? mainpage.displaynone : mainpage.SearchOpenBox3
          }
        >
          <div className={mainpage.inputf}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="تایپ کنید"
            />
            <i
              onClick={() => {
                setMahsolatData(mahsolatData.filter((e) => e.title === search));
              }}
              className={mainpage.searchIcon}
            >
              <img src={SearchIconPurple} alt="SearchIcon" />
            </i>
          </div>
          {masolat.map((x) => {
            return (
              <div className={mainpage.eachDataItem} onClick={() => {setFilterProduct(x.title); setopenopeniconmahsol(0)}}>
                <span>{x.title}</span>
              </div>
            );
          })}
        </div>

        <i className={mainpage.searchdown} onClick={goToSearchFilterPage}>
          <img src={SearchIcon} className="scale-50" alt="SearchIcon" />
        </i>
      </div> }
    </>
  );
}

export default MainPage;
