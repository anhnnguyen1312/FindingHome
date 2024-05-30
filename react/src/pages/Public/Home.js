import React from 'react'
 import NavBar from '../../components/NavBar'
import { Outlet } from 'react-router-dom'
import {FilterSearch} from '../../components/index'

export default function Home() {
  return (
    <div>
      <h1> home</h1>
      <NavBar/>
      {/* <FilterSearch/> */}
      <div className='md:w-full lg:w-4/5 sm:w-full  xl:w-4/5  m-auto h-full flex flex-col items-start justify-start border border-black'>
        <Outlet/>
      </div>
    </div>
  )
}
