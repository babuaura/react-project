import React, { useContext } from 'react'
import { GlobalContext } from '../../context';

export const CartTile = ({cartItem}) => {

  const { handleRemoveFromCart, handleAddToCart } = useContext(GlobalContext)
  
  return (
    <>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={cartItem?.thumbnail}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {cartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(cartItem, true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${cartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 font-bolf text-[16px]">
            Quantity: {cartItem?.quantity}
          </p>
          <div className="mt-3">
            <button
              onClick={() => handleRemoveFromCart(cartItem, false)}
              className="disabled:opacity-65 border border-[#000]"
              disabled={cartItem?.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(cartItem)}
              className="border border-[#000]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </>
  );
}
