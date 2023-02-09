import { RootState, AppDispatch } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/api/products";

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  item: OrderItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  item: [],
  totalQuantity: 0,
  totalPrice: 0,
};

type AddToCartAction = {
  id: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    status: "idle" as "idle" | "loading" | "success" | "error",
    error: null as string | null,
    data: initialState,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<OrderItem>) => {
      if (action.payload === undefined) {
        state.status = "error";
        state.error = "Error in adding to cart";
        return;
      }

      //check if the product is already in the cart
      const index = state.data.item.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (index !== -1) {
        state.data.item[index].quantity += action.payload.quantity;
        state.data.totalQuantity += action.payload.quantity;
        state.data.totalPrice +=
          action.payload.product.price * action.payload.quantity;
        state.status = "success";
        state.error = null;
        return;
      } else {
        state.data.item.push(action.payload);
        state.data.totalQuantity += action.payload.quantity;
        state.data.totalPrice +=
          action.payload.product.price * action.payload.quantity;
        state.status = "success";
        state.error = null;
        return;
      }
    },

    //increaseQuantity that just receives the product id and the quantity to add
    increaseQuantity: (state, action: PayloadAction<AddToCartAction>) => {
      if (action.payload === undefined) {
        state.status = "error";
        state.error = "Error in adding to cart";
        return;
      }

      //check if the product is already in the cart
      const index = state.data.item.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (index !== -1) {
        state.data.item[index].quantity += 1;
        state.data.totalQuantity += 1;
        state.data.totalPrice += state.data.item[index].product.price;
        state.status = "success";
        state.error = null;
        return;
      } else {
        state.status = "error";
        state.error = "Error in adding to cart";
        return;
      }
    },
    //decreaseQuantity that just receives the product id and the quantity to remove
    decreaseQuantity: (state, action: PayloadAction<AddToCartAction>) => {
      if (action.payload === undefined) {
        state.status = "error";
        state.error = "Error in removing from cart";
        return;
      }

      //check if the product is already in the cart
      const index = state.data.item.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (index !== -1) {
        if (state.data.item[index].quantity >= 1) {
          state.data.item[index].quantity -= 1;
          state.data.totalQuantity -= 1;
          state.data.totalPrice -= state.data.item[index].product.price;
          state.status = "success";
          state.error = null;
          return;
        } else {
          state.status = "error";
          state.error = "Error in removing from cart";
          return;
        }
      } else {
        state.status = "error";
        state.error = "Error in removing from cart";
        return;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.data;

export default cartSlice.reducer;
