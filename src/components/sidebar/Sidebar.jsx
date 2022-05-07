import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Logo</span>
        </div>
        <div className="center">
            <ul>
                <li><span>Dashboard</span></li>
                <li><span>Dashboard</span></li>
                <li><span>Dashboard</span></li>
                <li><span>Dashboard</span></li>
            </ul>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar