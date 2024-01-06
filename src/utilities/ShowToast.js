import { toast } from "react-toastify";

function ShowToast(msg, type = "s") {
  if (type === "s") {
    toast.success(msg, {
      style: {
        textAlign: "start",
        direction: "rtl",
        fontFamily: "Markazi Text",
        fontSize: "20px",
      },
    });
  }
  else if (type === "e") {
    toast.error(msg, {
      style: {
        textAlign: "start",
        direction: "rtl",
        fontFamily: "Markazi Text",
        fontSize: "20px",
      },
    });
  }
}

export default ShowToast;
