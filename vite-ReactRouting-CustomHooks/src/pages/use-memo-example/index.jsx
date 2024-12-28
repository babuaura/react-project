import React, { useMemo, useState } from 'react'
import { UseFetch } from '../../customHooks/use-fetch'

export const UseMemo = () => {

    const {data, loading} = UseFetch('https://dummyjson.com/products');
    const [flag, setFlag] = useState(false);
  
    const filterProductByPrice = (getProducts) =>{
        console.log("getProducts",getProducts);
  
        return getProducts.filter(product => product.price> 10);        
    }

    const memoProducts = useMemo(() => data?.products?.length > 0 && filterProductByPrice(data?.products), [data?.products]);
    // console.log(memoProducts);
    if(loading) return <h1>Products loading, Please wait...</h1>
    
  return (
    <div>
        <h2 style = {{color : flag ? "red" : "blue"}}>UseMemo</h2>
        <button onClick = {() => {setFlag(!flag)}}>Toggle Flag</button>
        <ul style= {{listStyle : "none"}}>
            {
                memoProducts?.length > 0 && memoProducts.map(product => <li>{product.title}</li>)
                // data?.products?.length > 0 && filterProductByPrice(data?.products).map(product => <li>{product.title}</li>)
            }
        </ul>
    </div>
  )
}
