import React from 'react'
import { CardPlaces, HeroSection, Product } from '../../components/index'
import { SideBar } from '../../components/SideBar'

const HomePage = () => {
  return (
    <>
      {/* <FilterSearch/> */}

      {/* <HeroSection/> */}

      <div className="w-full ">
        {/*      
      <Search_Filter/> */}

        <HeroSection />
        <CardPlaces />
        <Product />
        {/* <SideBar/> */}
      </div>
    </>
  )
}

export default HomePage
