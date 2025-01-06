import React from 'react'
import MSearch from '../Components/MSearch'
import Slider from '../Components/Slider'
import Cards from '../Components/Cards'
import style from '../style.module.css'
import { useRecoilStateLoadable } from 'recoil'
import { SelectorProducts } from '../store/selector/Selectorproducts'
import LoadingScreen from '../Components/LoadingScreen '

const Home = () => {

  const [getAllProducts, setAllProducts] = useRecoilStateLoadable(SelectorProducts());

  return getAllProducts.state != "loading" ? (
    <div className={`w-full h-[90vh] overflow-x-hidden overflow-y-scroll ${style.scrollBehaviour}`}>
      <MSearch />
      <Slider />
      <Cards />
    </div>
  ) : (<LoadingScreen/>)
}

export default Home
