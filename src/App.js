import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import SignIn from "./components/main page/SignIn";
import NewsPage from "./pages/news/news";
import SearchProducts from "./pages/searchproduct/Searchproduct";
import SearchCollections from "./pages/searchcollections/searchcollections";
import SearchIndustry from "./pages/searchindustry/searchindustry";
import AboutUsPage from "./pages/about-us/aboutus";
import NewPage from "./pages/news-page/newspage";
import { useModal } from "./context/ModalContext";
import PicSlider from "./pages/product/picSlider";
import { useWindowSize } from "@uidotdev/usehooks";
import { RxCross2 } from "react-icons/rx";
import SeeMoreIcon from "./assets/Icons/SeeMore.svg";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoPhoto from "./assets/img/No-Image.jpg"
import RedirectToApp from './pages/RedirectToApp';
import SearchPage from "./pages/search-page/search-page";

function Error404() {
  return (
    <div>
      <h3>nothing is here</h3>
    </div>
  );
}

function App() {
  const { isModalOpen, modalData, closeModal, changeAcceptRule } = useModal();
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleEscapeKeyPress = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="app/" element={<LandingPage />} />
        <Route path="app/products" element={<Products />} />
        <Route path="app/products/search/:name" element={<SearchProducts />} />
        <Route path="app/news/:id" element={<NewPage />} />
        <Route path="app/product/:id" element={<Product />} />
        <Route path="app/search/"
               element={<SearchPage />}
               />
        <Route
          path="app/collections/search/:name"
          element={<SearchCollections />}
        />
        <Route
          path="app/industries/search/:name"
          element={<SearchIndustry />}
        />
        <Route path="app/aboutus" element={<AboutUsPage />} />
        <Route path="app/news" element={<NewsPage />} />
        <Route path="app/s" element={<SignIn />} />
      </Routes>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="w-screen h-screen fixed left-0 top-0 right-0 m-auto overflow-auto z-40 shadow-md myBackdrop"
            onClick={() => {
              if (modalData.type !== "showRules") closeModal();
            }}
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div
                className="bg-slate-50 rounded-2xl shadow-lg px-5 relative z-50"
                style={
                  width > 1024
                    ? { height: height / 2, width: width / 2 }
                    : width > 500
                    ? {
                        height: height - 100,
                        width: width - width / 3,
                      }
                    : { height: height - 100, width: width - 50 }
                }
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {modalData.type !== "showRules" && (
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="w-1/2 max-lg:w-full relative"
                      style={{ height: height / 2 }}
                    >
                      <div className="flex flex-col h-full justify-center">
                        {modalData.images.length !== 0 ? <PicSlider images={modalData.images} /> : <img src={NoPhoto} alt="no_photo"/>}
                      </div>
                    </div>
                    <div className="w-1/2 max-lg:w-full overflow-auto flex flex-col justify-center items-start text-justify">
                      <div className="flex flex-col gap-1 p-5 h-fit">
                        <span className="text-2xl font-bold">
                          {modalData.title}
                        </span>
                        <span className="text-lg">
                          {modalData.short_description &&
                            modalData.short_description}
                        </span>
                        <span className="mt-4">
                          {modalData.preview_description.length > 160
                            ? modalData.preview_description.substring(0, 160) +
                              " [برای ادامه کلیک کنید]"
                            : modalData.preview_description}
                        </span>
                        <div className="flex flex-row gap-2">
                          {modalData.tags &&
                            modalData.tags.map((e) => {
                              return (
                                <div
                                  style={{
                                    borderColor: "#7606B2",
                                    color: "#7606B2",
                                  }}
                                  className="mt-3 py-1 px-3 rounded-lg text-base border-2 border-solid w-fit font-bold cursor-default"
                                >
                                  {e.tag.title}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {modalData.type !== "showRules" && (
                  <div
                    className="w-fit flex flex-row justify-center items-center p-5 absolute -left-7 -bottom-7 cursor-pointer"
                    style={{ backgroundColor: "#3B0359", borderRadius: "50%" }}
                  >
                    <Link
                      to={`/app/${modalData.type}/${modalData.id}`}
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <img src={SeeMoreIcon} alt="seeMore" />
                    </Link>
                  </div>
                )}
                <div
                  className="absolute top-5 left-5 cursor-pointer"
                  onClick={() => {
                    if (modalData.type !== "showRules") closeModal();
                  }}
                >
                  <RxCross2 size={25} />
                </div>
                {modalData.type === "showRules" && (
                  <div className="w-full h-full flex flex-col gap-5 p-10 justify-between">
                    <span className="text-xl">
                      این یک متن تستی می‌باشد و شما بعنوان کاربر باید آن را قبول
                      کنید. این یک متن تستی می‌باشد و شما بعنوان کاربر باید آن
                      را قبول کنید. این یک متن تستی می‌باشد و شما بعنوان کاربر
                      باید آن را قبول کنید. این یک متن تستی می‌باشد و شما بعنوان
                      کاربر باید آن را قبول کنید. این یک متن تستی می‌باشد و شما
                      بعنوان کاربر باید آن را قبول کنید. این یک متن تستی می‌باشد
                      و شما بعنوان کاربر باید آن را قبول کنید. این یک متن تستی
                      می‌باشد و شما بعنوان کاربر باید آن را قبول کنید. این یک
                      متن تستی می‌باشد و شما بعنوان کاربر باید آن را قبول کنید.
                      این یک متن تستی می‌باشد و شما بعنوان کاربر باید آن را قبول
                      کنید. این یک متن تستی می‌باشد و شما بعنوان کاربر باید آن
                      را قبول کنید.
                    </span>
                    <button
                      onClick={() => {
                        changeAcceptRule();
                        closeModal();
                      }}
                      style={{ backgroundColor: "#7606B2" }}
                      className="w-full rounded-lg py-2 text-gray-200 font-bold"
                    >
                      تمامی شرایط را می‌پذیرم
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
