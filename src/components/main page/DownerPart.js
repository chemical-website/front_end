import {useEffect, useState} from "react";
import {MdFilterListAlt} from "react-icons/md";
import {BaseRoot} from "../../baseRoot";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cart from "../cart/cart";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useTranslation} from "react-i18next";

function DownerPart() {
    let [y, sety] = useState(1);
    let [x, setx] = useState(0);
    let [z, setz] = useState(0);

    const [prdouctData, setProductData] = useState([]);
    const [likedItems, setLikedItems] = useState([]);
    const [productCopy, setProductCopy] = useState([]);
    const [buttonShowStatus, setButtonShowStatus] = useState("Show-All");
    const [collections, setCollections] = useState([]);
    const [hasTejKhareji, setHasTejKhareji] = useState(false);
    const [hasTejDakhelii, setHasTejDakheli] = useState(false);
    const [hasAmouzeshTej, setHasAmouzeshTej] = useState(false);
    const [hasKhadamatTej, setHasKhadamatTej] = useState(false);
    const {t, i18n} = useTranslation();

    const config = {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    };

    useEffect(() => {
        setProductCopy(prdouctData);
        setHasAmouzeshTej(false);
        setHasKhadamatTej(false);
        setHasTejDakheli(false);
        setHasTejKhareji(false);
        for (let i = 0; i < prdouctData.length; i++) {
            if (prdouctData[i].amouzesh_tejarat) setHasAmouzeshTej(true);
            if (prdouctData[i].khadamat_tejarat) setHasKhadamatTej(true);
            if (prdouctData[i].tejarat_dakheli) setHasTejDakheli(true);
            if (prdouctData[i].tejarat_khareji) setHasTejKhareji(true);
        }
    }, [prdouctData]);

    useEffect(() => {
        const language = i18n.language;
        setProductData([]);
        axios
            .get(`${BaseRoot}/${language}/api/store/products/?recommend=True/`, config)
            .then(function (response) {
                setProductData(response.data);
            });
    }, [i18n.language]);

    useEffect(() => {
        const language = i18n.language;
        axios.get(`${BaseRoot}/${language}/api/store/likes/`, config).then(({data}) => {
            const tmpLikedItem = [];
            data.forEach((item) => tmpLikedItem.push(item.product));
            setLikedItems(tmpLikedItem);
        });

        axios.get(`${BaseRoot}/${language}/api/store/collections/`, config).then(function (response) {
            setCollections(response.data);
        });
    }, [i18n.language]);

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
        setButtonShowStatus("Show-Some");
    }

    function showAllItems() {
        setProductCopy(prdouctData);
        setButtonShowStatus("Show-All");
    }

    return (
        <>
            <div className="w-[90%] mx-auto mt-[133px]">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-16 md:gap-0 mb-[30px]">
                    {hasTejKhareji && <span className="text-[40px] font-bold text-[#27023b]">{t("foreignBusiness")}</span>}
                    <div className="flex items-center gap-[8px] text-[16px] font-semibold text-[#27023b] w-full md:w-[301px]">
                        <i><MdFilterListAlt/></i>
                        <div className="flex gap-[7px] bg-[#f7ebfe] rounded-[8px] p-[3px] w-full">
                            <span
                                onClick={showAllItems}
                                className={`text-center ${buttonShowStatus !== "Show-All" ? "w-full cursor-pointer px-[8px] py-[4px]" : "w-full cursor-pointer px-[8px] py-[4px] bg-[#8806ce] text-white rounded-[8px]"}`}
                            >
                                {t("showAll")}
                            </span>
                            <span
                                onClick={showLikedItems}
                                className={`text-center ${buttonShowStatus === "Show-Some" ? "w-full cursor-pointer px-[8px] py-[4px] bg-[#8806ce] text-white rounded-[8px]" : "w-full cursor-pointer px-[8px] py-[4px]"}`}
                            >
                                {t("showLikedOne")}
                            </span>
                        </div>
                    </div>
                </div>

                <Swiper
                    breakpoints={{
                        1000: {width: 1000, slidesPerView: 3},
                        800: {width: 800, slidesPerView: 2},
                        700: {width: 700, slidesPerView: 2},
                        600: {width: 600, slidesPerView: 2},
                        500: {width: 500, slidesPerView: 1},
                        400: {width: 400, slidesPerView: 1},
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    className="w-full"
                >
                    {productCopy.map((x) => {
                        if (x.tejarat_khareji) {
                            return (
                                <SwiperSlide className="flex justify-center w-full">
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

                {hasTejDakhelii && (
                    <div className="flex flex-col mt-24 md:mt-14 gap-[32px]">
                        <span className="text-[40px] font-bold text-[#27023b]">{t("domesticBusiness")}</span>
                        <Swiper
                            breakpoints={{
                                1000: {width: 1000, slidesPerView: 3},
                                800: {width: 800, slidesPerView: 2},
                                700: {width: 700, slidesPerView: 2},
                                600: {width: 600, slidesPerView: 2},
                                500: {width: 500, slidesPerView: 1},
                                400: {width: 400, slidesPerView: 1},
                            }}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation]}
                            className="w-full"
                        >
                            {productCopy.map((x) => {
                                if (x.tejarat_dakheli) {
                                    return (
                                        <SwiperSlide className="flex justify-center w-full">
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
                    </div>
                )}

                {hasKhadamatTej && (
                    <div className="flex flex-col mt-24 md:mt-14 gap-[32px]">
                        <span className="text-[40px] font-bold text-[#27023b]">{t("businesServices")}</span>
                        <Swiper
                            breakpoints={{
                                1000: {width: 1000, slidesPerView: 3},
                                800: {width: 800, slidesPerView: 2},
                                700: {width: 700, slidesPerView: 2},
                                600: {width: 600, slidesPerView: 2},
                                500: {width: 500, slidesPerView: 1},
                                400: {width: 400, slidesPerView: 1},
                            }}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation]}
                            className="w-full"
                        >
                            {productCopy.map((x) => {
                                if (x.khadamat_tejarat) {
                                    return (
                                        <SwiperSlide className="flex justify-center w-full">
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
                    </div>
                )}

                {hasAmouzeshTej && (
                    <div className="flex flex-col mt-24 md:mt-14 gap-[32px]">
                        <span className="text-[40px] font-bold text-[#27023b]">{t("businessTraining")}</span>
                        <Swiper
                            breakpoints={{
                                1000: {width: 1000, slidesPerView: 3},
                                800: {width: 800, slidesPerView: 2},
                                700: {width: 700, slidesPerView: 2},
                                600: {width: 600, slidesPerView: 2},
                                500: {width: 500, slidesPerView: 1},
                                400: {width: 400, slidesPerView: 1},
                            }}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation]}
                            className="w-full"
                        >
                            {productCopy.map((x) => {
                                if (x.amouzesh_tejarat) {
                                    return (
                                        <SwiperSlide className="flex justify-center w-full">
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
                    </div>
                )}
            </div>
        </>
    );
}

export default DownerPart;
