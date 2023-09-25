import Cart from "../../components/cart/cart";
import ax from "../../assets/img/Photo.png";

let  MahsolatList =[
    {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
  {image: ax ,
    titr: "سرتیتر اسم",
    tozihat: "یه سری متن ",
    tamas :"تماس بگیرید",
    moshahede:"مشاهده کنید"
  },
 
 
  ]


const Products = () => {
    return ( 
        <div>
            
            <div className=" grid grid-cols-4 w-2/3">
            {
                MahsolatList.map(e=>{
                    return(
                        <Cart x={e} />
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default Products;