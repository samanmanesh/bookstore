/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCart, OrderItem } from "@/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(selectCart);
  const [orders, setOrders] = React.useState<OrderItem[]>([]);
  const [quantity, setQuantity] = React.useState(1);
  console.log("cartState", cartState);
  useEffect(() => {
    setOrders(cartState.item);
  }, [cartState.item]);

  return (
    <div className="container mx-auto h-full w-full flex space-y-6 flex-col">
      {orders?.map((order: any) => (
        <div key={order.id} className="flex w-full justify-between">
          <div
          className="flex flex-col place-items-center justify-center  rounded-lg h-32 w-32 
          bg-gray-100 shadow-lg  
           "
        >
            <img src={order.product.image} alt={order.product.title} className="h-full w-full object-cover object-top rounded-lg " />
          </div>
          <div className="flex flex-col ">
            <span className='font-semibold text-lg'>Title</span>
            <span>{order.product.title}</span>
          </div>
          <div className="flex flex-col">
            <div>
              <span>Price: </span>
              <span>${order.product.price}</span>
            </div>
            <div>
              <span>Quantity: </span>
              <button
                className="bg-gray-600 text-white text-lg  w-8 h-8 rounded-lg "
                onClick={() =>
                  order.quantity < 10 && setQuantity((prev) => prev + 1)
                }
              >
                +
              </button>
              <span>{order.quantity}</span>
              <button
                className="bg-gray-600 text-white text-lg  w-8 h-8 rounded-lg"
                onClick={() =>
                  order.quantity >= 1 && setQuantity((prev) => prev - 1)
                }
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
