import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartProduct";

export const store =configureStore({
    reducer:{
        product:productSlice.reducer,
        cart:cartSlice.reducer,
    }
})