// src/redux/slices/filtersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products based on price range
export const fetchFilteredProducts = createAsyncThunk(
  "filters/fetchFilteredProducts",
  async ({ minPrice, maxPrice }) => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/?price_min=${minPrice}&price_max=${maxPrice}`
    );
    return response.json();
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    minPrice: 0,
    maxPrice: 2000,
    pproducts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.pproducts = action.payload;
        console.log(state.pproducts);
        
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setMinPrice, setMaxPrice } = filtersSlice.actions;
export default filtersSlice.reducer;
