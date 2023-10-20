import { useRef, useState } from "react";
import signin from "../../components/main page/signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BaseRoot } from "../../baseRoot";
import axios from "axios";
import { IoExitSharp } from "react-icons/io5";
import { IoExit } from "react-icons/io5";

const Order = ({id , func}) => {
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
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    return ( 
        <div>
        <div className={signin.BackBox}>
          <div className={signin.BigBox}>
          <div className=" self-end" onClick={func}>
          <IoExit />
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
      </div>
     );
}
 
export default Order;