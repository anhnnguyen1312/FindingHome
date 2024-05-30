import React from 'react'
import FilterItem from './FilterItem'
import Button from './Button'
const Search_Filter = () => {
  return (
    <div className=' p-1 bg-[#febb02] rounded-lg flex-col md:flex-row flex items-center justify-around gap-2'>
      <FilterItem text={'vi tri'}/> 
      <FilterItem text={'gia'}/> 
      <FilterItem text={'tien ich'}/> 
      <FilterItem text={'dien tich'}/> 
      <Button 
                children={ 'tim kiem' }
                bgColor= {'bg-red-600'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
                
            />
    </div>
  )
}

export default Search_Filter
