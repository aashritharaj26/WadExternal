import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div className=''>
            <Outlet/>
        </div>
    </div>
  )
}

export default Rootlayout