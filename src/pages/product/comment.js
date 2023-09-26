const CommentCard = () => {
    return(
        <div style={{width:"28rem"}} className=" h-28 mb-3">
        <div>
            <p style={{color:"#3B0359"}} className=" font-semibold text-lg">عتید خدایی</p>
            <div className=" flex flex-row justify-between items-center  w-3/4">
                <p style={{color:"#8806CE"}} className=" font-normal text-base">atidkhodaie@yechi.com</p>
                <p style={{color:"#D184FB"}} className=" font-normal text-base">۱۳:۳۵</p>
                <p style={{color:"#D184FB"}} className=" font-normal text-base">۱۴۰۲/۱۰/۱۰</p>
            </div>
        </div>
        <div style={{color:"#3B0359"}} className=" font-normal text-lg">
        لورم ایپسوم و اینا و آره و اینا خیلی بودیم. متن ساختگیمونم بود. عالیه.
        </div>

        </div>
    )
}


const Comment = () => {
    return ( 
        <div className="mt-9">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col justify-between items-start  w-72">
                    <input style={{background:"#F7EBFE" ,borderRadius:"0.5rem" , marginBottom:"1rem" , padding:" 0rem 0.625rem" , width:"100%" , height:"3rem"}} placeholder="ایمیل">
                    
                    </input>
                    <input style={{background:"#F7EBFE" ,borderRadius:"0.5rem" , padding:" 0rem 0.625rem" , width:"100%",  height:"3rem"}} placeholder="نام و نام‌خانوادگی">
                    
                    </input>
                </div>
                <div className="flex flex-row justify-center items-center">
                <textarea style={{background:"#F7EBFE" , marginInline:"1rem" ,borderRadius:"0.5rem" , padding:" 0rem 0.625rem" , width:"41rem" , height:"6rem"}} placeholder="ثبت نظر">
                </textarea>
                </div>
                <div className="flex flex-col justify-between items-start  w-40"> 
                    <div className="flex flex-row justify-between items-center w-full">
                        <input type="checkbox" />
                        <p>اطلاعات‌ من را نمایش بده</p>
                    </div>
                    <button style={{background:"#8806CE" , color:"#FFFFFF" , textAlign:"center" , width:"100%" , borderRadius:"0.5rem" , paddingBlock:"0.6rem"}}>ثبت نظر</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-60 mt-12">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            </div>
        </div>
     );
}
 
export default Comment;