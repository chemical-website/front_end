import { Link } from "react-router-dom";
import signin from "./signin.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { BaseRoot } from "../../baseRoot";
import { useTranslation } from "react-i18next";

function SignIn() {
  const navigate = useNavigate();
  let [tabs, settabs] = useState(0);
  const { t, i18n  } = useTranslation();


  function vorod() {
    settabs(0);
  }
  function sabtenam() {
    settabs(1);
  }
  const  phone = useRef()
  const  email = useRef()
  const  pass = useRef()
  const sabtBtn = async function(){ 
    const language = i18n.language; // Get the current language
    
    axios.post(`${BaseRoot}/${language}/api/auth/users/`, {
      "username": phone.current.value,
      "password": pass.current.value , 
      "Email address": email.current.value

    })
    .then(function (response) {
      settabs(0)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const vorodBtnn = async function(){ 
    const language = i18n.language; // Get the current language

    axios.post(`${BaseRoot}/${language}/api/auth/jwt/create/`, {
      "username": phone.current.value,
      "password": pass.current.value , 

    })
    .then(function (response) {
      console.log(response)
      localStorage.setItem("token", `Bearer ${response.data.access}`)
      navigate("/app")
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <div className={signin.BackBox}>
        <div className={signin.BigBox}>
          <div className={signin.TopButton}>
            <button
              className={tabs == 0 ? signin.entekhab : signin.off}
              onClick={vorod}
            >
              {t("registrationLogin")}
            </button>
            <p>/</p>
            <button
              className={tabs == 0 ? signin.off : signin.entekhab}
              onClick={sabtenam}
            >
              {t("registrationRegister")}
            </button>
          </div>

          {tabs == 0 ? (
            <div className={signin.intabs}>
              <div className={signin.InputPart}>
                <input
                  className={signin.EmailVorod}
                  type="text"
                  placeholder={t("registrationPhone")}
                  ref={phone}
                />
                <input
                  className={signin.PassVorod}
                  type="password"
                  placeholder={t("registrationPassword")}
                  ref={pass}
                />
                {/* <Link className={signin.Faramoshi}>
                  رمز عبور را فراموش کرده اید ؟
                </Link> */}
              </div>
              <form className={signin.Bekhaterbespor}>
                <input name="bekhatersepordan" type="checkbox" />
                <label for="bekhatersepordan">{t("registrationRemeberMe")}</label>
              </form>
              <button className={signin.VorodButt} onClick={vorodBtnn}>{t("Login")}</button>
            </div>
          ) : (
            <div className={signin.intabs2}>
              <div className={signin.InputPart2}>
                <input
                  className={signin.EmailVorod}
                  type="tel"
                  placeholder={t("registrationPhone")}
                  ref={phone}
                />
                <input
                  className={signin.PassVorod}
                  type="email"
                  placeholder={t("registrationEmail")}
                  ref={email}
                />
                <div  className={signin.passboxsabtnam}>
                <input
                  className={signin.passsabtnam}
                  type="password"
                  placeholder={t("registrationPassword")}
                  ref={pass}
                />
                <input
                  className={signin.passsabtnam}
                  type="password"
                  placeholder={t("registrationRepeatpass")}
                />
                </div>

              </div>
              
              <button style={{display: settabs !=0  ? "block" : "none"}} onClick={sabtBtn} className={signin.VorodButt}>{t("registrationRegisterSubmit")}</button>
              {/* <button style={{display: settabs == 0 ? "block" : "none"}} onClick={vorodBtnn} className={signin.VorodButt}>ورود</button> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
