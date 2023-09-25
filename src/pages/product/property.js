
const PropertyField = ()=> {
    return(
        <div className="flex flex-row justify-between items-center  w-72">
            <div>نام علمی</div>
            <div style={{borderBottom:"#D184FB  0.1rem solid"}}>
                <p>
                لورم اپیسوم یه چیزی میزی
                </p>
            </div>
        </div>
    )

}

const Property = () => {
    return ( 
        <div className=" grid grid-cols-2  gap-x-64">
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