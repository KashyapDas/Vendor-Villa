import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Categories from '../Pages/Categories'
import Home from '../Pages/Home'
import Description from '../Pages/Description'
import Favourite from '../Pages/Favourite'
import Filter from '../Pages/Filter'

const Routing = () => {

  return (
    <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/description/:id" element={<Description/>} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path="/categories/:category" element={<Filter/>} />
    </Routes>
  )
}

export default Routing
