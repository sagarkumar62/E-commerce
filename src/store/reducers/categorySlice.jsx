import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    data:[],
    
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        addcategory: (state,action)=>{
            state.data = action.payload
        },
        
    }
})

export default categorySlice.reducer
export const {addcategory, addcategorydata} = categorySlice.actions

export const asyncgetcategory= ()=> async(dispatch,getState)=>{
    const {data} = await axios.get("https://api.escuelajs.co/api/v1/categories")
    // console.log(data);
    
    dispatch(addcategory(data))
}


  
