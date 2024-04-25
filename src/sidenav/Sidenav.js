import React from 'react'
import './Sidenav.css'
import menuicon1 from '../../src/assets/menuicon1.PNG'
import menuicon2 from '../../src/assets/menuicon2.PNG'
import menuicon3 from '../../src/assets/menuicon3.PNG'
import menuicon4 from '../../src/assets/menuicon4.PNG'
import menuicon5 from '../../src/assets/menuicon5.PNG'
import menuicon6 from '../../src/assets/menuicon6.PNG'
import menuicon7 from '../../src/assets/menuicon7.PNG'
import menuicon8 from '../../src/assets/menuicon8.PNG'
import menuicon9 from '../../src/assets/menuicon9.PNG'


const Sidenav = () => {
  return (
    <div className='Sidenav-layout'>
        <ul>
            <li>
            <img src={menuicon1} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon2} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon3} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon4} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon5} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon6} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon7} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon8} className="menu-icon" alt="logo" />
            </li>
            <li>
            <img src={menuicon9} className="menu-icon" alt="logo" />
            </li>
        </ul>
    </div>
  )
}

export default Sidenav