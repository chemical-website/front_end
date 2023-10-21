import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import navigationBar from "./navigationBar.module.css";
import { dark } from "@mui/material/styles/createPalette";

function TasfiyeBox(props) {
  let s = props.show;
  let data = props.data;
  let id = data.id;
  data = data.products;

  if (s == id) {
    return (
      <>
        <div className={navigationBar.BBox}>
          <div className={navigationBar.SBox}>
            {data.map((e) => {
              return <Link to={`/app/product/${e.id}`}>{e.title}</Link>;
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
