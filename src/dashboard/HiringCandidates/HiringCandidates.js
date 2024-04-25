import React from 'react'
import './HiringCandidates.css'
import user1 from '../../../src/assets/user1.png'
import user2 from '../../../src/assets/user2.png'
import user3 from '../../../src/assets/user3.png'

const HiringCandidates = () => {
    return (
        <div className='Hiring-layout'>
            <div className='Hiring-candidates'>
            <label className='Hiring-text'>HiringCandidates</label>
            <label className='Hiring-all'>View All</label>
            </div>
            <div className='Activity-data'>
        <div>
          <img src={user1} className="User-icon" alt="logo" />
        </div>
        <div className='Data'>
          <div className='Name'>John Doe</div>
          <div className='Interview'>Senior Python Develpper</div>
          <div className='Lastsceen'>Hired by: Stella</div>
        </div>
        <div>
            <button className='Button-Detail'>Details</button>
        </div>
      </div>
      <div className='Activity-data'>
        <div>
          <img src={user2} className="User-icon" alt="logo" />
        </div>
        <div className='Data'>
          <div className='Name'>John Doe</div>
          <div className='Interview'>Senior Python Develpper</div>
          <div className='Lastsceen'>Hired by: Stella</div>
        </div>
        <div>
            <button className='Button-Detail'>Details</button>
        </div>
      </div>
      <div className='Activity-data'>
        <div>
          <img src={user3} className="User-icon" alt="logo" />
        </div>
        <div className='Data'>
          <div className='Name'>John Doe</div>
          <div className='Interview'>Senior Python Develper</div>
          <div className='Lastsceen'>Hired by: Stella</div>
        </div>
        <div>
            <button className='Button-Detail'>Details</button>
        </div>
      </div>
        </div>
    )
}

export default HiringCandidates