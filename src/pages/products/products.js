import Cart from "../../components/cart/cart";
import ax from "../../assets/img/Photo.png";
import { Fragment, useEffect, useState } from "react";
import NavigationBar from "../../layout/header/NavigationBar";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import { Link } from "react-router-dom";
import ToPersianNumber from "../../utilities/ToPersianNumber";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi"

const Products = () => {
  const [prdouctData, setProductData] = useState([]);
  const [collections, setCollections] = useState([]);
  const [sort, Setsort] = useState(false);
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios.get(`${BaseRoot}store/products/`, config).then(function (response) {
      setProductData(response.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`${BaseRoot}store/collections/`, config)
      .then(function (response) {
        setCollections(response.data);
      });
  }, []);
  useEffect(() => {
    if (sort == false) {
      setProductData(prdouctData.sort((a, b) => a.id - b.id));
    } else {
      setProductData(prdouctData.sort((a, b) => b.id - a.id));
    }
  }, [sort]);
  return (
    <Fragment>
      <NavigationBar />
      <div className="w-full flex flex-col justify-start items-center">
        <div
          className="w-5/6"
        >
          <div className="flex flex-row items-center justify-start gap-4 w-2/3 sm:w-1/3 md:w-1/5 mb-9 mt-14">
            <div>
              <Link to={"/app"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_26_272)">
                    <path
                      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                      fill="#0C4957"
                    />
                    <path
                      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                      fill="#3B0359"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_26_272">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_26_281)">
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    fill="#1892AD"
                  />
                  <path
                    d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                    fill="#7606B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26_281">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>محصولات</div>

            <div></div>
          </div>
        </div>
        <div className="w-5/6 flex flex-row justify-end items-center">
          <div className="flex flex-row justify-between items-center w-1/6">
            <div className="font-bold text-base">{ToPersianNumber(prdouctData.length)} محصول</div>
            <div
              onClick={() => {
                Setsort(true ? sort === false : false);
              }}
              style={{
                border: "1.5px solid #7606B2",
                borderRadius: "0.5rem",
              }}
              className="flex flex-row justify-between items-center px-3 py-1 gap-1 cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_442_1378)">
                    <path
                      d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
                      fill="#1892AD"
                    />
                    <path
                      d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
                      fill="#7606B2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_442_1378">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className=" text-xs md:text-base">تاریخ انتشار</p>
              <div>
                {sort === true ? <HiOutlineArrowSmDown size={25} color="#7606B2"/> :
                <HiOutlineArrowSmUp size={25} color="#7606B2"/>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 flex flex-row justify-between items-start mt-12 ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {collections.map((e) => {
              return (
                <div
                  style={{
                    backgroundColor: "#F7EBFE",
                    color: "#3B0359",

                  }}
                  className="px-2 rounded-md text-center"
                >
                  {e.title}
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-4 w-5/6">
            {prdouctData.map((e) => {
              return <Cart x={e} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
