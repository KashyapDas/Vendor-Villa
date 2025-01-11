import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Categories from '../Pages/Categories'
import Home from '../Pages/Home'
import Description from '../Pages/Description'
import Favourite from '../Pages/Favourite'
import Filter from '../Pages/Filter'
import Paid from '../Pages/Paid'

const Routing = () => {

  return (
    <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/description/:id" element={<Description/>} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path="/categories/:category" element={<Filter/>} />
        <Route path="/cart/:paid" element={<Paid/>} />
    </Routes>
  )
}

export default Routing
