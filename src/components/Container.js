import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Product from './Product'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import Sell from './Sell'

export default function Container() {
  return (
    <div className='Container'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/sell' element={<Sell />} />
        </Routes>
    </div>
  )
}
