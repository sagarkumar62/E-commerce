import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMinPrice, setMaxPrice, fetchFilteredProducts } from "../store/reducers/filtersSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = useSelector((state) => state.filters);

  // Fetch products when price range changes
  useEffect(() => {
    dispatch(fetchFilteredProducts({ minPrice, maxPrice }));
  }, [minPrice, maxPrice, dispatch]);

  return (
    <div>
      <label>Min Price: ${minPrice}</label>
      <input
        className="w-[10vw] block"
        type="range"
        min="0"
        max="2000"
        value={minPrice}
        onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
      />

      <label>Max Price: ${maxPrice}</label>
      <input
        className="w-[10vw]"
        type="range"
        min="0"
        max="2000"
        value={maxPrice}
        onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
      />
    </div>
  );
};

export default PriceFilter;
