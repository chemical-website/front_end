import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import navigationBar from "./navigationBar.module.css";

function TasfiyeBox({ show: s, subsData, id }) {
  if (subsData.length > 0) {
  }

  if (s === id) {
    return (
      <>
        <div className={navigationBar.SBox}>
          {subsData.length > 0 &&
            subsData.map((e) => {
              return (
                <div key={e.title} className="flex flex-col">
                  <span className="text-xl font-bold">{e.title}</span>
                  <div className="flex flex-wrap flex-col w-auto h-60 gap-1 ">
                    {e.products &&
                      e.products.map((prodData) => {
                        return (
                          <div className="flex flex-col">
                            <span key={prodData.title} className="text-base">
                              {prodData.title}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default TasfiyeBox;
