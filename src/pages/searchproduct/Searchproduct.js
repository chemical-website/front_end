import Cart from "../../components/cart/cart";
import ax from "../../assets/img/Photo.png";
import { Fragment, useEffect, useState } from "react";
import NavigationBar from "../../layout/header/NavigationBar";
import axios from "axios";
import { BaseRoot } from "../../baseRoot";
import { Link, useParams } from "react-router-dom";


const SearchProducts = () => {
    const {name} = useParams()
    console.log(name)
  const [prdouctData , setProductData] = useState([])
  const [collections , setCollections] = useState([])
  const config = {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  };
  useEffect(()=>{

    axios.get(`${BaseRoot}store/products/?search=${name}` , config).then(
      function(response){
        setProductData(response.data)
        console.log(response)
      }
    )
  },[name])
  useEffect(()=>{

    axios.get(`${BaseRoot}store/collections/` , config).then(
      function(response){
        setCollections(response.data)
      }
    )
  },[])
    return ( 
      <Fragment>
      <NavigationBar />
              <div className="w-full flex flex-col justify-start items-center">
              <div className="w-5/6
              ">
        <div className="flex flex-row items-center justify-between w-2/3 sm:w-1/3 md:w-1/5 mb-9 mt-14" >
        <div>
        <Link to={"/app"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_272)">
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#0C4957"/>
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#3B0359"/>
  </g>
  <defs>
    <clipPath id="clip0_26_272">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
</Link>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_281)">
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#1892AD"/>
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#7606B2"/>
  </g>
  <defs>
    <clipPath id="clip0_26_281">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div>
        محصولات
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_281)">
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#1892AD"/>
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#7606B2"/>
  </g>
  <defs>
    <clipPath id="clip0_26_281">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div className=" text-xs md:text-lg">
        پیشنهاد ویژه
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_26_281)">
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#1892AD"/>
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#7606B2"/>
  </g>
  <defs>
    <clipPath id="clip0_26_281">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <div>
        {name}
        </div>
        </div>
              </div>
              <div className="w-5/6 flex flex-row justify-between items-center">
                <div className="flex flex-col sm:flex-row  justify-between items-center md:w-1/3 sm:w-1/2 lg:w-1/4 ">
                  <div style={{background:"#F0D6FE" , borderRadius:"2.3rem" , padding:"0rem 0.75rem 0rem 0.375rem" , marginLeft:"0.75rem"}} className="flex flex-row  justify-between items-center mb-8">
                  <div className="text-sm">
                  جستجو: {name}
                  </div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_123_2573)">
                      <path d="M12.6666 4.27334L11.7266 3.33334L7.99992 7.06001L4.27325 3.33334L3.33325 4.27334L7.05992 8.00001L3.33325 11.7267L4.27325 12.6667L7.99992 8.94001L11.7266 12.6667L12.6666 11.7267L8.93992 8.00001L12.6666 4.27334Z" fill="#0C4957"/>
                      <path d="M12.6666 4.27334L11.7266 3.33334L7.99992 7.06001L4.27325 3.33334L3.33325 4.27334L7.05992 8.00001L3.33325 11.7267L4.27325 12.6667L7.99992 8.94001L11.7266 12.6667L12.6666 11.7267L8.93992 8.00001L12.6666 4.27334Z" fill="#3B0359"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_123_2573">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  </div>
                  </div>
                
                </div>
                <div className="flex flex-row justify-between items-center w-1/6">
                  <div>{prdouctData.length}محصول</div>
                  <div style={{border:"1.5px solid #7606B2" , borderRadius:"0.5rem" , padding:"0rem 0.625rem 0rem 0.5rem"}}  className="flex flex-row justify-between items-center">
                    <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_442_1378)">
                            <path d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z" fill="#1892AD"/>
                            <path d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z" fill="#7606B2"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_442_1378">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                    </div>
                    <p className=" text-xs md:text-base">تاریخ انتشار</p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 10L12 15L17 10H7Z" fill="#1892AD"/>
                        <path d="M7 10L12 15L17 10H7Z" fill="#7606B2"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            <div className="w-5/6 flex flex-row justify-between items-start mt-12">
            <div className="grid grid-cols-2 gap-4">
            {
              collections.map(e=>{
                return(
                  <div style={{padding:" 0.1875rem 0.375rem" , background:"#F7EBFE" , borderRadius:"0.25rem"}}>{e.title}</div>
                )
              })
            }
            </div>
            <div className=" grid grid-cols-4 w-4/5">
            {
                prdouctData.map(e=>{
                  console.log(e)
                    return(
                        <Cart x={e} />
                    )
                })
            }
            </div>
            </div>
        </div>
      </Fragment>
     );
}
 
export default SearchProducts;