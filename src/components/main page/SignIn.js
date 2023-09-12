import { Link } from "react-router-dom";
import signin from "./signin.module.css";
import { useState } from "react";

function SignIn() {
  let [tabs, settabs] = useState(0);

  function vorod() {
    settabs(0);
  }
  function sabtenam() {
    settabs(1);
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
                  placeholder="ایمیل"
                />
                <input
                  className={signin.PassVorod}
                  type="password"
                  placeholder="رمز عبور"
                />
                <Link className={signin.Faramoshi}>
                  رمز عبور را فراموش کرده اید ؟
                </Link>
              </div>
              <form className={signin.Bekhaterbespor}>
                <input name="bekhatersepordan" type="checkbox" />
                <label for="bekhatersepordan">مرا به خاطر بسپار</label>
              </form>
              <button className={signin.VorodButt}>ورود</button>
            </div>
          ) : (
            <div className={signin.intabs2}>
              <div className={signin.InputPart2}>
                <input
                  className={signin.EmailVorod}
                  type="tel"
                  placeholder="تلفن همراه"
                />
                <input
                  className={signin.PassVorod}
                  type="email"
                  placeholder="ایمیل "
                />
                <div  className={signin.passboxsabtnam}>
                <input
                  className={signin.passsabtnam}
                  type="password"
                  placeholder="رمز عبور "
                />
                <input
                  className={signin.passsabtnam}
                  type="password"
                  placeholder="تکرار رمز عبور "
                />
                </div>

              </div>
              
              <button className={signin.VorodButt}>ورود</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
