import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncgetcategory } from '../store/reducers/categorySlice'

const Categories = () => {
  const dispatch = useDispatch();
  const { data: category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(asyncgetcategory());
  }, [dispatch]);

  return (
    <div className='w-full bg-red-100 px-5 py-2 flex justify-between overflow-x-auto overflow-y-hidden'>
      <Link to="/" className="p-2 mb-2 font-bold">All Products</Link>
      {category.map((cat) => (
        <Link to={`/productlisting/?categoryId=${cat.id}`} key={cat.id} className="p-2 mb-2">
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
