import React from 'react'
import { useRecoilValue } from 'recoil'
import { cardDetails } from '../store/atom/cardDetails'
import style from "../style.module.css";
import { NavLink } from 'react-router-dom';

const Description = () => {

  const getCardDetails = useRecoilValue(cardDetails);

  return (
    <div className='w-screen h-[93vh] bg-slate-100 flex items-center justify-center'>

      <div className="cardDetails w-[80%] h-[95%] rounded-md flex flex-col">
        <div className="imageSection w-full h-[50%] overflow-hidden flex items-center justify-center rounded-r-md">
            <img src={getCardDetails.image} alt="Image Not Found" className='w-ful h-full object-contain rounded-md mix-blend-multiply' />
        </div>
        <div className="descriptionSection w-full h-[50%]">
            <h1 className={`w-full h-fit ${style.gilroy} font-semibold text-left p-1 text-lg`}>{getCardDetails.title}</h1>
            <h2 className={`w-full h-fit ${style.gilroyBold} text-left p-1 text-md`}>Price : ${getCardDetails.price}</h2>
            <h1 className={`pl-1 mt-2 ${style.gilroyBold} text-blue-800 text-xs`}>{getCardDetails.category.toUpperCase()}</h1>
            <h2 className={`w-full h-fit ${style.gilroy} text-sm p-1 text-left`}>{getCardDetails.description}</h2>
            <div className="buttonSection w-full h-fit flex items-center justify-start ml-1 gap-x-7 mt-3">
                <NavLink to="/favourite" className={`bg-black active:bg-red-600 text-white p-2 ${style.gilroyBold} rounded-md`}>Add to Favourite</NavLink>
                <NavLink to="/cart" className={`bg-black text-white p-2 ${style.gilroyBold} rounded-md`}>Buy now</NavLink>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Description
