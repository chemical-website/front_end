import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import navigationBar from "./navigationBar.module.css";
import { dark } from "@mui/material/styles/createPalette";

function TasfiyeBox(props) {
  let s = props.show;
  let data = props.data;
  let id = data.id;
  let subData = props.subsData;
  data = data.products;

  if (s == id) {
    return (
      <>
        <div className={navigationBar.SBox}>
          {subData.map((e) => {
            return (
              <div className="flex flex-col">
                <span className="text-xl font-bold">{e.title}</span>
                <div>
                  {e.products.map((prodData) => {
                    return <span className="text-base">{prodData.title}</span>;
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
