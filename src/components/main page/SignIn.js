import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {BaseRoot} from "../../baseRoot";
import {useTranslation} from "react-i18next";
import ShowToast from "../../utilities/ShowToast";

function SignIn({
    onSuccessLogin
                }) {
    const navigate = useNavigate();
    let [tabs, setTabs] = useState(0);
    const {t, i18n} = useTranslation();

    function setLoginTab() {
        setTabs(0);
    }

    function setRegisterTab() {
        setTabs(1);
    }

    const phone = useRef();
    const email = useRef();
    const pass = useRef();

    const onRegisterBtnClick = async function () {
        const language = i18n.language; // Get the current language

        axios
            .post(`${BaseRoot}/${language}/api/auth/users/`, {
                username: phone.current.value,
                password: pass.current.value,
                "Email address": email.current.value,
            })
            .then(function (response) {
                setTabs(0);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const OnLogonBtnClick = async function () {
        const language = i18n.language; // Get the current language

        axios
            .post(`${BaseRoot}/${language}/api/auth/jwt/create/`, {
                username: phone.current.value,
                password: pass.current.value,
            })
            .then(function (response) {
                localStorage.setItem("token", `Bearer ${response.data.access}`);
                ShowToast(t("LoginSuccess"), "s")
                setTimeout(() => {
                    onSuccessLogin()
                }, 1000)
            })
            .catch(function (error) {
                if (error.response.data.detail === "No active account found with the given credentials") {
                    ShowToast(t("NoActiveAccountFound"), "e")
                    return;
                }
            });
    };

    return (
        <>
            <div
                className="w-[300px] h-[312px] bg-white m-auto mt-[12%] flex flex-col gap-[21px] p-[30px] rounded-[16px] shadow-md">
                <div
                    className="w-[240px] h-6 flex gap-[10px] mx-auto text-center text-[20px] justify-center font-bold leading-6">
                    <button
                        className={tabs == 0 ? "text-[#7606B2]" : "text-[#C25BFA]"}
                        onClick={setLoginTab}
                    >
                        {t("registrationLogin")}
                    </button>
                    <p className="text-[#C25BFA]">/</p>
                    <button
                        className={tabs == 0 ? "text-[#C25BFA]" : "text-[#7606B2]"}
                        onClick={setRegisterTab}
                    >
                        {t("registrationRegister")}
                    </button>
                </div>

                {tabs == 0 ? (
                    <div className="flex flex-col gap-[15px]">
                        <div className="flex flex-col gap-[8px]">
                            <input
                                className="w-[240px] h-[38px] text-xl rounded-[8px] border-2 border-[#8806CE] pl-2 pr-2 placeholder:text-[#8806CE] text-black placeholder:opacity-100 placeholder:text-xl placeholder:mr-2 focus:outline-none"
                                type="text"
                                placeholder={t("registrationPhone")}
                                ref={phone}
                            />
                            <input
                                className="w-[240px] h-[38px] text-xl rounded-[8px] border-2 border-[#8806CE] pl-2 pr-2 placeholder:text-[#8806CE] text-black placeholder:opacity-100 placeholder:text-xl focus:outline-none"
                                type="password"
                                placeholder={t("registrationPassword")}
                                ref={pass}
                            />
                        </div>
                        <form className="flex items-center gap-[6px] text-[#7606B2] text-[16px] font-semibold">
                            <input
                                name="bekhatersepordan"
                                type="checkbox"
                                className="w-[18px] h-[18px] accent-[#7606B2]"
                            />
                            <label htmlFor="bekhatersepordan">
                                {t("registrationRemeberMe")}
                            </label>
                        </form>
                        <button
                            className="w-full bg-[#8806CE] h-[42px] text-[20px] font-bold text-[#EDFAFD] rounded-[8px] flex items-center justify-center gap-[8px]"
                            onClick={OnLogonBtnClick}
                        >
                            {t("registrationLoginSubmit")}
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[13px]">
                            <input
                                className="w-[240px] h-[38px] text-black text-xl rounded-[8px] border-2 border-[#8806CE] pl-2 pr-2 placeholder:text-[#8806CE] placeholder:opacity-100 placeholder:text-xl focus:outline-none"
                                type="tel"
                                placeholder={t("registrationPhone")}
                                ref={phone}
                            />
                            <input
                                className="w-[240px] h-[38px] text-black text-xl rounded-[8px] border-2 border-[#8806CE] pl-2 pr-2 placeholder:text-[#8806CE] placeholder:opacity-100 placeholder:text-xl focus:outline-none"
                                type="email"
                                placeholder={t("registrationEmail")}
                                ref={email}
                            />
                            <div className="flex gap-[10px]">
                                <input
                                    className="w-[114px] h-[38px] text-black text-xl rounded-[8px] border-2 border-[#8806CE] pl-2 pr-2 placeholder:text-[#8806CE] placeholder:opacity-100 placeholder:text-xl focus:outline-none"
                                    type="password"
                                    placeholder={t("registrationPassword")}
                                    ref={pass}
                                />
                                <input
                                    className="w-[114px] h-[38px] text-black text-xl rounded-[8px] border-2 border-[#8806CE] pl-2 pr-2 placeholder:text-[#8806CE] placeholder:opacity-100 placeholder:text-xl focus:outline-none"
                                    type="password"
                                    placeholder={t("registrationRepeatpass")}
                                />
                            </div>
                        </div>
                        <button
                            style={{display: setTabs != 0 ? "block" : "none"}}
                            onClick={onRegisterBtnClick}
                            className="w-full bg-[#8806CE] h-[42px] text-[20px] font-bold text-[#EDFAFD] rounded-[8px] flex items-center justify-center gap-[8px]"
                        >
                            {t("registrationRegisterSubmit")}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default SignIn;
