import { useRef, useState } from "react";
import signin from "../../components/main page/signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BaseRoot } from "../../baseRoot";
import axios from "axios";
import closeIcon from "../../assets/Icons/Close.svg";
import ShowToast from "../../utilities/ShowToast";
import { useTranslation } from "react-i18next";


const Order = ({ id, func, closeDialog }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    closeDialog();
  };
  const phone = useRef();
  const email = useRef();
  const text = useRef();
  const { t, i18n  } = useTranslation();

  const sabText = async function () {
    const language = i18n.language; // Get the current language
    axios
      .post(`${BaseRoot}/${language}/api/store/products/${id}/orders/`, {
        phone: phone.current.value,
        description: text.current.value,
        email: email.current.value,
      })
      .then(function (response) {
        navigate(`/app/product/${id}`);
        ShowToast("سفارش شما با موفقت ثبت شد");
        closeDialog();
      })
      .catch(function (error) {
        console.log(error);
        ShowToast("مشکلی در ثبت سفارش شما پیش آمده", "e");
        closeDialog();
      });
  };
  return (
    <div>
      <div
        style={{ marginTop: "0", direction: "rtl" }}
        className="p-5 flex items-center justify-center flex-col gap-2"
      >
        <div className="self-end cursor-pointer" onClick={handleClose}>
          <img alt="" src={closeIcon} />
        </div>
        <div className={signin.TopButton}>
          <p className={signin.entekhab}>{t("orderNewRequest")}</p>
        </div>

        <div className={signin.intabs}>
          <div className={signin.InputPart}>
            <input
              className={signin.EmailVorod}
              type="text"
              placeholder={t("orderPhone")}
              ref={phone}
            />

            <input
              className={signin.PassVorod}
              type="email"
              placeholder={t("orderEmail")}
              ref={email}
            />

            <input
              className={signin.PassVorod}
              type="text"
              placeholder={t("orderText")}
              ref={text}
            />
            <button onClick={sabText} className={signin.VorodButt}>
              {t("orderSubmit")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
