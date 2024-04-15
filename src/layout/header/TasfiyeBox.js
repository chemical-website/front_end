import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import navigationBar from "./navigationBar.module.css";

function TasfiyeBox({ show: s, data, id }) {
  if (s === id) {
    return (
      <>
        <div className={navigationBar.SBox}>
          <span className="text-xl font-bold cursor-default">{data.title}</span>
          <div className="flex flex-wrap flex-col w-auto max-h-64 gap-1">
            {data.products &&
              data.products.map((prodData) => {
                return (
                  <div className="flex flex-col">
                    <span
                      key={prodData.title}
                      className="text-base cursor-pointer"
                    >
                      <a className="" href={`/app/product/${prodData.id}`}>
                        {prodData.title}
                      </a>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default TasfiyeBox;
