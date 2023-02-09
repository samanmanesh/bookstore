import { RootState , AppDispatch} from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from '@/api/products';


 export interface OrderItem {
  product : Product;
  quantity : number;
}

export interface CartState {
  item : OrderItem[];
  totalQuantity : number;
  totalPrice : number;
}

const initialState: CartState = {
  item : [],
  totalQuantity : 0,
  totalPrice : 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState : {
    status: 'idle' as 'idle' | 'loading' | 'success' | 'error',
    error: null as string | null,
    data : initialState
  },
  reducers: {
    addToCart : (state, action : PayloadAction<OrderItem> ) => {
      if (action.payload === undefined) {
        state.status = 'error';
        state.error = 'Error in adding to cart';
        return;
      }
      state.data.item.push(action.payload);
      state.data.totalQuantity += 1;
      state.data.totalPrice += action.payload.product.price;
      state.status = 'success';
      state.error = null;
    }
  },
});


export const { addToCart} = cartSlice.actions;


