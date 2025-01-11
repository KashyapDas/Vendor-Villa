import React, { useEffect, useState } from 'react'
import style from "../style.module.css";
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const [cartArray, setCartArray] = useState(() => {
    const storedHistory = localStorage.getItem("cartHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
});

useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("setCart"));
    if (getCart) {
        setCartArray((prevArray) => {
            // Check if an object with the same id already exists
            const isDuplicate = prevArray.some((item) => item.id === getCart.id);

            // If duplicate found, return the previous array unchanged
            if (isDuplicate) {
                return prevArray;
            }

            // If no duplicate, add the new object
            const newArray = [...prevArray, getCart];
            localStorage.setItem("cartHistory", JSON.stringify(newArray));
            return newArray;
        });
    }
}, [localStorage.getItem("setCart")]); // Dependency should only be used carefully.

const removeCardByID = (items) => {
    setCartArray((prevArray) => {
        const updatedArray = prevArray.filter((item) => item.id !== items.id);
        localStorage.setItem("cartHistory", JSON.stringify(updatedArray));
        return updatedArray;
    });
};

  
  return (
    <div className={`w-full h-[93vh]  overflow-x-hidden overflow-y-scroll ${style.scrollBehaviour}`}>
      <h1 className={`${style.gilroy} font-semibold text-3xl w-full h-fit text-left pl-3 lg:pl-20 mt-3`}>
            Item in your cart : {cartArray.length > 0 ? cartArray.length : 0}
          </h1>


      <div className={`cartSection w-full h-full flex flex-col lg:flex-row lg:flex-wrap gap-y-5 overflow-x-hidden overflow-y-scroll p-3 lg:justify-start mt-10 lg:gap-x-10 lg:pl-20 ${style.scrollBehaviour}`}>

          
          {cartArray.length <= 0 ? "No item added" : (
            cartArray.map((items,index)=>(
              <div key={index} className="cart w-full h-36 lg:h-44 lg:w-[45%] flex gap-x-2 bg-slate-300 p-1 rounded-lg">
              <div className="leftDiv h-full w-[20vw] lg:w-[20%] overflow-hidden">
                <img src={items.image} alt="Image Not Found" className='w-full h-full object-contain mix-blend-multiply' />
              </div>
              <div className="rightDiv h-full w-[80vw] lg:w-[80%] overflow-hidden">
                <h2 className={`${style.gilroy} text-xs`}>{items.title}</h2>
                <h3 className={`${style.girloyBold} text-sm font-semibold text-blue-700`}>In Stock</h3>
                <div className="addItem w-full flex items-center gap-x-3">
                  <NavLink onClick={()=>removeCardByID(items)} to="/cart/cancel" className={`bg-red-600 text-white ${style.gilroy} font-semibold p-1 text-sm mt-2 rounded-md`}>
                    Cancel
                  </NavLink>  
                  <NavLink onClick={()=>removeCardByID(items)} to="/cart/buy" className={`bg-green-600 text-white ${style.gilroy} font-semibold p-1 text-sm mt-2 rounded-md`}>
                    Buy now
                  </NavLink> 
                </div>
                
              </div>
  
            </div> 

            ))
          ) }

          

          

      </div>
    </div>
  )
}

export default Cart

