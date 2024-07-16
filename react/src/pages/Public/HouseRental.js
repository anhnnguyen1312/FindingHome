import React from "react";
import { Product } from "../../components";

const type = "apartment";
const HouseRental = () => {
  return <Product type={type} isHomePage={false} />;
};

export default HouseRental;
