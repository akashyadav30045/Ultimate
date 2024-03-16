import React from 'react'
import SideNav from '../Templates/SideNav'
import TopNav from '../Templates/TopNav'

const Home = () => {
  return (
    <div className="w-screen h-screen flex">
        <SideNav/>
        <TopNav/>
        <div className="w-[80%] h-full"></div>
    </div>
  )
}

export default Home