import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/reducers/productSlice";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle Next & Previous
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return products.length > 0 ? (
    <div className="p-5 flex flex-col">
      <div className="flex flex-wrap gap-2">
        {currentProducts.map((p, i) => (
          <Link
            key={i}
            to={`/details/${p.id}`}
            className="card p-3 border shadow rounded w-[16%] h-[35vh] flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${p.images[0]})` }}
            />
            <h1 className="text-center">{p.title}</h1>
          </Link>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={nextPage}
          disabled={indexOfLastProduct >= products.length}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
