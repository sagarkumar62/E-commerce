import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetproducts } from '../store/reducers/productSlice';
import { Link, useLocation } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId"); 

  const { data: products } = useSelector(state => state.product);
  
  useEffect(() => {
    dispatch(asyncgetproducts()); // Fetch all products
  }, [dispatch]);

  const filteredProducts = categoryId
    ? products.filter((p) => p.category?.id.toString() === categoryId)
    : products;

  return filteredProducts.length > 0 ? (
    <div className='p-5 flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto'>
      {filteredProducts.map((p, i) => (
        <Link key={i} to={`/details/${p.id}`} className='card p-3 border shadow rounded w-[16%] h-[35vh] flex flex-col justify-center items-center'>
          <div 
            className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center' 
            style={{ backgroundImage: `url(${p.images[0]})` }}
          />
          <h1 className='text-center'>{p.title}</h1>
        </Link>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
