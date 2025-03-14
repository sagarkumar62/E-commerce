import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const item = state.cartItems.find((p) => p.id === action.payload.id);
            if (item) {
                    item.quantity += 1;
                } else {
                    state.cartItems.push({ ...action.payload, quantity: 1 });
            } 
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
          },

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;