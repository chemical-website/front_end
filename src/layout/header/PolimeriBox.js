import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import navigationBar from "./navigationBar.module.css";

function PolimeriBox(props) {
  let s = props.show;

  if (s == 2) {
    return (
      <>
        <div className={navigationBar.leftOpen}>
          <h5>
            همه ی مواد پلیمری
            <i>
              <AiOutlineLeft />
            </i>
          </h5>

          <div className={navigationBar.BBox}>
            <div className={navigationBar.SBox}>
              <h4>محصولات</h4>
              <Link>رندوم‌جات</Link>
              <Link>مواد دیگر</Link>
              <Link>مواد پلیمری</Link>
              <Link>مواد شیمیایی</Link>
            </div>
            <div className={navigationBar.SBox}>
              <h4>محصولات</h4>
              <Link>رندوم‌جات</Link>
              <Link>مواد دیگر</Link>
              <Link>مواد پلیمری</Link>
              <Link>مواد شیمیایی</Link>
              <Link>مواد شیمیایی</Link>
            </div>
            <div className={navigationBar.SBox}>
              <h4>محصولات</h4>
              <Link>رندوم‌جات</Link>
              <Link>مواد دیگر</Link>
              <Link>مواد پلیمری</Link>
              <Link>مواد شیمیایی</Link>
              <Link>مواد شیمیایی</Link>
              <Link>مواد شیمیایی</Link>
              <Link>مواد شیمیایی</Link>
            </div>
            <div className={navigationBar.SBox}>
              <h4>محصولات</h4>
              <Link>مواد شیمیایی</Link>
              <Link>مواد شیمیایی</Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default PolimeriBox;