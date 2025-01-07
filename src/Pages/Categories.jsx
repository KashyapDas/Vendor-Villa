import React from "react";
import style from "../style.module.css";
import { GiLargeDress } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { SiStmicroelectronics } from "react-icons/si";
import { AiOutlineGold } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilStateLoadable } from "recoil";
import { SelectorProducts } from "../store/selector/Selectorproducts";
import LoadingScreen from "../Components/LoadingScreen ";

const Categories = () => {
  const currPath = useLocation();
  const [getCategories, setCategories] = useRecoilStateLoadable(
    SelectorProducts(currPath)
  );

  return getCategories.state != "loading" ? (
    <div className="w-full h-[93vh] overflow-x-hidden overflow-y-scroll">
      <div className="mobileDiv h-full w-full flex justify-center p-2 flex-wrap lg:hidden">
        {getCategories.contents.map((items, index) => (
          <NavLink
            to={`/categories/${items}}`}
            key={index}
            className={`categoryCards w-80 h-36 rounded-lg flex items-center justify-center gap-x-3 ${
              items == "women's clothing"
                ? "bg-blue-500"
                : items == "men's clothing"
                ? "bg-red-500"
                : items == "electronics"
                ? "bg-black"
                : items == "jewelery"
                ? "bg-yellow-500"
                : "bg-black"
            }`}
          >
            <h1 className={`${style.gilroyBold} text-white text-2xl`}>
              {items.toUpperCase()}
            </h1>

            {items == "women's clothing" ? (
              <GiLargeDress className="text-blue-300 text-4xl" />
            ) : items == "men's clothing" ? (
              <IoShirt className="text-red-200 text-4xl" />
            ) : items == "electronics" ? (
              <SiStmicroelectronics className="text-white text-4xl" />
            ) : items == "jewelery" ? (
              <AiOutlineGold className="text-yellow-200 text-4xl" />
            ) : (
              "Error"
            )}
          </NavLink>
        ))}
      </div>
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default Categories;
