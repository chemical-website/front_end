import { useParams } from "react-router-dom";

const Product = () => {
    const {id} = useParams()
    console.log(id)
    return ( 
        <div>
            hi mother fucker {id}
        </div>
     );
}
 
export default Product;