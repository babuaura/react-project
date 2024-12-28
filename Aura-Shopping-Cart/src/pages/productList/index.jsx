import React, { useContext } from 'react'
import { GlobalContext } from '../../context';
import { ProductTile } from '../../components/product-tile';

export const ProductList = () => {

    const {listOfProducts, isLoading} = useContext(GlobalContext);

    if(isLoading) return <h1>Loading Products ! Please wait ....</h1>

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className = "max-w-md mx-auto text-center">
                <h2 className = "text-3xl font-extralight text-gray-950 sm:text-4xl">Some Feature products</h2>
            </div>
            <div className = "grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                {
                    
                    listOfProducts && listOfProducts?.length > 0 ?
                    listOfProducts.map(product =>{ 
                    console.log(product);
                    <ProductTile product = {product}/>}) : <h2>No Product Found</h2>
                }
            </div>
        </div>
    </section>
  )
}
