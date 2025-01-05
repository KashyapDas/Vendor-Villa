import React from 'react'
import style from "../style.module.css"
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { useRecoilStateLoadable } from 'recoil';
import { SelectorProducts } from '../store/selector/Selectorproducts';

const Cards = React.memo(() => {
  
  const [getAllProducts, setAllProducts] = useRecoilStateLoadable(SelectorProducts());
  console.log(getAllProducts)
  

  return (
    getAllProducts.state === "loading" ? (<h1>Loading...</h1>) : (<div className='w-full h-fit p-1 flex flex-wrap gap-5'>

      {getAllProducts.contents.map(items=>(
  <NavLink to='/description' key={items.id} className="card h-80 w-48 rounded-xl overflow-hidde p-1 relative bg-white shadow-sm shadow-black">

  <div className="cardImg w-full h-[65%] rounded-xl overflow-hidden">
    <img src={items.image} alt="Image Not Found" className='h-full w-full object-contain object-center' />
  </div>
  <h1 className={`cardTitle font-semibold text-xs w-full h-fit text-center ${style.gilroy} `}>{items.title}</h1>
  <span className={`block w-full font-bold text-sm text-center mt-1 ${style.gilroy}`}>Ratings : {items.rating.rate}</span>
  <h1 className={`font-semibold text-2xl ${style.gilroyBold} mt-4`}>$ {items.price}</h1>
  <div className="cartButton bg-blue-600 absolute bottom-2 right-2 p-2 rounded-lg">
      <CiShoppingCart className='text-2xl text-white font-bold'/>
  </div>
  
</NavLink>
))}

  </div>)
  )


})

export default Cards

