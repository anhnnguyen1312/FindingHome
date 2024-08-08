import React, { useState, useEffect } from "react";
import {
  CardPlaces,
  HeroSection,
  Product,
  RecommendPost,
} from "../../components/index";
import WhyUs from "../../components/WhyUs";
import AboutUs from "../../components/AboutUs";

const HomePage = () => {
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <>
      <div className="w-full ">
        <HeroSection />
        <CardPlaces />
        <RecommendPost />
        <Product />
        <AboutUs />
        <WhyUs />
      </div>
    </>
  );
};

export default HomePage;
