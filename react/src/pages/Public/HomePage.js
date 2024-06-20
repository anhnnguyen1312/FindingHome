import React from "react";
import { CardPlaces, HeroSection, Product } from "../../components/index";
import { SideBar } from "../../components/SideBar";
import WhyUs from "../../components/WhyUs";
import CardRoom from "../../components/CardRoom";
import AboutUs from "../../components/AboutUs";
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
        {/* <CardRoom /> */}
        <Product />

        <AboutUs />
        <WhyUs />

        {/* <SideBar/> */}
      </div>
    </>
  );
};

export default HomePage;
