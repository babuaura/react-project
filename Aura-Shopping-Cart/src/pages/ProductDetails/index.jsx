import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { GlobalContext } from '../../context';
import { useNavigate } from "react-router-dom";


export const ProductDetails = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const {produtDetails, setProductDetails, isLoading, setIsLoading,  cartItems, setCartItems, handleAddToCart} = useContext(GlobalContext)

    const FetchProductDetails = async() =>{

        try{
            setIsLoading(true);
            const response = await fetch(`https://dummyjson.com/products/${id}`)

            if(!response.ok) throw new Error("Cannot Fetch Single Product");

            const result = await response.json();

            if(result){
                setProductDetails(result);
                setIsLoading(false);
            }    
        }catch(e){
            console.log(e);            
        }
    };

    useEffect(()=>{
        FetchProductDetails();
    }, [id])

    if(isLoading) return <h1> Product is Loading!, Please wait.....</h1>

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={produtDetails?.thumbnail}
                alt={produtDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {produtDetails?.images?.length
                ? produtDetails?.images.map((imageItem) => (
                    <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                      <img
                        src={imageItem}
                        className="w-24 cursor-pointer"
                        alt="Product secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {produtDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${produtDetails?.price}</p>
            </div>
            <div>
              <button
                disabled={produtDetails ? cartItems.findIndex((item) => item.id === produtDetails.id) > -1: false}
                onClick={() => handleAddToCart(produtDetails)}
                className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
