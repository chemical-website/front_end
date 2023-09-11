import { Link } from "react-router-dom";
import mainpage from "./MainPage.module.css";
import { useState } from "react";
import UperPart from "./UperPart";
import DownerPart from "./DownerPart";
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
      <div className={mainpage.BBox}>
        <div className={mainpage.TopBox}>
          <UperPart/>
          </div>
        <div className={mainpage.DownBox}>
          <DownerPart/>
        </div>
      </div>
    </>
  );
}

export default MainPage;
