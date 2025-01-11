import React from 'react'
import MSearch from '../Components/MSearch'
import Slider from '../Components/Slider'
import Cards from '../Components/Cards'
import style from '../style.module.css'
import { useRecoilStateLoadable } from 'recoil'
import { SelectorProducts } from '../store/selector/Selectorproducts'
import LoadingScreen from '../Components/LoadingScreen '
import { useLocation } from 'react-router-dom'

const Home = () => {

  const currPath = useLocation();

  const [getAllProducts] = useRecoilStateLoadable(SelectorProducts(currPath));

  return getAllProducts.state != "loading" ? (
    <div className={`w-full h-[93vh] overflow-x-hidden overflow-y-scroll ${style.scrollBehaviour}`}>
      <MSearch />
      <Slider />
      <Cards />
    </div>
  ) : (<LoadingScreen/>)
}

export default Home
