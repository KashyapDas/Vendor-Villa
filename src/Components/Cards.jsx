import React from "react";
import style from "../style.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilStateLoadable, useSetRecoilState } from "recoil";
import { SelectorProducts } from "../store/selector/Selectorproducts";
import { cardDetails } from "../store/atom/cardDetails";

const Cards = React.memo(() => {

  const currPath = useLocation();

  const [getAllProducts, setAllProducts] = useRecoilStateLoadable(SelectorProducts(currPath));
  const setCardDetails = useSetRecoilState(cardDetails);

  const handleCardDetails = (item)=>{
    setCardDetails(item);
  }

  return (
    <div className="w-full h-fit p-1 flex flex-wrap gap-x-8 gap-y-5">
      {getAllProducts.contents.map((items) => (
        <NavLink onClick={()=>handleCardDetails(items)}
          to={`/description/${items.id}`}
          key={items.id}
          className="card h-80 w-48 rounded-xl overflow-hidde p-1 relative bg-white shadow-sm shadow-black"
        >
          <div className="cardImg w-full h-[65%] rounded-xl overflow-hidden">
            <img
              src={items.image}
              alt="Image Not Found"
              className="h-full w-full object-contain object-center"
            />
          </div>
          <h1
            className={`cardTitle font-semibold text-xs w-full h-fit text-center ${style.gilroy} `}
          >
            {items.title.length > 50 ? (
              <>
                {items.title.slice(0, 40)}
                <span style={{ color: "blue" }}>...See More</span>
              </>
            ) : (
              items.title
            )}
          </h1>
          <span
            className={`block w-full font-bold text-sm text-center mt-1 ${style.gilroy}`}
          >
            Ratings : {items.rating.rate}
          </span>
          <h1
            className={`font-semibold text-2xl ${style.gilroyBold} absolute bottom-1.5 left-4 -translate-x-1 -translate-y-1.5`}
          >
            $ {items.price}
          </h1>
          <div className="cartButton bg-blue-600 absolute bottom-1 right-1 -translate-x-1 -translate-y-1 p-2 rounded-lg">
            <CiShoppingCart className="text-2xl text-white font-bold" />
          </div>
        </NavLink>
      ))}
    </div>
  );
});

export default Cards;
