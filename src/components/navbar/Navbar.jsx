import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <NotificationsActiveIcon/>
            <div className="counter">4</div>
          </div>
          <div className="item"><ChatBubbleOutlineIcon/>
          <div className="counter">2</div></div>
          <div className="item">
            <img 
              src="https://picsum.photos/50" 
              alt="avatar" 
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar