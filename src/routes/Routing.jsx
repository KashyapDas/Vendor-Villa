import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Categories from '../Pages/Categories'
import Home from '../Pages/Home'
import Description from '../Pages/Description'

const Routing = () => {
  return (
    <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/description' element={<Description/>} />

    </Routes>
  )
}

export default Routing
