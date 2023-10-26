import axios from "axios";
import { useEffect, useState } from "react";
import { BaseRoot } from "../../baseRoot";
import { toast } from "react-toastify";
import jalaliMoment from 'jalali-moment';
import ToPersianNumber from './../../utilities/ToPersianNumber';

const clarifyPersianDate = (dateString) => {
    return ToPersianNumber(dateString.replaceAll("-", "/"))
}

const CommentCard = ({ e }) => {
  console.log(e);
  
  return (
    <div style={{ width: "28rem" }} className="h-28 mb-3 flex flex-col gap-2">
      <div className="flex flex-col">
        <p style={{ color: "#3B0359" }} className=" font-semibold text-lg">
          {e.name}
        </p>
        <div className=" flex flex-row justify-start gap-3 items-center w-8/12 ">
          <div>
            <p style={{ color: "#8806CE" }} className=" font-normal text-lg">
              {e.email}
            </p>
          </div>
          <div className="flex flex-row-reverse gap-3">
            <p
              style={{ color: "#D184FB" }}
              className=" font-normal text-base"
            >
                {clarifyPersianDate(jalaliMoment(e.creation_date).format('jYYYY-jMM-jDD '))}
            </p>
            <p
              style={{ color: "#D184FB" }}
              className=" font-normal text-base"
            >
                {clarifyPersianDate(jalaliMoment(e.creation_date).format('HH:mm:ss'))}
            </p>
          </div>
        </div>
      </div>
      <div style={{ color: "#3B0359" }} className=" font-normal text-lg">
        {e.content}
      </div>
    </div>
  );
};

const Comment = ({ id }) => {
  const [newComment, setNewComment] = useState();
  const [comment, setComment] = useState([]);
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const [info, setInfo] = useState();
  const [email, setEmail] = useState();
  const senComment = () => {
    axios
      .post(`${BaseRoot}store/products/${id}/reviews/`, {
        name: info,
        content: newComment,
        email: email,
      })
      .then(function (response) {
        setNewComment("");
        setEmail("");
        setInfo("");
      })
      .catch(function (error) {
        toast.warning("email is incorrect or comment is null");
      });
    axios
      .get(`${BaseRoot}store/products/${id}/reviews/`, config)
      .then(function (response) {
        setComment(response.data);
        // console.log(response.data.properties)
      });
  };
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/products/${id}/reviews/`, config)
      .then(function (response) {
        setComment(response.data);
        // console.log(response.data.properties)
      });
  }, []);
  return (
    <div className="mt-9 w-full">
      <div
        className="flex flex-col md:flex-row justify-center items-center w-full h-1/2"
        style={comment.length === 0 ? { height: "100%" } : {}}
      >
        <div className="flex flex-col-reverse justify-between items-start w-72 h-full">
          <input
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            style={{
              background: "#F7EBFE",
              borderRadius: "0.5rem",
              marginTop: "1rem",
              padding: " 0rem 0.625rem",
              width: "100%",
              height: "42%",
            }}
            placeholder="نام و نام‌خانوادگی"
            className="inputPlaceColorized"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              background: "#F7EBFE",
              borderRadius: "0.5rem",
              padding: " 0rem 0.625rem",
              width: "100%",
              height: "42%",
            }}
            placeholder="ایمیل"
            className="inputPlaceColorized"
          />
        </div>
        <div className="items-center md:w-2/3 w-72 h-full">
          <div className="flex flex-row justify-center w-full h-full">
            <textarea
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
              className="w-full mt-4 md:mt-0 md:mx-4 inputPlaceColorized text-xl"
              style={{
                background: "#F7EBFE",
                borderRadius: "0.5rem",
                padding: "0.625rem 0.625rem",
                height: "100%",
                resize: "none",
              }}
              placeholder="ثبت نظر"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end items-start w-40 h-full">
          {/* <div className="flex flex-row justify-between items-center w-full">
                        <input type="checkbox" />
                        <p>اطلاعات‌ من را نمایش بده</p>
                    </div> */}
          <button
            className="font-bold text-xl"
            onClick={senComment}
            style={{
              background: "#8806CE",
              color: "#FFFFFF",
              textAlign: "center",
              width: "100%",
              borderRadius: "0.5rem",
              paddingBlock: "0.6rem",
            }}
          >
            ثبت نظر
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-x-60 mt-12 h-1/2">
        {comment.map((e) => {
          return <CommentCard e={e} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
