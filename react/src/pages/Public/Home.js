import React from 'react'
 import NavBar from '../../components/NavBar'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1> home</h1>
      <NavBar/>
      <div className='w-1120 m-auto h-full flex flex-col items-center justify-start'>
        <Outlet/>
      </div>
    </div>
  )
}
