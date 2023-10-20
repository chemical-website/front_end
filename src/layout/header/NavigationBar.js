import { Link, useNavigate } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { BiImage } from "react-icons/bi";
import navigationBar from "./navigationBar.module.css";
import TasfiyeBox from "./TasfiyeBox";
import PolimeriBox from "./PolimeriBox";
import ShimiyaiBox from "./ShimiyaiBox";
import { BiSolidUserCircle } from "react-icons/bi";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";

function NavigationBar() {
  const [login , setLogin] = useState(false)
  const navigate = useNavigate();
let [opennav,setopennav] = useState(0)
const [productNav , setProductNav] = useState([])
let [s,sets] = useState(0)
const [inputRef , setInputRef] = useState() 
    function openmahsol() {
      setopennav(1) 
    }
    function TasfiyeAbshow(num) {
      sets(num)
    }
    



    function closeemahsol() {
      setopennav(0) 
    }
    function TasfiyeAboff() {
      sets(0) 
    }

    useEffect(()=>{
      if (localStorage.getItem("token") != ""){
        setLogin(true)
      }
      else{
       setLogin(false)
      }
    })
    useEffect(()=>{
      axios.get(`${BaseRoot}store/collections/` ).then(
        function(response){
          setProductNav(response.data)
          console.log(response.data)
        }
      )
    } , [openmahsol])
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
          <Link className={navigationBar.ItemsMenubox} onMouseEnter={openmahsol} onMouseLeave={closeemahsol} to="/app/products"><b> محصولات </b> </Link>
         
          <Link className={navigationBar.ItemsMenubox} to="/app/"><b> درباره ما </b></Link>
          <Link className={navigationBar.ItemsMenubox} to="/app/news"><b> اخبار </b></Link>
        </div>

                                                                        {/* MENU END */}
                                                                        {/* SEARCH START */}


        <div className={navigationBar.searchBox}>
          <input
            className={navigationBar.input}
            placeholder=" جست و جوی محصولات  ..."
            onChange={(e)=>{
              setInputRef(e.target.value)
            }}
          />
          <i className={navigationBar.IconSearch1}>
            <VscSettings />
          </i>
          <i className={navigationBar.IconSearch2}>
          {console.log(inputRef)}
         <Link to={`/app/products/search/${inputRef}`} >
         <BiSearch />
         </Link>
          </i>
        </div>

                                                                        {/* SEARCH END */}
                                                                        {/* SABTNAM START */}


        <div style={{display: !login ? "flex"  :"none"}} className={navigationBar.Sabtnam}>
          <Link className={navigationBar.vorodicon}>
            <BiSolidUserCircle />
          </Link>
          <Link to="/app/s" className={navigationBar.te}> <b> ثبت نام </b></Link>
          
          <Link to="/app/s"><b>ورود</b> </Link>
  
        </div>
        <div style={{display: !login ? "none"  :"flex"}} className={navigationBar.Sabtnam}>
          <Link onClick={()=>{
            localStorage.setItem("token" , "")
            navigate("/app/")
            setLogin(false)
          }}><b>خروج</b></Link>
        </div>


                                                                        {/* SABTNAM END */}
                                                                        {/* HOVER MUEU START */}


         
        <div onMouseEnter={openmahsol} onMouseLeave={closeemahsol} className={opennav==1 ? navigationBar.openmahsolat : navigationBar.DisplayNone }>
            <div className={navigationBar.RightBox}>
            {
                productNav.map(e=> {
                  console.log(e.id)
                  return(
                    <div>
                    <h2 onMouseEnter={()=>{TasfiyeAbshow(e.id)}}  onMouseLeave={TasfiyeAboff}><Link to={`/app/collections/search/${e.title}`}><button >{e.title}</button> </Link> </h2>
                    </div>
                   
              
                  )
                })
            }
            </div>
            <div className={ navigationBar.LeftBox}>
            {
              productNav.map(e=> {
                  return(
                  
                    <div onMouseEnter={()=>{TasfiyeAbshow(e.id)}} onMouseLeave={TasfiyeAboff} ><TasfiyeBox data={e} show={s}/></div>
                  )
                })
            }
           
            </div>
          </div>

                                                                        {/* HOVER MUEU END */}



      </header>
    </>
  );
}
export default NavigationBar;
