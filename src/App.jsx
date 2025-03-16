import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Categories from './components/Categories'
import ProductListing from './pages/ProductListing'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Signup from './pages/Signup'


const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-auto overflow-y-hidden'>
      <Nav />
      <Categories />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/productlisting' element={<ProductListing />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup />} />
        


      </Routes>
    </div>
  )
}

export default App