import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/reducers/productSlice";
import { fetchFilteredProducts } from "../store/reducers/filtersSlice";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import PriceFilter from "../components/PriceFilter";

const ProductListing = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Fetch all products
  const { data: products } = useSelector((state) => state.product);
  // Fetch price filtered products
  const { pproducts: priceFilteredProducts, minPrice, maxPrice } = useSelector((state) => state.filters);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Fetch all products on mount
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  // Fetch price filtered products when price range changes
  useEffect(() => {
    dispatch(fetchFilteredProducts({ minPrice, maxPrice }));
  }, [dispatch, minPrice, maxPrice]);

  // Filter products based on category, search, and price
  useEffect(() => {
    let filtered = products;

    if (categoryId) {
      filtered = filtered.filter((p) => p.category?.id.toString() === categoryId);
    }

    if (searchQuery) {
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(searchQuery));
    }

    if (priceFilteredProducts?.length > 0) {
      filtered = filtered.filter((p) => 
        priceFilteredProducts.some((filteredP) => filteredP.id === p.id)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filter changes
  }, [products, priceFilteredProducts, categoryId, searchQuery]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle Next & Previous
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return filteredProducts.length > 0 ? (
    <div className="w-full h-screen">
      <div className="w-full h-full flex">
        {/* Filter Sidebar */}
        <div className="w-[18%] h-full bg-amber-400 flex flex-col items-center p-3">
          <h1 className="text-2xl font-semibold">Filter</h1>
          <hr className="w-full mt-2" />
          <PriceFilter />
        </div>

        {/* Product Listing */}
        <div className="p-5 w-[85%] flex flex-col">
          <div className="flex flex-wrap gap-2 productcontainer">
            {currentProducts.map((p, i) => (
              <Link
                key={i}
                to={`/details/${p.id}`}
                className="card p-3 border shadow rounded w-[19%] h-[35vh] flex flex-col justify-center items-center"
              >
                <div
                  className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${p.images})` }}
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
              disabled={indexOfLastProduct >= filteredProducts.length}
              className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductListing;
