import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../context';


export const ProductTile = ({product}) => {

    const {produtDetails, cartItems,handleAddToCart} = useContext(GlobalContext);

    const navigate = useNavigate();
   
  return (
    // <div key ={keyValue} className='text-lime-500'>{productTitle}</div>
    <div key = { ProductTile.id} className = "relative group border-cyan-700 p-6 cursor-pointer">
        <div className='overflow-hidden aspect-w-1 aspect-h-1'>
            <img src={product.thumbnail} alt={product.title}
            className='object-cover w-full h-full transition-all duration-300 group-hover:scale-125'/>
        </div>
        <div className="flex items-start justify-between mt-4 space-x-4">
            <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
            <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {product?.title}
            </p>
            </div>
            <div className="text-right">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
                ${product?.price}
            </p>
            </div>
        </div>
        <button onClick={() => navigate(`/product-details/${product.id}`)}
            className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">
        View Details</button>
        <button
                disabled={produtDetails ? cartItems.findIndex((item) => item.id === produtDetails.id) > -1: false}
                onClick={() => handleAddToCart(produtDetails)}
                className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm text-black font-semibold rounded"
              >
                Add to Cart
              </button>
    </div>
  )
}
