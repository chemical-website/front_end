const CommentCard = () => {
    return(
        <div className=" w-96 h-28">
        <div>
            <p>عتید خدایی</p>
            <div className=" flex flex-row justify-between items-center  w-3/4">
                <p>atidkhodaie@yechi.com</p>
                <p>۱۳:۳۵</p>
                <p>۱۴۰۲/۱۰/۱۰</p>
            </div>
        </div>
        <div>
        لورم ایپسوم و اینا و آره و اینا خیلی بودیم. متن ساختگیمونم بود. عالیه.
        </div>

        </div>
    )
}


const Comment = () => {
    return ( 
        <div>
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
            <div className="grid grid-cols-2 gap-x-60">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            </div>
        </div>
     );
}
 
export default Comment;