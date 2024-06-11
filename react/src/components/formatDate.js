import React from "react";
const formatDate = (date) => {
  // const today = new Date();
  const dayFormat =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  return dayFormat;
};

export default formatDate;
