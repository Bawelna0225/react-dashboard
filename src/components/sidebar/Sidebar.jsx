import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Logo</span>
        </div>
        <div className="center">
            <ul>
            <Link to='/' style={{textDecoration: 'none'}}>
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li></Link>
                <Link to='/users' style={{textDecoration: 'none'}}>
                <li><PeopleAltIcon className='icon'/><span>Users</span></li></Link>
                <Link to='/products' style={{textDecoration: 'none'}}>
                <li><CategoryIcon className='icon'/><span>Products</span></li></Link>
                <li><CreditCardIcon className='icon'/><span>Orders</span></li>
                <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
                <li><QueryStatsIcon className='icon'/><span>Stats</span></li>
                <li><NotificationsActiveIcon className='icon'/><span>Notifications</span></li>
                <li><HealthAndSafetyIcon className='icon'/><span>System health</span></li>
                <li><PsychologyIcon className='icon'/><span>Logs</span></li>
                <li><SettingsIcon className='icon'/><span>Settings</span></li>
                <li><LogoutIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar