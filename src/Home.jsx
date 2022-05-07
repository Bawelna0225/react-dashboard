import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import "./css/home.css"

export const Home = () => {
  return (
    <div className='home'>
          <Sidebar/>
          <div className="home-container">container</div>
    </div>
  )
}


export default Home