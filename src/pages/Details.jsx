import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { asycgetsingleproduct } from "../store/reducers/productSlice";
import Loading from "./Loading";
import { addToCart } from "../store/reducers/cartSlice";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const product = useSelector((state) => state.product.singledata);
  
  const [selectedImage, setSelectedImage] = useState(null); // State for main image

  useEffect(() => {
    if (id) {
      dispatch(asycgetsingleproduct(id));
    }
  }, [dispatch, id]);

  // Update selected image when product is fetched
  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert("Added to cart");
    }
  };

  return product ? (
    <div className="h-screen w-full p-10 flex flex-col items-center">
      <div className="flex gap-10">
        {/* Main Product Image */}
        <img className="h-[50vh] w-[50vh] rounded" src={selectedImage} alt={product.title} />

        {/* Product Details */}
        <div className="content">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h2 className="text-zinc-400 my-2 text-[1.2rem]">{product.category?.name}</h2>
          <h3 className="mb-2 text-red-700">${product.price}</h3>
          <p className="font-semibold mb-5">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="active:scale-95 border bg-amber-600 rounded px-2 py-1"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Image Thumbnails */}
      <div className="flex mt-5 gap-2">
        {product.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product ${index}`}
            className={`w-20 h-20 cursor-pointer rounded border ${selectedImage === img ? "border-amber-600" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
