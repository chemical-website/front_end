
const PropertyField = ({ke , value})=> {
    return(
        <div className="flex flex-row justify-between items-start  w-72">
            <div style={{color:"#8806CE"}} className=" font-semibold text-xl">{ke}</div>
            <div style={{borderBottom:"#D184FB  0.1rem solid"}}>
                <p style={{color:"#3B0359"}}  className=" font-semibold text-xl mb-3">
                {value}                </p>
            </div>
        </div>
    )

}

const Property = ({prop}) => {
    const dictionaryArray = Object.entries(prop);
    return ( 
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2  gap-x-80 mt-9">
        {
            dictionaryArray.map(([key, value]) => {
                return(
                    <PropertyField key={key} ke={key} value={value} />
            
                )
        })
        }

        </div>
     );
}
 
export default Property;