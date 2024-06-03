import mainpage from "./MainPage.module.css";
import {useEffect, useState} from "react";
import {MdFilterListAlt} from "react-icons/md";
import {BaseRoot} from "../../baseRoot";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cart from "../cart/cart";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import Modal from "../Modal/Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper/modules";
import Product from "../../pages/product/product";
import { useTranslation } from "react-i18next";

function DownerPart() {
    let [y, sety] = useState(1);
    let [x, setx] = useState(0);
    let [z, setz] = useState(0);

    const [prdouctData, setProductData] = useState([]);
    const [likedItems, setLikedItems] = useState([]);
    const [productCopy, setProductCopy] = useState([]);
    const [buttonShowStatus, setButtonShowStatus] = useState("Show-All")
    const [collections, setCollections] = useState([]);
    const [hasTejKhareji, setHasTejKhareji] = useState(false)
    const [hasTejDakhelii, setHasTejDakheli] = useState(false)
    const [hasAmouzeshTej, setHasAmouzeshTej] = useState(false)
    const [hasKhadamatTej, setHasKhadamatTej] = useState(false)
    const { t } = useTranslation();


    const config = {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    };

    useEffect(() => {
        setProductCopy(prdouctData);
        for (let i = 0; i < prdouctData.length; i++) {
            if (prdouctData[i].amouzesh_tejarat)
                setHasAmouzeshTej(true)
            if (prdouctData[i].khadamat_tejarat)
                setHasKhadamatTej(true)
            if (prdouctData[i].tejarat_dakheli)
                setHasTejDakheli(true)
            if (prdouctData[i].tejarat_khareji)
                setHasTejKhareji(true)
        }
    }, [prdouctData]);

    useEffect(() => {
        axios
            .get(`${BaseRoot}store/products/?recommend=True/`, config)
            .then(function (response) {
                setProductData(response.data);
            });
    }, []);
    useEffect(() => {
        axios.get(`${BaseRoot}store/likes/`, config).then(({data}) => {
            const tmpLikedItem = [];
            data.forEach((item) => tmpLikedItem.push(item.product));
            setLikedItems(tmpLikedItem);
        });

        axios
            .get(`${BaseRoot}store/collections/`, config)
            .then(function (response) {
                setCollections(response.data);
            });
    }, []);

    function newItemLiked(id) {
        let tmp = [...likedItems];
        tmp.push(id);
        setLikedItems(tmp);
    }

    function newItemDisLiked(id) {
        let tmp = [...likedItems];
        tmp = tmp.filter((item) => item !== id);
        setLikedItems(tmp);
    }

    function showLikedItems() {
        let tmpItems = [];
        tmpItems = prdouctData.filter((item) => likedItems.includes(item.id));
        setProductCopy(tmpItems);
        setButtonShowStatus("Show-Some")
    }

    function showAllItems() {
        setProductCopy(prdouctData);
        setButtonShowStatus("Show-All")
    }

    return (
        <>
            <div className={mainpage.DownBBox}>
                <div className={mainpage.uptitle}>
                    {" "}
                    {hasTejKhareji && <span className={mainpage.pishnahadT}>تجارت خارجی</span>}
                    <div className={mainpage.ShowPart}>
                        <i>
                            <MdFilterListAlt/>{" "}
                        </i>
                        <div className={mainpage.textP}>
              <span
                  onClick={showAllItems}
                  className={
                      buttonShowStatus !== "Show-All" ? mainpage.pishnahadat2 : mainpage.pishnahadat3
                  }
              >
                {t("showAll")}
              </span>
                            <span
                                className={
                                    buttonShowStatus === "Show-All" ? mainpage.pishnahadat4 : mainpage.pishnahadat3
                                }
                                onClick={() => {
                                    showLikedItems();
                                }}
                            >
                {t("showLikedOne")}{" "}
              </span>
                        </div>
                    </div>
                </div>
                <Swiper
                    breakpoints={{
                        1000: {
                            width: 1000,
                            slidesPerView: 3,
                        },
                        800: {
                            width: 800,
                            slidesPerView: 2,
                        },
                        700: {
                            width: 700,
                            slidesPerView: 2,
                        },
                        600: {
                            width: 600,
                            slidesPerView: 2,
                        },
                        500: {
                            width: 500,
                            slidesPerView: 1,
                        },
                        400: {
                            width: 400,
                            slidesPerView: 1,
                        },
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    className="w-full"
                >
                    {productCopy.map((x) => {
                        if (x.tejarat_khareji) {
                            return (
                                <SwiperSlide className="flex  justify-center w-full">
                                    <Cart
                                        x={x}
                                        newItemLiked={newItemLiked}
                                        newItemDisLiked={newItemDisLiked}
                                        likedItems={likedItems}
                                    />
                                </SwiperSlide>
                            );
                        }
                    })}
                </Swiper>
                {hasTejDakhelii && <div className="flex flex-col mt-14 gap-8">
                    <span className={mainpage.pishnahadT}>تجارت داخلی</span>
                    <Swiper
                        breakpoints={{
                            1000: {
                                width: 1000,
                                slidesPerView: 3,
                            },
                            800: {
                                width: 800,
                                slidesPerView: 2,
                            },
                            700: {
                                width: 700,
                                slidesPerView: 2,
                            },
                            600: {
                                width: 600,
                                slidesPerView: 2,
                            },
                            500: {
                                width: 500,
                                slidesPerView: 1,
                            },
                            400: {
                                width: 400,
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="w-full"
                    >
                        {productCopy.map((x) => {
                            if (x.tejarat_dakheli) {
                                return (
                                    <SwiperSlide className="flex  justify-center w-full">
                                        <Cart
                                            x={x}
                                            newItemLiked={newItemLiked}
                                            newItemDisLiked={newItemDisLiked}
                                            likedItems={likedItems}
                                        />
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                </div>}
                {hasKhadamatTej && <div className="flex flex-col mt-14 gap-8">
                    <span className={mainpage.pishnahadT}>خدمات تجارت</span>
                    <Swiper
                        breakpoints={{
                            1000: {
                                width: 1000,
                                slidesPerView: 3,
                            },
                            800: {
                                width: 800,
                                slidesPerView: 2,
                            },
                            700: {
                                width: 700,
                                slidesPerView: 2,
                            },
                            600: {
                                width: 600,
                                slidesPerView: 2,
                            },
                            500: {
                                width: 500,
                                slidesPerView: 1,
                            },
                            400: {
                                width: 400,
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="w-full"
                    >
                        {productCopy.map((x) => {
                            if (x.khadamat_tejarat) {
                                return (
                                    <SwiperSlide className="flex  justify-center w-full">
                                        <Cart
                                            x={x}
                                            newItemLiked={newItemLiked}
                                            newItemDisLiked={newItemDisLiked}
                                            likedItems={likedItems}
                                        />
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                </div>}
                {hasAmouzeshTej && <div className="flex flex-col mt-14 gap-8">
                    <span className={mainpage.pishnahadT}>آموزش تجارت</span>
                    <Swiper
                        breakpoints={{
                            1000: {
                                width: 1000,
                                slidesPerView: 3,
                            },
                            800: {
                                width: 800,
                                slidesPerView: 2,
                            },
                            700: {
                                width: 700,
                                slidesPerView: 2,
                            },
                            600: {
                                width: 600,
                                slidesPerView: 2,
                            },
                            500: {
                                width: 500,
                                slidesPerView: 1,
                            },
                            400: {
                                width: 400,
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="w-full"
                    >
                        {productCopy.map((x) => {
                            if (x.amouzesh_tejarat) {
                                return (
                                    <SwiperSlide className="flex  justify-center w-full">
                                        <Cart
                                            x={x}
                                            newItemLiked={newItemLiked}
                                            newItemDisLiked={newItemDisLiked}
                                            likedItems={likedItems}
                                        />
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                </div>}
            </div>
        </>
    );
}

export default DownerPart;
