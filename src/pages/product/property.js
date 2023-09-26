
const PropertyField = ()=> {
    return(
        <div className="flex flex-row justify-between items-start  w-72">
            <div style={{color:"#8806CE"}} className=" font-semibold text-xl">نام علمی</div>
            <div style={{borderBottom:"#D184FB  0.1rem solid"}}>
                <p style={{color:"#3B0359"}}  className=" font-semibold text-xl mb-3">
                لورم اپیسوم یه چیزی میزی
                </p>
            </div>
        </div>
    )

}

const Property = () => {
    return ( 
        <div className=" grid grid-cols-2  gap-x-80 mt-9">
        <PropertyField />
        <PropertyField />

        <PropertyField />
        <PropertyField />
        <PropertyField />
        <PropertyField />
        <PropertyField />

        </div>
     );
}
 
export default Property;