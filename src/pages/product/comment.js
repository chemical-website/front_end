import axios from "axios";
import { useEffect, useState } from "react";
import { BaseRoot } from "../../baseRoot";


const CommentCard = ({e}) => {
    return(
        <div style={{width:"28rem"}} className=" h-28 mb-3">
        <div>
            <p style={{color:"#3B0359"}} className=" font-semibold text-lg">{e.name}</p>
            <div className=" flex flex-row justify-between items-center  w-3/4">
                <p style={{color:"#8806CE"}} className=" font-normal text-base">{e.email}</p>
                <p style={{color:"#D184FB"}} className=" font-normal text-base">{
                    `${new Date(e.creation_date).getHours()} :  ${new Date(e.creation_date).getMinutes()} `
                }</p>
                <p style={{color:"#D184FB"}} className=" font-normal text-base">{
                   
                   `${new Date(e.creation_date).getFullYear()} - ${new Date(e.creation_date).getMonth()} - ${new Date(e.creation_date).getDate()}`
                }</p>
            </div>
        </div>
        <div style={{color:"#3B0359"}} className=" font-normal text-lg">
        {e.content}
             </div>

        </div>
    )
}


const Comment = ({ id}) => {
    const [newComment , setNewComment] = useState()
    const [ comment , setComment] = useState([])
    const config = {
        headers:{
          Authorization: localStorage.getItem("token")
        }
      };
    
    const [info , setInfo] = useState()
    const [email , setEmail] = useState()
    const senComment = () => {
        axios.post(`${BaseRoot}/store/products/${id}/reviews/` , {
            "name" : info,
            "content" : newComment,
            "email" : email
        })
        axios.get(`${BaseRoot}store/products/${id}/reviews/` , config).then(
            function(response){
              setComment(response.data)
              // console.log(response.data.properties)
            }
          )
        setNewComment("")
        setEmail("")
        setInfo("")
    }
    useEffect(()=>{
  
            axios.get(`${BaseRoot}store/products/${id}/reviews/` , config).then(
              function(response){
                setComment(response.data)
                // console.log(response.data.properties)
              }
            )
    } , [])
    return ( 
        <div className="mt-9 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex flex-col justify-between items-start  w-72">
                <input onChange={(e)=>{setNewComment(e.target.value)}} style={{background:"#F7EBFE" ,borderRadius:"0.5rem" , padding:" 0rem 0.625rem" , width:"100%",  height:"3rem"}} placeholder="نام و نام‌خانوادگی">
                    
                    </input>
                    <input onChange={(e)=>{setEmail(e.target.value)}}  style={{background:"#F7EBFE" ,borderRadius:"0.5rem" , marginTop:"1rem" , padding:" 0rem 0.625rem" , width:"100%" , height:"3rem"}} placeholder="ایمیل">
                    
                    </input>
                   
                </div>
                <div className="flex flex-row justify-center items-center md:w-2/3 w-72">
                <textarea  onChange={(e)=> {setInfo(e.target.value)}} className=" w-full mt-4 md:mt-0 md:mx-4" style={{background:"#F7EBFE"  ,borderRadius:"0.5rem" , padding:" 0rem 0.625rem"  , height:"6rem"}} placeholder="ثبت نظر">
                </textarea>
                </div>
                <div className="flex flex-col justify-between items-start  w-40"> 
                    {/* <div className="flex flex-row justify-between items-center w-full">
                        <input type="checkbox" />
                        <p>اطلاعات‌ من را نمایش بده</p>
                    </div> */}
                    <button onClick={senComment} style={{background:"#8806CE" , color:"#FFFFFF" , textAlign:"center" , width:"100%" , borderRadius:"0.5rem" , paddingBlock:"0.6rem"}}>ثبت نظر</button>
                </div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-60 mt-12">
                {
                    comment.map((e) =>{
                        return(
                            <CommentCard e={e}  />
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Comment;