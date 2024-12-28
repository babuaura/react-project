import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null);

export const GlobalStateProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [produtDetails, setProductDetails] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const fetchListOfProducts = async () =>{
        setIsLoading(true);
        try{
            const response = await fetch('https://dummyjson.com/products');
           
            if(!response.ok) throw new Error("Cannot Get Data from Source");

            const result = await response.json();

            if(result && result?.products){
                setListOfProducts(result?.products)
                setIsLoading(false);
            }  
        }catch(e){
            console.log(e); 
            setIsLoading(false);
        }
    };

    const handleAddToCart = (getProductDetails) => {

        const CopyOfProductList = [...cartItems];

        const findCurrentProductExistInCart = CopyOfProductList.findIndex(cartProduct => cartProduct.id === getProductDetails.id);

        if(findCurrentProductExistInCart === -1){
            CopyOfProductList.push({
                ...getProductDetails,
                quantity : 1,
                totalPrice : getProductDetails?.price
            });
        }else{
            CopyOfProductList[findCurrentProductExistInCart] = {
                ...CopyOfProductList[findCurrentProductExistInCart],
                quantity : CopyOfProductList[findCurrentProductExistInCart].quantity +1,
                totalPrice : (CopyOfProductList[findCurrentProductExistInCart].quantity +1) * CopyOfProductList[findCurrentProductExistInCart].price
            }
        }

        console.log(CopyOfProductList);
        setCartItems(CopyOfProductList);
        localStorage.setItem("cartItems", JSON.stringify(CopyOfProductList));
        navigate('/cart-list');
    }

    const handleRemoveFromCart = (getProductDetails, isFullyRemoveFromCart) => {

        const CopyOfProductList = [...cartItems];

        const findCurrentProductExistInCart = CopyOfProductList.findIndex(cartProduct => cartProduct.id === getProductDetails.id);

        if(isFullyRemoveFromCart && findCurrentProductExistInCart > -1){
            CopyOfProductList.splice(findCurrentProductExistInCart, 1)
        }else{
            CopyOfProductList[findCurrentProductExistInCart] = {
                ...CopyOfProductList[findCurrentProductExistInCart],
                quantity : CopyOfProductList[findCurrentProductExistInCart].quantity -1,
                totalPrice : (CopyOfProductList[findCurrentProductExistInCart].quantity -1) * CopyOfProductList[findCurrentProductExistInCart].price
            }
        }

        setCartItems(CopyOfProductList);
        localStorage.setItem("cartItems", JSON.stringify(CopyOfProductList));
    }

    useEffect(()=>{
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || []);
    },[])

    return (
        <GlobalContext.Provider value = {
            {
                listOfProducts, 
                isLoading,
                setIsLoading, 
                produtDetails, 
                setProductDetails, 
                cartItems, 
                setCartItems, 
                handleAddToCart,
                handleRemoveFromCart
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
