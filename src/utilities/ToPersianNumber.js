const ToPersianNumber = (str) => {
  str = str.toString();
  let persianized = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "0":
        persianized += "۰";
        break;
      case "1":
        persianized += "۱";
        break;
      case "2":
        persianized += "۲";
        break;
      case "3":
        persianized += "۳";
        break;
      case "4":
        persianized += "۴";
        break;
      case "5":
        persianized += "۵";
        break;
      case "6":
        persianized += "۶";
        break;
      case "7":
        persianized += "۷";
        break;
      case "8":
        persianized += "۸";
        break;
      case "9":
        persianized += "۹";
        break;
      default:
        persianized += str[i];
        break;
    }
  }
  return persianized;
};
export default ToPersianNumber;
