import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideShow.css";
import { NextArrow, PrevArrow } from "./ArrowSlideShow";

const SlideShow = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex h-[70vh]">
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-auto h-full object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SlideShow;
