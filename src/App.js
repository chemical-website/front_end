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
import { useEffect } from 'react';

function Error404() {
  return (
    <div>
      <h3>nothing is here</h3>
    </div>
  );
}

function App() {
  const { isModalOpen, modalData, closeModal } = useModal();
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen])

  return (
    <>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="app/" element={<LandingPage />} />
        <Route path="app/products" element={<Products />} />
        <Route path="app/products/search/:name" element={<SearchProducts />} />
        <Route path="app/news/:id" element={<NewPage />} />
        <Route path="app/product/:id" element={<Product />} />
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
      {isModalOpen && (
        <div
          className="w-screen h-screen fixed left-0 top-0 right-0 m-auto overflow-auto z-40 shadow-md myBackdrop"
          onClick={() => {
            closeModal();
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
                  : { height: height - 100 , width: width - 50 }
              }
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="flex flex-col lg:flex-row">
                <div
                  className="w-1/2 max-lg:w-full relative"
                  style={{ height: height / 2 }}
                >
                  <div className="flex flex-col h-full justify-center">
                    <PicSlider images={modalData.images} />
                  </div>
                </div>
                <div className="w-1/2 max-lg:w-full overflow-auto flex flex-col justify-center items-start text-justify">
                  <div className="flex flex-col gap-1 p-5 h-fit">
                    <span className="text-2xl font-bold">
                      {modalData.title}
                    </span>
                    <span className="text-lg">
                      {modalData.short_description}
                    </span>
                    <span className="mt-4">
                      {modalData.description.length > 160
                        ? modalData.description.substring(0, 160) +
                          " [برای ادامه کلیک کنید]"
                        : modalData.description}
                    </span>
                    <div className="flex flex-row gap-2">
                      {modalData.tags.map((e) => {
                        return (
                          <div
                            style={{ borderColor: "#7606B2", color: "#7606B2" }}
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
              <div
                className="absolute top-5 left-5 cursor-pointer"
                onClick={() => {
                  closeModal();
                }}
              >
                <RxCross2 size={25} />
              </div>
              <div
                className="w-fit flex flex-row justify-center items-center p-5 absolute -left-7 -bottom-7 cursor-pointer"
                style={{ backgroundColor: "#3B0359", borderRadius: "50%" }}
              >
                <Link
                  to={`/app/product/${modalData.id}`}
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <img src={SeeMoreIcon} alt="seeMore" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
