import { createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios'

const initialState ={
    data:[],
    singledata:null
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addproducts :(state, action) =>{
            state.data = action.payload
        },
        addsingleproduct:(state,action)=>{
            state.singledata=action.payload
        }
    }
})
export default productSlice.reducer
export const {addproducts} = productSlice.actions
export const {addsingleproduct} = productSlice.actions

export const asyncgetproducts =()=> async(dispatch,getState)=>{
    const {data} = await axios.get("https://api.escuelajs.co/api/v1/products")
    dispatch(addproducts(data))
}

export const asycgetsingleproduct =(id)=> async(dispatch,getState)=>{
    try {
        const {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        console.log(id);
        
        console.log(data);
        
        dispatch(addsingleproduct(data))
        
        
        

    } catch (error) {
        console.log(error);
        
        
    }
}