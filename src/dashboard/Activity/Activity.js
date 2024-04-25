import React from 'react'
import './Activity.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
import user1 from '../../../src/assets/user1.png'
import user2 from '../../../src/assets/user2.png'
import user3 from '../../../src/assets/user3.png'

const Activity = () => {
  return (
    <div className='Activity-layout'>
      <div>
        <label htmlFor="" className='Activity-text'>Activity</label>
        <label htmlFor="ViewAll" className='ActivityView-all'>View All</label>
      </div>
      <div className='Activity-data'>
        <div>
          <img src={user1} className="User-icon" alt="logo" />
        </div>
        <div className='Data'>
          <div className='Name'>John Doe <span className='Designation'>[Python Developer]</span></div>
          <div className='Interview'>Interview with Stella</div>
          <div className='Lastsceen'>15 mins ago</div>
        </div>
      </div>
      <div className='Activity-data'>
        <div>
          <img src={user2} className="User-icon" alt="logo" />
        </div>
        <div className='Data'>
          <div className='Name'>John Doe <span className='Designation'>[Python Developer]</span></div>
          <div className='Interview'>Interview with Stella</div>
          <div className='Lastsceen'>15 mins ago</div>
        </div>
      </div>
      <div className='Activity-data'>
        <div>
          <img src={user3} className="User-icon" alt="logo" />
        </div>
        <div className='Data'>
          <div className='Name'>John Doe <span className='Designation'>[Python Developer]</span></div>
          <div className='Interview'>Interview with Stella</div>
          <div className='Lastsceen'>15 mins ago</div>
        </div>
      </div>
    </div>
  )
}

export default Activity