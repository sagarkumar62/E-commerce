import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams} from "react-router-dom"
import { asycgetsingleproduct} from '../store/reducers/productSlice'
import Loading from './Loading'
import { addToCart } from '../store/reducers/cartSlice'


const Details = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  // console.log(id);
  

  const product = useSelector((state) => state.product.singledata);
  console.log(product);
  

  useEffect(()=>{
    if(id){
      dispatch(asycgetsingleproduct(id))
    }
  },[dispatch,id] )

  const handleAddToCart = ()=>{
    if (product) {
      dispatch(addToCart(product)); // ✅ Dispatch the product to cart
      alert("Added to cart")
    }
  }

  return product ? (
    
    <div className="h-full w-[80%] m-auto p-[10%] flex items-center gap-10">
      
      <img className=" h-[100%] rounded" src={product.images?.[0]} alt={product.title} />

      
      <div className="content">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <h2 className="text-zinc-400 my-2 text-[1.2rem]">{product.category?.name}</h2>
        <h3 className="mb-2 text-red-700">${product.price}</h3>
        <p className="font-semibold mb-5">{product.description}</p>
        <button onClick={handleAddToCart} className='active:scale-95 border bg-amber-600 rounded px-2 py-1'>Add to cart</button>
      </div>
    </div>


):(<Loading />)
}

export default Details