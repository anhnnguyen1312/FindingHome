import React from 'react'
import {FilterSearch} from '../../components/index'
import {Search_Filter} from '../../components/index'

const HomePage = () => {
  return (
    <>
   
     <FilterSearch/>
    

    <div className='border border-red w-full m-2'>
     
      <Search_Filter/>
    </div>
    </>
  )
}

export default HomePage
