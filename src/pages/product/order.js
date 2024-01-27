import { useRef, useState } from "react";
import signin from "../../components/main page/signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BaseRoot } from "../../baseRoot";
import axios from "axios";
import closeIcon from "../../assets/Icons/Close.svg"
import ShowToast from "../../utilities/ShowToast";


const Order = ({id , func, closeDialog}) => {
    const [open, setOpen] =useState(false);
    const navigate = useNavigate();
    let [tabs, settabs] = useState(0);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const  phone = useRef()
    const  email = useRef()
    const  text = useRef()
    const sabText = async function(){ 
        axios.post(`${BaseRoot}store/products/${id}/orders/`, {
          "phone": phone.current.value,
          "description": text.current.value , 
          "email": email.current.value
    
        })
        .then(function (response) {
          navigate(`/app/product/${id}`)
          ShowToast("سفارش شما با موفقت ثبت شد")
          closeDialog()
        })
        .catch(function (error) {
          console.log(error);
          ShowToast("مشکلی در ثبت سفارش شما پیش آمده", "e")
          closeDialog()

        });
      }
    return ( 
        <div>
          <div style={{marginTop:"0"}} className={signin.BigBox}>
          <div className=" self-end" onClick={func}>
          <img alt=""  src={closeIcon} />
          </div>
            <div className={signin.TopButton}>

              <p
                className={signin.entekhab}
              >
                ثبت درخواست
              </p>
            
            </div>
  
              <div className={signin.intabs}>
                <div className={signin.InputPart}>
                  <input
                    className={signin.EmailVorod}
                    type="text"
                    placeholder="شماره تلفن"
                    ref={phone}
                  />
  
                  <input
                    className={signin.PassVorod}
                    type="email"
                    placeholder="ایمیل "
                    ref={email}
                  />
                
                <input
                    className={signin.PassVorod}
                    type="text"
                    placeholder="درخواست"
                    ref={text}
                  />
       <button onClick={sabText} className={signin.VorodButt}>ارسال</button> 
              </div>
      
          </div>
        </div>
      </div>
     );
}
 
export default Order;