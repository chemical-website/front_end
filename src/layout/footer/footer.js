import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseRoot } from "../../baseRoot";
import mailIcon from "../../assets/Icons/Mail outline.svg";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [mahsollist, setMahsolList] = useState([]);
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();
  const isRtl = direction === "rtl";

  useEffect(() => {
    const language = i18n.language; // Get the current language
    axios
        .get(`${BaseRoot}/${language}/api/store/collections/?footer=yes`)
        .then(function (response) {
          setMahsolList(response.data);
        });
  }, [i18n.language]);

  const seccuesmail = (state) => {
    if (state === 1) {
      toast.success(t("sentSuccessfully"), {
        style: {
          textAlign: "start",
          direction: direction,
          fontFamily: "Markazi Text",
          fontSize: "20px",
        },
      });
    }
    if (state === 0) {
      toast.warning(isRtl ? "مشکلی بوجود آمده" : "There is a problem", {
        style: {
          textAlign: "start",
          direction: direction,
          fontFamily: "Markazi Text",
          fontSize: "20px",
        },
      });
    }
  };

  const sendEmails = () => {
    const language = i18n.language; // Get the current language
    axios
        .post(`${BaseRoot}/${language}/api/store/emails/`, { email: email })
        .then(function (response) {
          seccuesmail(1);
        })
        .catch(function (err) {
          seccuesmail(0);
        });
  };

  return (
      <div
          className="h-fit lg:h-60 lg:px-12"
          style={{
            background: "#F5F5F5",
            color: "#7606B2",
            width: "100%",
            paddingTop: "2.38rem",
            direction: direction,
          }}
      >
        <div className="flex flex-col justify-between items-center md:items-start">
          <div className="flex md:flex-row flex-col justify-between items-center md:items-start w-full">
            <div className="flex flex-col justify-between items-start">
              <div>
                <p style={{ fontWeight: "700" }} className="text-xl">
                  {t("footer_callUs")}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between items-start">
                  <div className={`pr-2 flex flex-col justify-between items-start ${isRtl ? 'ml-0 mr-3' : 'mr-0 ml-3'}`}>
                    <p className="text-lg font-bold">{t("footer_phone")}</p>
                    <p>
                      {t("footerFirstNumber")}/ {t("footerSecondNumber")}
                    </p>
                    <p>{t("footerThirdNumber")}</p>
                    <div>
                      <p className="text-lg font-bold">
                        {t("footer_ourAddress")}
                      </p>
                      <p>{t("footer_address")}</p>
                    </div>
                  </div>
                </div>
                <div className={`flex flex-col justify-between items-start h-16 ${isRtl ? 'mr-0 ml-10' : 'ml-0 mr-10'}`}>
                  <div className={`flex flex-row gap-1 justify-between items-center ${isRtl ? 'mr-3' : 'ml-3'}`}>
                    <p className="text-lg">{t("footer_email")}</p>
                    <p>Pakneeru@yahoo.com</p>
                  </div>
                  <div className="flex flex-row items-center w-full gap-3">
                    <a href="https://www.linkedin.com/in/aladdingroup-m-2535582ab/">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                      >
                        <path
                            d="M19.6667 3H5.66669C4.56169 3 3.66669 3.895 3.66669 5V19C3.66669 20.105 4.56169 21 5.66669 21H19.6667C20.7717 21 21.6667 20.105 21.6667 19V5C21.6667 3.895 20.7717 3 19.6667 3ZM9.66669 17H7.14369V10H9.66669V17ZM8.36069 8.717C7.58969 8.717 7.07469 8.203 7.07469 7.517C7.07469 6.831 7.58869 6.317 8.44569 6.317C9.21669 6.317 9.73169 6.831 9.73169 7.517C9.73169 8.203 9.21769 8.717 8.36069 8.717ZM18.6667 17H16.2247V13.174C16.2247 12.116 15.5737 11.872 15.3297 11.872C15.0857 11.872 14.2717 12.035 14.2717 13.174C14.2717 13.337 14.2717 17 14.2717 17H11.7487V10H14.2717V10.977C14.5967 10.407 15.2477 10 16.4687 10C17.6897 10 18.6667 10.977 18.6667 13.174V17Z"
                            fill="#1892AD"
                        />
                        <path
                            d="M19.6667 3H5.66669C4.56169 3 3.66669 3.895 3.66669 5V19C3.66669 20.105 4.56169 21 5.66669 21H19.6667C20.7717 21 21.6667 20.105 21.6667 19V5C21.6667 3.895 20.7717 3 19.6667 3ZM9.66669 17H7.14369V10H9.66669V17ZM8.36069 8.717C7.58969 8.717 7.07469 8.203 7.07469 7.517C7.07469 6.831 7.58869 6.317 8.44569 6.317C9.21669 6.317 9.73169 6.831 9.73169 7.517C9.73169 8.203 9.21769 8.717 8.36069 8.717ZM18.6667 17H16.2247V13.174C16.2247 12.116 15.5737 11.872 15.3297 11.872C15.0857 11.872 14.2717 12.035 14.2717 13.174C14.2717 13.337 14.2717 17 14.2717 17H11.7487V10H14.2717V10.977C14.5967 10.407 15.2477 10 16.4687 10C17.6897 10 18.6667 10.977 18.6667 13.174V17Z"
                            fill="#7606B2"
                        />
                      </svg>
                    </a>
                    <a href="https://youtube.com/@aladdingroupofficial?si=2sQqRV_Mzc2CVqGg">
                      <svg
                          width="25"
                          height="24"
                          viewBox="0 0 28 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M26.7758 3.24798C26.4692 2.10131 25.5652 1.19731 24.4185 0.890647C22.3385 0.333313 13.9998 0.333313 13.9998 0.333313C13.9998 0.333313 5.66117 0.333313 3.58117 0.890647C2.4345 1.19731 1.5305 2.10131 1.22384 3.24798C0.666504 5.32798 0.666504 11 0.666504 11C0.666504 11 0.666504 16.672 1.22384 18.752C1.5305 19.8986 2.4345 20.8026 3.58117 21.1093C5.66117 21.6666 13.9998 21.6666 13.9998 21.6666C13.9998 21.6666 22.3385 21.6666 24.4185 21.1093C25.5665 20.8026 26.4692 19.8986 26.7758 18.752C27.3332 16.672 27.3332 11 27.3332 11C27.3332 11 27.3332 5.32798 26.7758 3.24798ZM11.3332 14.464V7.53598C11.3332 7.02265 11.8892 6.70265 12.3332 6.95865L18.3332 10.4226C18.7772 10.6786 18.7772 11.3213 18.3332 11.5773L12.3332 15.0413C11.8892 15.2986 11.3332 14.9773 11.3332 14.464Z"
                            fill="#1892AD"
                        />
                        <path
                            d="M26.7758 3.24798C26.4692 2.10131 25.5652 1.19731 24.4185 0.890647C22.3385 0.333313 13.9998 0.333313 13.9998 0.333313C13.9998 0.333313 5.66117 0.333313 3.58117 0.890647C2.4345 1.19731 1.5305 2.10131 1.22384 3.24798C0.666504 5.32798 0.666504 11 0.666504 11C0.666504 11 0.666504 16.672 1.22384 18.752C1.5305 19.8986 2.4345 20.8026 3.58117 21.1093C5.66117 21.6666 13.9998 21.6666 13.9998 21.6666C13.9998 21.6666 22.3385 21.6666 24.4185 21.1093C25.5665 20.8026 26.4692 19.8986 26.7758 18.752C27.3332 16.672 27.3332 11 27.3332 11C27.3332 11 27.3332 5.32798 26.7758 3.24798ZM11.3332 14.464V7.53598C11.3332 7.02265 11.8892 6.70265 12.3332 6.95865L18.3332 10.4226C18.7772 10.6786 18.7772 11.3213 18.3332 11.5773L12.3332 15.0413C11.8892 15.2986 11.3332 14.9773 11.3332 14.464Z"
                            fill="#7606B2"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div>
                <p style={{ fontWeight: "700" }} className="text-xl">
                  {t("footer_categories")}
                </p>
              </div>
              <ul className="pr-2 flex flex-col justify-between items-start">
                {mahsollist.map((e) => {
                  return (
                      <li style={{ fontWeight: "500" }} className="text-base">
                        <Link to={`/app/collections/search/${e.title}`}>
                          {e.title}
                        </Link>
                      </li>
                  );
                })}
              </ul>
            </div>
            <div className={`md:pl-20 lg:pl-40 flex flex-col items-center md:items-start ${isRtl ? 'md:pr-20 lg:pr-40' : ''}`}>
              <p style={{ fontWeight: "700" }} className="text-xl">
                {t("footer_newsLetter")}
              </p>
              <p style={{ fontWeight: "500" }} className="text-base">
                {t("footer_newsLetterTitle")}
              </p>
              <div className="flex flex-row justify-between items-center gap-2">
                <div className="relative h-10 w-52 shadow-md rounded-md">
                  <img
                      className={`absolute ${isRtl ? 'left-3' : 'right-3'} -translate-y-1/2 scale-105`}
                      style={{ top: "50%" }}
                      src={mailIcon}
                  />
                  <input
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ fontWeight: "bold" }}
                      className="h-full rounded-md w-full px-2"
                      placeholder={t("footer_enterYourEmail")}
                  />
                </div>
                <div
                    onClick={sendEmails}
                    className="cursor-pointer"
                    style={{
                      background: "#8806CE",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                    }}
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        d="M12 19C12 15.13 15.13 12 19 12C20.08 12 21.09 12.25 22 12.68V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H12.08C12.03 19.67 12 19.34 12 19ZM4 6L12 11L20 6V8L12 13L4 8V6ZM17.34 22L13.8 18.46L15.21 17.05L17.33 19.17L21.57 14.93L23 16.34L17.34 22Z"
                        fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p style={{ fontWeight: "500" }} className="text-lg font-bold ml-3">
              © {t("footer_copyright")}
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
