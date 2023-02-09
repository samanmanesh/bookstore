import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    cart: cartReducer,
  }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself