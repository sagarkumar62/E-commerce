import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2 border p-2">
              <span>{item.title} - ${item.price} (x{item.quantity})</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
