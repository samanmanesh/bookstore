/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCart, OrderItem } from "@/features/cartSlice";
import { CartItem } from "@/components/cartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(selectCart);
  const { item: orders } = cartState;
  // const [orders, setOrders] = React.useState<OrderItem[]>([]);
  const [quantity, setQuantity] = React.useState(1);

  useEffect(() => {
    // setOrders(cartState.item);
  }, [cartState.item]);

  // const handleOrder = () =>
  //   orders?.map((order) => {
  //     const action = { product: order.product, quantity: order.quantity };
  //     dispatch(addToCart(action));
  //   });

  return (
    <div className="container mx-auto h-full w-full flex space-y-6 flex-col items-center my-36  ">
      {orders?.map((order: any) => (
        <CartItem
          key={order.product.id}
          id={order.product.id}
          image={order.product.image}
          title={order.product.title}
          price={order.product.price}
          quantity={order.quantity}
        />
      ))}
      <div>
        <h3 className="font-semibold text-lg">
          Total: $
          {orders?.reduce(
            (acc: number, order: any) =>
              acc + order.product.price * order.quantity,
            0
          )}
        </h3>
        <h3 className="font-semibold text-lg">Items: {orders?.length}</h3>
      </div>

      <button
        className="bg-sky-600 text-white text-lg  w-32 h-8 rounded-lg"
        // onClick={handleOrder}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
