import React from "react";

const Button = ({
  icon,
  children,
  textColor,
  borderRounded,
  bgColor,
  custom,
  hovercolor,
  borderColor,
  onClick,
  fullWidth,
  style,
  height,
  width,
  fullRounded,
  title,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        title={title}
        className={`  py-1 w-15 ${style} text-base font-thin ${textColor} ${fullRounded} ${custom} ${width} ${height} ${hovercolor} ${fullWidth && "w-full"} ${bgColor} ${borderColor} ${borderRounded || "rounded"}  border border-1 rounded `}
      >
        <i className={`${icon}`}></i>
        {children}
      </button>
    </>
  );
};
export default Button;
