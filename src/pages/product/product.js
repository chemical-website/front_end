import { useParams } from "react-router-dom";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BsDisplay, BsFillShareFill } from "react-icons/bs";

const Product = () => {
    const {id} = useParams()
    console.log(id)
    return ( 
        <div>
        <div className=" flex flex-row items-center justify-between">
            <div className=" w-1/3"></div>
            <div className=" w-1/3">
                <h3>
                اسم کامل محصول
                </h3>
                <p>
                زیرتوضیحات تک‌خطی
                </p>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <div></div>
            </div>
            <div className=" w-1/3">
            <div style={{background:"#F7EBFE" , width:"60%"  , borderRadius:"0.5rem" , paddingInline:"1.4rem" , paddingBlock:"1.2rem" , marginBottom:"2rem"}}>
                <div className="flex flex-row items-center justify-between">
                    <div  className="flex flex-row items-center justify-between  w-1/2">
                    <div><RiFullscreenLine/></div>
                    <div><AiOutlineHeart/></div>
                    <div><BsFillShareFill/></div>
                    </div>
                    <div>
                        موجود
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div >
                        <p>تماس بگیرید</p>
                        <p>+۹۸۹۱۰۱۲۳۴۵۶</p>
                    </div>
                    <div>
                    <IoMdCall/>
                    </div>
                </div>
            </div>
            <div style={{width:"60%"}}>
                <button style={{background:"#8806CE" , color:"#FFFFFF" , textAlign:"center" , width:"100%" , borderRadius:"0.5rem" , paddingBlock:"0.6rem"}}>ثبت درخواست</button>
            </div>
            </div>
        </div>
        <div style={{width:"90%" , height:"0" , border:" 2px solid #F5F5F5"}}></div>
        <div>
            <div className="flex flex-row items-center justify-between  w-1/5">
                <div>
                توضیحات
                </div>
                <div></div>
                <div>
                مشخصات
                </div>
                <div>
                </div>
                <div>
                نظرات
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Product;