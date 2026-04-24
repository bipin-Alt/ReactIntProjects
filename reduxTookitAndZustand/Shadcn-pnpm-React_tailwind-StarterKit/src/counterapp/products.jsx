import { useEffect } from "react";
import useCounter from "../store/useCounter";

function Products() {
    const fetchData = useCounter(state => state.fetchListOfProducts);
    const productList = useCounter(state=>state.productList);
    console.log(productList);
     useEffect(()=>{
         fetchData();
     },[])
    return ( 
        <>
        <h1>This is a product list component here you can get products.</h1>
          <div>
            
          </div>
        </>
     );
}

export default Products;