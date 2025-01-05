import React from 'react'
import MSearch from '../Components/MSearch'
import Slider from '../Components/Slider'
import Cards from '../Components/Cards'
import style from '../style.module.css'

const Home = () => {
  return (
    <div className={`w-full h-[90vh] overflow-x-hidden overflow-y-scroll ${style.scrollBehaviour}`}>
      <MSearch />
      <Slider />
      <Cards />
    </div>
  )
}

export default Home
