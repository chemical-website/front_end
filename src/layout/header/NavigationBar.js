import { Link, useNavigate } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { BiImage } from "react-icons/bi";
import navigationBar from "./navigationBar.module.css";
import TasfiyeBox from "./TasfiyeBox";
import PolimeriBox from "./PolimeriBox";
import ShimiyaiBox from "./ShimiyaiBox";
import { BiSolidUserCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

function NavigationBar() {
  const [login , setLogin] = useState(false)
  const navigate = useNavigate();
let [opennav,setopennav] = useState(0)
let [s,sets] = useState(0)

    function openmahsol() {
      setopennav(1) 
    }
    function TasfiyeAbshow() {
      sets(3) 
    }
    function Polimershow() {
      sets(2) 
    }
    function Shimiyaishow() {
      sets(1) 
    }
    



    function closeemahsol() {
      setopennav(0) 
    }
    function TasfiyeAboff() {
      sets(0) 
    }
    function Polimeroff() {
      sets(0) 
    }
    function Shimiyaioff() {
      sets(0) 
    }

    useEffect(()=>{
      if (localStorage.getItem("token") != ""){
        setLogin(true)
      }
      else{
        console.log("g")
      }
    })
    
  return (
    <>
      <header className={navigationBar.Header}>

                                                                        {/* EMSE SHERKAT START */}

        <div className={navigationBar.topologo}>
          {/* <img /> */}
          <i>
            <BiImage />
          </i>
          <h1>esme sherkat</h1>
        </div>

                                                                        {/* EMSE SHERKAT END */}
                                                                        {/* MENU START */}


        <div className={navigationBar.Menubox}>
          <Link className={navigationBar.ItemsMenubox} onMouseEnter={openmahsol} onMouseLeave={closeemahsol} to="/"><b> محصولات </b> </Link>
         
          <Link className={navigationBar.ItemsMenubox} to="/"><b> درباره ما </b></Link>
          <Link className={navigationBar.ItemsMenubox} to="/"><b> اخبار </b></Link>
        </div>

                                                                        {/* MENU END */}
                                                                        {/* SEARCH START */}


        <div className={navigationBar.searchBox}>
          <input
            className={navigationBar.input}
            placeholder=" جست و جوی محصولات , اخبار و..."
          />
          <i className={navigationBar.IconSearch1}>
            <VscSettings />
          </i>
          <i className={navigationBar.IconSearch2}>
            <BiSearch />
          </i>
        </div>

                                                                        {/* SEARCH END */}
                                                                        {/* SABTNAM START */}


        <div style={{display: !login ? "block"  :"none"}} className={navigationBar.Sabtnam}>
          <Link className={navigationBar.vorodicon}>
            <BiSolidUserCircle />
          </Link>
          <Link to="/s" className={navigationBar.te}> <b> ثبت نام </b></Link>
          
          <Link to="/s"><b>ورود</b> </Link>
  
        </div>
        <div style={{display: !login ? "none"  :"block"}} className={navigationBar.Sabtnam}>
          <Link onClick={()=>{
            localStorage.setItem("token" , "")
            navigate("/")
            setLogin(false)
          }}><b>خروج</b></Link>
        </div>


                                                                        {/* SABTNAM END */}
                                                                        {/* HOVER MUEU START */}


         
        <div onMouseEnter={openmahsol} onMouseLeave={closeemahsol} className={opennav==1 ? navigationBar.openmahsolat : navigationBar.DisplayNone }>
            <div className={navigationBar.RightBox}>
              <h2 onMouseEnter={Shimiyaishow}  onMouseLeave={Shimiyaioff}><button >مواد شیمیایی</button> <i className={s==1 ? navigationBar.LeftIcon : navigationBar.DisplayNone }><AiOutlineLeft/></i> </h2>
              <h2 onMouseEnter={Polimershow}  onMouseLeave={Polimeroff}><button >مواد پلیمر</button> <i className={s==2 ? navigationBar.LeftIcon : navigationBar.DisplayNone }><AiOutlineLeft/></i> </h2>
              <h2 onMouseEnter={TasfiyeAbshow}  onMouseLeave={TasfiyeAboff}><button >مواد تصفیه آب</button> <i className={s==3 ? navigationBar.LeftIcon : navigationBar.DisplayNone } ><AiOutlineLeft/></i> </h2>
            </div>
            <div className={ navigationBar.LeftBox}>
             <div   onMouseEnter={Shimiyaishow}  onMouseLeave={Shimiyaioff} ><ShimiyaiBox show={s} /></div> 
              <div  onMouseEnter={Polimershow}  onMouseLeave={Polimeroff}><PolimeriBox show={s}  /></div>
              <div  onMouseEnter={TasfiyeAbshow}  onMouseLeave={TasfiyeAboff}><TasfiyeBox show={s}/></div>
            </div>
          </div>

                                                                        {/* HOVER MUEU END */}



      </header>
    </>
  );
}
export default NavigationBar;
