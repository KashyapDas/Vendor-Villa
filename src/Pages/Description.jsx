import React from 'react'
import { useRecoilStateLoadable } from 'recoil'
import style from "../style.module.css";
import { NavLink, useParams } from 'react-router-dom';
import { singleProductDetails } from '../store/selector/singleProductDetails';
import LoadingScreen from '../Components/LoadingScreen ';

const Description = () => {
  const getProductId = useParams();
  const getSingleProductDetails = useRecoilStateLoadable(singleProductDetails(getProductId.id));


  const handleCart = () =>{
    localStorage.setItem("setCart",JSON.stringify(getSingleProductDetails[0].contents));
  }


  return getSingleProductDetails[0].state == "loading" ? (<LoadingScreen/>) : (
    <div className='w-screen h-[93vh] bg-slate-100 flex items-center justify-center overflow-y-scroll overflow-x-hidden'>

      <div className={`cardDetails w-[80%] h-[90%] overflow-x-hidden overflow-y-scroll rounded-md flex flex-col ${style.scrollBehaviour}`}>
        <div className="imageSection w-full h-[40vh] overflow-hidden flex items-center justify-center rounded-r-md">
            <img src={getSingleProductDetails[0].contents.image} alt="Image Not Found" className='w-ful h-full object-contain rounded-md mix-blend-multiply' />
        </div>
        <div className="descriptionSection w-full h-[50%]">
            <h1 className={`w-full h-fit ${style.gilroy} font-semibold text-left p-1 text-lg`}>{getSingleProductDetails[0].contents.title}</h1>
            <h2 className={`w-full h-fit ${style.gilroyBold} text-left p-1 text-md`}>Price : ${getSingleProductDetails[0].contents.price}</h2>
            <h1 className={`pl-1 mt-2 ${style.gilroyBold} text-blue-800 text-xs`}>{getSingleProductDetails[0].contents.category.toUpperCase()}</h1>
            <h2 className={`w-full h-fit ${style.gilroy} text-sm p-1 text-left`}>{getSingleProductDetails[0].contents.description}</h2>
            <div className="buttonSection w-full h-fit flex items-center justify-start ml-1 gap-x-7 mt-3">
                <NavLink to="/favourite" className={`bg-black active:bg-red-600 text-white p-2 ${style.gilroyBold} rounded-md`}>Add to Favourite</NavLink>
                <NavLink onClick={handleCart} to="/cart" className={`bg-black text-white p-2 ${style.gilroyBold} rounded-md`}>Add to cart</NavLink>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Description
