import ToPersianNumber from './ToPersianNumber';

const ClarifyPersianDate = (dateString) => {
  return ToPersianNumber(dateString.replaceAll("-", "/"));
};


export default ClarifyPersianDate;
