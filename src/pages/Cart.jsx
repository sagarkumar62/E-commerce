import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/reducers/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const [total, settotal] = useState(0)

  const totalAmount = ()=>{
    let sum =0;
    cartItems.map((elem)=>{
      sum+=elem.price
    })
    settotal(sum)
  }

  useEffect(()=>{
    totalAmount()
  },[cartItems])
  
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex justify-between">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
        <div className="w-[65%] mr-5 ">
          <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2 border p-2">
              <span><img className="w-[10vw] h-[10vh]" src={item.images} alt="" /> {item.title} - ${item.price} (x{item.quantity})</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
              
            </li>
          ))}
          
          </ul>
        </div>
        )}
        <div className="w-[25%] border">
          <h2 className="bg-zinc-400 text-2xl p-2">Order Handle</h2>
          <div className="w-full p-5 flex justify-center items-center flex-col gap-10 ">
        
            <h2>Total price : ${total} </h2>
        
            <Link to="/checkout" className="px-3 py-2 rounded bg-amber-500 border active:scale-95 ">Place Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
