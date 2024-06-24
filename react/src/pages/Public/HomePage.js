import React, { useState, useEffect } from "react";
import { CardPlaces, HeroSection, Product } from "../../components/index";
import { SideBar } from "../../components/SideBar";
import WhyUs from "../../components/WhyUs";
import CardRoom from "../../components/CardRoom";
import AboutUs from "../../components/AboutUs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [isHomePage, setIsHomePage] = useState(true);

  const { posts } = useSelector((state) => state.post);

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
        <Product posts={posts} isHomePage />

        <AboutUs />
        <WhyUs />

        {/* <SideBar/> */}
      </div>
    </>
  );
};

export default HomePage;
