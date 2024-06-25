import React from "react";

const Button = ({
  children,
  textColor,
  borderRounded,
  bgColor,
  custom,
  hovercolor,
  borderColor,
  onClick,
  fullWidth,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`  py-1 w-24 text-base font-thin ${textColor} ${custom} ${hovercolor} ${fullWidth && "w-full"} ${bgColor} ${borderColor} ${borderRounded || "rounded"}  border border-1 rounded `}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
