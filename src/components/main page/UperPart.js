import { Link } from "react-router-dom";
import mainpage from "./MainPage.module.css";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { FaShapes } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoSearchCircleSharp } from "react-icons/io5";

function MainPage() {
  let [openimahsolat, setopenopenimahsolat] = useState(0);
  let [opensanat, setopenopensanat] = useState(0);
  let [openiconmahsol, setopenopeniconmahsol] = useState(0);

  let data = [
    {
      name: "پلی  اتیلن ",
    },
    {
      name: "پلی استر معمولی",
    },
    {
      name: "پلی استر پیچیده",
    },
  ];

  function DastebandiSearch() {
    if (openimahsolat == 1) {
      setopenopenimahsolat(0);
    } else {
      setopenopenimahsolat(1);
    }
  }
  function SanatSearch() {
    if (opensanat == 1) {
      setopenopensanat(0);
    } else {
      setopenopensanat(1);
    }
  }
  function MahsolSearch() {
    if (openiconmahsol == 1) {
      setopenopeniconmahsol(0);
    } else {
      setopenopeniconmahsol(1);
    }
  }

  return (
    <>
     
          <h1>شرکت تولید کننده پلیمر صنعتی تهران</h1>

          <div className={mainpage.SearchBox}>
            <button
              className={mainpage.Chosdastebandi}
              onClick={DastebandiSearch}
            >
              {" "}
              <i className={mainpage.leftIcon}>
                {openimahsolat == 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}
              </i>{" "}
              <span className={mainpage.SearchDastebandi}>
                {" "}
                دسته بندی محصولات{" "}
                <i className={mainpage.rightIcon}>
                  <FaShapes />
                </i>
              </span>
            </button>
            <button className={mainpage.Chosdastebandi} onClick={SanatSearch}>
              {" "}
              <i className={mainpage.leftIcon}>
                {opensanat == 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}
              </i>{" "}
              <span className={mainpage.SearchDastebandi}>
                {" "}
                انتخاب صنعت
                <i className={mainpage.rightIcon}>
                  <FaShapes />
                </i>
              </span>
            </button>
            <button className={mainpage.Chosdastebandi} onClick={MahsolSearch}>
              {" "}
              <i className={mainpage.leftIcon}>
                {openiconmahsol == 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}
              </i>{" "}
              <span className={mainpage.SearchDastebandi}>
                {" "}
                انتخاب محصول
                <i className={mainpage.rightIcon}>
                  <FaShapes />
                </i>
              </span>
            </button>



            <div
              className={
                openimahsolat == 0
                  ? mainpage.displaynone
                  : mainpage.SearchOpenBox1
              }
            >
              <input placeholder="تایپ کنید" className={mainpage.inputf} />
              <i className={mainpage.searchIcon}>
                <BiSearch />
              </i>
              {data.map((x) => {
                return (
                  <>
                    <Link> {x.name}</Link>
                  </>
                );
              })}
            </div>



            <div
              className={
                opensanat == 0
                  ? mainpage.displaynone
                  : mainpage.SearchOpenBox2
              }
            >
              <input placeholder="تایپ کنید" className={mainpage.inputf} />
              <i className={mainpage.searchIcon}>
                <BiSearch />
              </i>
              {data.map((x) => {
                return (
                  <>
                    <Link> {x.name}</Link>
                  </>
                );
              })}
            </div>



            <div
              className={
                openiconmahsol == 0
                  ? mainpage.displaynone
                  : mainpage.SearchOpenBox3
              }
            >
              <input placeholder="تایپ کنید" className={mainpage.inputf} />
              <i className={mainpage.searchIcon}>
                <BiSearch />
              </i>
              {data.map((x) => {
                return (
                  <>
                    <Link> {x.name}</Link>
                  </>
                );
              })}
            </div>





              <i className={mainpage.searchdown}>
                <IoSearchCircleSharp />
              </i>
          </div>
       
    </>
  );
}

export default MainPage;
