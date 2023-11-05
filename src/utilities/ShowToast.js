import { toast } from "react-toastify";

function ShowToast(msg) {
  toast.success(msg, {
    style: {
      textAlign: "start",
      direction: "rtl",
      fontFamily: "Markazi Text",
      fontSize: "20px",
    },
  });
}

export default ShowToast;
