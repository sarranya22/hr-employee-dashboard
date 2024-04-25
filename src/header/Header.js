import React from 'react'
import logo from '../../src/assets/logo.png';
import headermenuOne from '../../src/assets/headerOne.png';
import chat from '../../src/assets/chat.png'
import notification from '../../src/assets/notification.png';
import settings from '../../src/assets/settings.png'
import user1 from '../../src/assets/user1.png'
import search from '../../src/assets/search.png'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
        {/* <input type="text" placeholder="Search" /> */}
        {/* <img src={search} className="header-icon" alt="logo" /> */}
      <div>
       
      </div>
      <div>
        <ul className="menu_list">
          <li>
            <img src={headermenuOne} className="header-icon" alt="logo" />
          </li>
          <li>
            <img src={chat} className="header-icon" alt="logo" />
          </li>
          <li>
            <img src={notification} className="header-icon" alt="logo" />
          </li>
          <li>
            <img src={settings} className="header-icon" alt="logo" />
          </li>
          <li>
            <img src={user1} className="header-icon" alt="logo" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header