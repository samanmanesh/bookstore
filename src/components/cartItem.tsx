/* eslint-disable @next/next/no-img-element */
import React,{useState, useEffect} from 'react'

export const CartItem = ({image, title, price, quantity} : {image: string, title: string, price: number, quantity: number } ) => {
 

  return (
    <div
          className="flex max-w-6xl justify-between shadow p-3 rounded-xl border space-x-10 items-center "
        >
          <div
            className="flex flex-col place-items-center justify-center  rounded-lg h-32 w-32 
          bg-gray-100 shadow-lg  
           "
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top rounded-lg "
            />
          </div>
          <div className="flex flex-col h-32 space-y-4">
            <span className="font-semibold text-lg">Title</span>
            <span>{title}</span>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="text-lg">
              <span >Price: </span>
              <span>${price}</span>
            </div>
            <div className="text-lg space-x-3">
              <span >Quantity: </span>
              <button
                className="bg-gray-600 text-white text-lg  w-8 h-8 rounded-lg "
                // onClick={() =>
                //   stateQuantity < 10 && setQuantity((prev) => prev + 1)
                // }
              >
                +
              </button>
              <span >{quantity}</span>
              <button
                className="bg-gray-600 text-white text-lg  w-8 h-8 rounded-lg"
                // onClick={() =>
                //   stateQuantity >= 1 && setQuantity((prev) => prev - 1)
                // }
              >
                -
              </button>
            </div>
          </div>
        </div>
  )
}
