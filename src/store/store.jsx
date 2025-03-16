import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice"
import cartSlice from "./reducers/cartSlice"
import categorySlice from "./reducers/categorySlice"
import filtersSlice from "./reducers/filtersSlice"

export const store = configureStore({
    reducer:{
        product: productSlice,
        cart: cartSlice,
        category: categorySlice,
        filters: filtersSlice
        
    }
})