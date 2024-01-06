import { Link } from "react-router-dom";
import signin from "./signin.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { BaseRoot } from "../../baseRoot";

function SignIn() {
  const navigate = useNavigate();
  let [tabs, settabs] = useState(0);

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
    console.log(email.current.value, phone.current.value , pass.current.value)
    axios.post(`${BaseRoot}auth/users/`, {
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
    
    console.log(phone.current.value , pass.current.value)
    axios.post(`${BaseRoot}auth/jwt/create/`, {
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
              ورود
            </button>
            <p>/</p>
            <button
              className={tabs == 0 ? signin.off : signin.entekhab}
              onClick={sabtenam}
            >
              ثبت نام
            </button>
          </div>

          {tabs == 0 ? (
            <div className={signin.intabs}>
              <div className={signin.InputPart}>
                <input
                  className={signin.EmailVorod}
                  type="text"
                  placeholder="شماره تلفن"
                  ref={phone}
                />
                <input
                  className={signin.PassVorod}
                  type="password"
                  placeholder="رمز عبور"
                  ref={pass}
                />
                {/* <Link className={signin.Faramoshi}>
                  رمز عبور را فراموش کرده اید ؟
                </Link> */}
              </div>
              <form className={signin.Bekhaterbespor}>
                <input name="bekhatersepordan" type="checkbox" />
                <label for="bekhatersepordan">مرا به خاطر بسپار</label>
              </form>
              <button className={signin.VorodButt} onClick={vorodBtnn}>ورود</button>
            </div>
          ) : (
            <div className={signin.intabs2}>
              <div className={signin.InputPart2}>
                <input
                  className={signin.EmailVorod}
                  type="tel"
                  placeholder="تلفن همراه"
                  ref={phone}
                />
                <input
                  className={signin.PassVorod}
                  type="email"
                  placeholder="ایمیل "
                  ref={email}
                />
                <div  className={signin.passboxsabtnam}>
                <input
                  className={signin.passsabtnam}
                  type="password"
                  placeholder="رمز عبور "
                  ref={pass}
                />
                <input
                  className={signin.passsabtnam}
                  type="password"
                  placeholder="تکرار رمز عبور "
                />
                </div>

              </div>
              
              <button style={{display: settabs !=0  ? "block" : "none"}} onClick={sabtBtn} className={signin.VorodButt}>ثبت‌نام</button>
              {/* <button style={{display: settabs == 0 ? "block" : "none"}} onClick={vorodBtnn} className={signin.VorodButt}>ورود</button> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
