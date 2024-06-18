import React from 'react';

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow slick-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow slick-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
    </div>
  );
};

export { NextArrow, PrevArrow };
