import React from 'react'

export default function InputGroup({labelChild,placeholder,setFormData,formData, type}) {
  console.log('formData ben input component',formData)
  console.log(type)
const handleFormData = (e) => {
  setFormData(prev => ({...prev, [type]: e.target.value}))
console.log('taget',e.target.value,type)
}
  return (
    <div className=' flex flex-col mb-2'>
      <label for="fullname" className='text-left text-xl pb-[0.5rem] font-medium leading-7'>{labelChild}</label>
            <div>
                <input 
                id="fullname" 
                name="fullname" 
                type="text" 
                placeholder={placeholder}  
                value= {formData}
                onChange= {(e) => handleFormData(e)}
                className='h-[2.5rem] w-full py-2 px-4 mb-2 border border-[#f1f1f1] rounded outline-none text-xl hover:border-[#1dbfaf]'/>
            </div>
            <span className='text-left text-xl'></span>

    </div>
  )
}
