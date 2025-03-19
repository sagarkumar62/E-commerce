import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";



const CheckoutPage = () => {
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



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <div className="w-[40%] mx-auto  p-6 border rounded-lg shadow-md mt-5 flex justify-between">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <hr />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <hr />
          <h3 className="text-lg font-semibold">Payment Details</h3>
          <div>
            <label className="block font-medium">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Expiry</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <hr />
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">
            Pay Now
          </button>
        </form>
        
      </div>
      <div className="w-[25%] h-[25vh] border">
          <h2 className="bg-zinc-400 text-2xl p-2 text-center">Order Handle</h2>
          <div className="w-full p-5 flex justify-center items-center flex-col gap-10 ">
        
            <h2 className="text-center">Total price : ${total} </h2>
        
            
          </div>
        </div>
    </div>
  );
};

export default CheckoutPage;