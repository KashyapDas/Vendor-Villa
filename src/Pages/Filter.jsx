import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useRecoilStateLoadable, useSetRecoilState } from 'recoil';
import { selectorCategories } from '../store/selector/SelectorCategories';
import LoadingScreen from '../Components/LoadingScreen '
import { CiShoppingCart } from 'react-icons/ci';
import style from "../style.module.css"
import { cardDetails } from '../store/atom/cardDetails';

const Filter = React.memo(() => {
  const getURLName = useParams();
  const fetchResult = getURLName.category.split("}")[0];

  const fetchByCategory = useRecoilStateLoadable(selectorCategories(fetchResult));
  const setCardDetails = useSetRecoilState(cardDetails);
  const handleCardDetails = (item)=>{
    setCardDetails(item);
  }

  return fetchByCategory[0].state == "loading" ? (<LoadingScreen/>) :(
    <div className='w-full p-1 flex flex-wrap gap-x-8 gap-y-5 h-[93vh] overflow-x-hidden overflow-y-scroll'>

      {fetchByCategory[0].contents.map((item,index)=>(
          <NavLink key={item.id}
          onClick={()=>handleCardDetails(item)}
          to={`/description/${item.id}`}
          className="card h-80 w-48 rounded-xl overflow-hidden p-1 relative bg-white shadow-sm shadow-black"
        >
          <div className="cardImg w-full h-[65%] rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt="Image Not Found"
              className="h-full w-full object-contain object-center"
            />
          </div>
          <h1
            className={`cardTitle font-semibold text-xs w-full h-fit text-center ${style.gilroy} `}
          >
            {item.title.length > 50 ? (
              <>
                {item.title.slice(0, 40)}
                <span style={{ color: "blue" }}>...See More</span>
              </>
            ) : (
              item.title
            )}
          </h1>
          <span
            className={`block w-full font-bold text-sm text-center mt-1 ${style.gilroy}`}
          >
            Ratings :
          </span>
          <h1
            className={`font-semibold text-2xl ${style.gilroyBold} absolute bottom-1.5 left-4 -translate-x-1 -translate-y-1.5`}
          >
            $ {item.price}
          </h1>
          <div className="cartButton bg-blue-600 absolute bottom-1 right-1 -translate-x-1 -translate-y-1 p-2 rounded-lg">
            <CiShoppingCart className="text-2xl text-white font-bold" />
          </div>
        </NavLink>     
      ))}
      
    </div>
  )

})

export default Filter


