import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseRoot } from "../../baseRoot";
import mailIcon from "../../assets/Icons/Mail outline.svg";
import styles from "./footer.module.css";

const Footer = () => {
  const [mahsollist, setMahsolList] = useState([]);
  const [email, setEmail] = useState();
  useEffect(() => {
    axios.get(`${BaseRoot}store/collections/`).then(function (response) {
      setMahsolList(response.data);
    });
  }, []);
  const sendEmails = () => {
    axios
      .post(`${BaseRoot}store/emails/`, { email: email })
      .then(function (response) {});
  };
  return (
    <div
      className=" h-fit  lg:h-60  lg:pr-52 "
      style={{
        background: "#F5F5F5",
        color: "#7606B2",
        width: "100%",
        paddingTop: "2.38rem",
      }}
    >
      <div className="flex flex-col  justify-between items-center md:items-start">
        <div className=" flex  md:flex-row flex-col  justify-between items-center  md:items-start  w-full">
          <div className=" flex flex-col  justify-between items-start">
            <div>
              <p style={{ fontWeight: "700" }} className="  text-xl ">
                تماس باما
              </p>
            </div>
            <div className=" flex flex-row  justify-between items-center">
              <div className=" flex flex-col  justify-between items-start">
                <div className=" pr-2 flex flex-col  justify-between items-end">
                  <div className="flex flex-row  justify-between items-center">
                    <p style={{ fontWeight: "500" }} className="text-base ml-3">
                      تلفن
                    </p>
                    <p style={{ fontWeight: "400" }} className=" text-sm">
                      ۹۸۹۰۲۱۲۳۴۵۶۷۸+
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "400" }} className=" text-sm">
                      ۹۸۹۰۲۱۲۸۷۱۲۶۳+
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "400" }} className=" text-sm">
                      ۹۸۹۰۷۸۹۱۲۳۲۵۱+
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col  justify-between items-start  h-16  mr-10">
                <div className="flex flex-row  justify-between items-center ml-3">
                  <p style={{ fontWeight: "500" }} className="text-base">
                    ایمیل
                  </p>
                  <p style={{ fontWeight: "400" }} className=" text-sm">
                    testTqw@gmail.com
                  </p>
                </div>
                <div className="flex flex-row  justify-between items-center w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.3027 2.98437C20.0138 2.99694 19.7486 3.08005 19.5156 3.17187C19.3004 3.25662 18.5275 3.58146 17.2969 4.09765C16.0662 4.61383 14.4355 5.29823 12.6973 6.02929C9.22084 7.49141 5.31424 9.13612 3.3125 9.97851C3.24376 10.0071 2.96459 10.0926 2.65625 10.3281C2.3472 10.5642 2.00391 11.0765 2.00391 11.6367C2.00391 12.0887 2.22952 12.549 2.50195 12.8125C2.77439 13.076 3.05049 13.1992 3.28125 13.291V13.2891C4.06128 13.5998 6.39069 14.5319 6.94531 14.7539C7.14204 15.3434 7.98659 17.8673 8.1875 18.5019H8.18555C8.32756 18.9512 8.46598 19.2439 8.6582 19.4883C8.75431 19.6105 8.86904 19.7212 9.00977 19.8086C9.06376 19.8421 9.12355 19.8681 9.18359 19.8926C9.19196 19.8961 9.20059 19.897 9.20898 19.9004L9.18555 19.8945C9.20296 19.9015 9.21858 19.9118 9.23633 19.918C9.26524 19.9279 9.28529 19.9276 9.32422 19.9355C9.46122 19.9777 9.59798 20.0058 9.72461 20.0058C10.2682 20.0058 10.6016 19.7109 10.6016 19.7109L10.623 19.6953L12.9707 17.709L15.8457 20.3691C15.8982 20.4433 16.3096 21 17.2617 21C17.8298 21 18.279 20.7188 18.5664 20.4238C18.8538 20.1289 19.0328 19.827 19.1133 19.418L19.1152 19.416C19.1794 19.0858 21.9316 5.26562 21.9316 5.26562L21.9258 5.28905C22.0114 4.90671 22.0367 4.53695 21.9355 4.16015C21.8344 3.78334 21.5613 3.41562 21.2324 3.22265C20.9036 3.02968 20.5917 2.9718 20.3027 2.98437ZM19.9082 5.17382C19.7994 5.71985 17.334 18.1059 17.1816 18.8828L13.0293 15.041L10.2227 17.4141L11 14.375C11 14.375 16.3625 8.94685 16.6855 8.63085C16.9455 8.37785 17 8.28916 17 8.20116C17 8.08416 16.9398 7.99999 16.8008 7.99999C16.6758 7.99999 16.506 8.11977 16.416 8.17577C15.2724 8.88878 10.4013 11.6647 8.00586 13.0273C7.8617 12.9695 5.6974 12.1004 4.53125 11.6348C6.60551 10.7618 10.1612 9.2658 13.4727 7.87304C15.2106 7.1421 16.8408 6.45709 18.0703 5.9414C19.1082 5.50609 19.6495 5.28069 19.9082 5.17382ZM17.1523 19.0254H17.1543L17.1523 19.0312C17.1536 19.0248 17.1514 19.0304 17.1523 19.0254Z"
                      fill="#1892AD"
                    />
                    <path
                      d="M20.3027 2.98437C20.0138 2.99694 19.7486 3.08005 19.5156 3.17187C19.3004 3.25662 18.5275 3.58146 17.2969 4.09765C16.0662 4.61383 14.4355 5.29823 12.6973 6.02929C9.22084 7.49141 5.31424 9.13612 3.3125 9.97851C3.24376 10.0071 2.96459 10.0926 2.65625 10.3281C2.3472 10.5642 2.00391 11.0765 2.00391 11.6367C2.00391 12.0887 2.22952 12.549 2.50195 12.8125C2.77439 13.076 3.05049 13.1992 3.28125 13.291V13.2891C4.06128 13.5998 6.39069 14.5319 6.94531 14.7539C7.14204 15.3434 7.98659 17.8673 8.1875 18.5019H8.18555C8.32756 18.9512 8.46598 19.2439 8.6582 19.4883C8.75431 19.6105 8.86904 19.7212 9.00977 19.8086C9.06376 19.8421 9.12355 19.8681 9.18359 19.8926C9.19196 19.8961 9.20059 19.897 9.20898 19.9004L9.18555 19.8945C9.20296 19.9015 9.21858 19.9118 9.23633 19.918C9.26524 19.9279 9.28529 19.9276 9.32422 19.9355C9.46122 19.9777 9.59798 20.0058 9.72461 20.0058C10.2682 20.0058 10.6016 19.7109 10.6016 19.7109L10.623 19.6953L12.9707 17.709L15.8457 20.3691C15.8982 20.4433 16.3096 21 17.2617 21C17.8298 21 18.279 20.7188 18.5664 20.4238C18.8538 20.1289 19.0328 19.827 19.1133 19.418L19.1152 19.416C19.1794 19.0858 21.9316 5.26562 21.9316 5.26562L21.9258 5.28905C22.0114 4.90671 22.0367 4.53695 21.9355 4.16015C21.8344 3.78334 21.5613 3.41562 21.2324 3.22265C20.9036 3.02968 20.5917 2.9718 20.3027 2.98437ZM19.9082 5.17382C19.7994 5.71985 17.334 18.1059 17.1816 18.8828L13.0293 15.041L10.2227 17.4141L11 14.375C11 14.375 16.3625 8.94685 16.6855 8.63085C16.9455 8.37785 17 8.28916 17 8.20116C17 8.08416 16.9398 7.99999 16.8008 7.99999C16.6758 7.99999 16.506 8.11977 16.416 8.17577C15.2724 8.88878 10.4013 11.6647 8.00586 13.0273C7.8617 12.9695 5.6974 12.1004 4.53125 11.6348C6.60551 10.7618 10.1612 9.2658 13.4727 7.87304C15.2106 7.1421 16.8408 6.45709 18.0703 5.9414C19.1082 5.50609 19.6495 5.28069 19.9082 5.17382ZM17.1523 19.0254H17.1543L17.1523 19.0312C17.1536 19.0248 17.1514 19.0304 17.1523 19.0254Z"
                      fill="#7606B2"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M8.33334 3C5.57234 3 3.33334 5.239 3.33334 8V16C3.33334 18.761 5.57234 21 8.33334 21H16.3333C19.0943 21 21.3333 18.761 21.3333 16V8C21.3333 5.239 19.0943 3 16.3333 3H8.33334ZM18.3333 5C18.8853 5 19.3333 5.448 19.3333 6C19.3333 6.552 18.8853 7 18.3333 7C17.7813 7 17.3333 6.552 17.3333 6C17.3333 5.448 17.7813 5 18.3333 5ZM12.3333 7C15.0943 7 17.3333 9.239 17.3333 12C17.3333 14.761 15.0943 17 12.3333 17C9.57234 17 7.33334 14.761 7.33334 12C7.33334 9.239 9.57234 7 12.3333 7ZM12.3333 9C11.5377 9 10.7746 9.31607 10.212 9.87868C9.64941 10.4413 9.33334 11.2044 9.33334 12C9.33334 12.7956 9.64941 13.5587 10.212 14.1213C10.7746 14.6839 11.5377 15 12.3333 15C13.129 15 13.8921 14.6839 14.4547 14.1213C15.0173 13.5587 15.3333 12.7956 15.3333 12C15.3333 11.2044 15.0173 10.4413 14.4547 9.87868C13.8921 9.31607 13.129 9 12.3333 9Z"
                      fill="#1892AD"
                    />
                    <path
                      d="M8.33334 3C5.57234 3 3.33334 5.239 3.33334 8V16C3.33334 18.761 5.57234 21 8.33334 21H16.3333C19.0943 21 21.3333 18.761 21.3333 16V8C21.3333 5.239 19.0943 3 16.3333 3H8.33334ZM18.3333 5C18.8853 5 19.3333 5.448 19.3333 6C19.3333 6.552 18.8853 7 18.3333 7C17.7813 7 17.3333 6.552 17.3333 6C17.3333 5.448 17.7813 5 18.3333 5ZM12.3333 7C15.0943 7 17.3333 9.239 17.3333 12C17.3333 14.761 15.0943 17 12.3333 17C9.57234 17 7.33334 14.761 7.33334 12C7.33334 9.239 9.57234 7 12.3333 7ZM12.3333 9C11.5377 9 10.7746 9.31607 10.212 9.87868C9.64941 10.4413 9.33334 11.2044 9.33334 12C9.33334 12.7956 9.64941 13.5587 10.212 14.1213C10.7746 14.6839 11.5377 15 12.3333 15C13.129 15 13.8921 14.6839 14.4547 14.1213C15.0173 13.5587 15.3333 12.7956 15.3333 12C15.3333 11.2044 15.0173 10.4413 14.4547 9.87868C13.8921 9.31607 13.129 9 12.3333 9Z"
                      fill="#7606B2"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 3.99902C21.22 4.46202 19.655 5.09302 18.735 5.27502C18.708 5.28202 18.686 5.29102 18.66 5.29802C17.847 4.49602 16.733 3.99902 15.5 3.99902C13.015 3.99902 11 6.01402 11 8.49902C11 8.63002 10.989 8.87102 11 8.99902C7.647 8.99902 5.095 7.24302 3.265 4.99902C3.066 5.49902 2.979 6.28902 2.979 7.03102C2.979 8.43202 4.074 9.80802 5.779 10.661C5.465 10.742 5.119 10.8 4.759 10.8C4.178 10.8 3.563 10.647 3 10.183C3 10.2 3 10.216 3 10.234C3 12.192 5.078 13.525 6.926 13.896C6.551 14.117 5.795 14.139 5.426 14.139C5.166 14.139 4.246 14.02 4 13.974C4.514 15.579 6.368 16.481 8.135 16.513C6.753 17.597 5.794 17.999 2.964 17.999H2C3.788 19.145 6.065 20 8.347 20C15.777 20 20 14.337 20 8.99902C20 8.91302 19.998 8.73302 19.995 8.55202C19.995 8.53402 20 8.51702 20 8.49902C20 8.47202 19.992 8.44602 19.992 8.41902C19.989 8.28302 19.986 8.15602 19.983 8.09002C20.773 7.52002 21.458 6.80902 22 5.99902C21.275 6.32102 20.497 6.53702 19.68 6.63502C20.514 6.13502 21.699 4.94302 22 3.99902Z"
                      fill="#1892AD"
                    />
                    <path
                      d="M22 3.99902C21.22 4.46202 19.655 5.09302 18.735 5.27502C18.708 5.28202 18.686 5.29102 18.66 5.29802C17.847 4.49602 16.733 3.99902 15.5 3.99902C13.015 3.99902 11 6.01402 11 8.49902C11 8.63002 10.989 8.87102 11 8.99902C7.647 8.99902 5.095 7.24302 3.265 4.99902C3.066 5.49902 2.979 6.28902 2.979 7.03102C2.979 8.43202 4.074 9.80802 5.779 10.661C5.465 10.742 5.119 10.8 4.759 10.8C4.178 10.8 3.563 10.647 3 10.183C3 10.2 3 10.216 3 10.234C3 12.192 5.078 13.525 6.926 13.896C6.551 14.117 5.795 14.139 5.426 14.139C5.166 14.139 4.246 14.02 4 13.974C4.514 15.579 6.368 16.481 8.135 16.513C6.753 17.597 5.794 17.999 2.964 17.999H2C3.788 19.145 6.065 20 8.347 20C15.777 20 20 14.337 20 8.99902C20 8.91302 19.998 8.73302 19.995 8.55202C19.995 8.53402 20 8.51702 20 8.49902C20 8.47202 19.992 8.44602 19.992 8.41902C19.989 8.28302 19.986 8.15602 19.983 8.09002C20.773 7.52002 21.458 6.80902 22 5.99902C21.275 6.32102 20.497 6.53702 19.68 6.63502C20.514 6.13502 21.699 4.94302 22 3.99902Z"
                      fill="#7606B2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden md:block ">
            <div>
              <p style={{ fontWeight: "700" }} className="  text-xl ">
                محصولات
              </p>
            </div>
            <ul className=" pr-2 flex flex-col  justify-between items-start">
              {mahsollist.map((e) => {
                if (e.id <= 4) {
                  return (
                    <li style={{ fontWeight: "500" }} className="text-base">
                      <Link>{e.title}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className=" md:pl-20 lg:pl-40 flex flex-col  items-center md:items-start">
            <p style={{ fontWeight: "700" }} className="  text-xl ">
              خبرنامه
            </p>
            <p style={{ fontWeight: "500" }} className="text-base">
              با عضویت در خبرنامه از اخبار و ویژه‌برنامه‌ها خبردار شوید.
            </p>
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="relative h-10 w-52 shadow-md rounded-md">
                <img
                  className="absolute left-3 -translate-y-1/2 scale-105"
                  style={{ top: "50%" }}
                  src={mailIcon}
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontWeight: "bold" }}
                  className="h-full rounded-md w-full px-2"
                  placeholder="ایمیل خود را وارد کنید"
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
          <p style={{ fontWeight: "500" }} className=" text-sm">
            © کلیه حقوق مادی و معنوی متعلق به شرکت فلان می‌باشد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
