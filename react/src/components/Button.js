import React from 'react'

 const Button = ({children, textColor, bgColor, hovercolor,borderColor, onClick, fullWidth}) =>{
    console.log('render')
  return (
    <>
     <button
        type='button'
        onClick={onClick}
        className={`py-1 w-40 text-base font-thin ${textColor} ${hovercolor} ${fullWidth && 'w-full'} ${bgColor} ${borderColor} border border-1 rounded ` }
    >
        {children}
    </button>
    </>
   
  )
}
export default Button;