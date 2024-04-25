import React from 'react'
import "./Dashboard.css"
import ApplicationInfo from './ApplicationInfo/ApplicationInfo'
import PostedJob from './PostedJobs/PostedJob'
import candidate1 from '../../src/assets/candidateone.jpeg'
import calendar from '../../src/assets/calendar.PNG'
import time from '../../src/assets/time.PNG'

const TodaysInterview = () => {
  return (
    <>
      <ApplicationInfo />
      <div className='Interview-Layout'>
        <div className='TodaysInterview-Layout'>
          <div className='TodaysInterview-Text'>Today Interviews Meetings Info</div>
          {/* <hr /> */}
        </div>

        <div className='Interview-meeting'>
          <div className='imgDateTime'>
            <img src={candidate1} className="user-icon" alt="logo" />
            <div>
              <div htmlFor="" className='label-text'>John Smith</div>
              <div htmlFor="" className='jobDesc'>Senior Python Developer</div>
            </div>
            <div style={{ display: 'flex', 'margin-left': '50px', 'marginTop': '22px' }}>
              <div>
                <img src={calendar} alt="logo" className='dayTimeIcon' />
                <br />
                <label htmlFor="" className='day' >19th Feb 2024</label>
              </div>
              <div style={{ 'margin-left': '22px' }}>
                <img src={time} alt="logo" className='dayTimeIcon' />
                <br />
                <label htmlFor="" className='day'>10:30 AM</label>
              </div>
            </div>
          </div>
          <div style={{'margin-left':'100px',    'borderLeft': '1px solid #D6D6D6'
}}>
            <table>
              <tr>
                <td>1st Level : 7/10</td>
                <td>Interviewer: Stella</td>
              </tr>
              <tr>
                <td>2nd Level : 6/10</td>
                <td>Interviewer: Smith</td>
              </tr>
              <tr>
                <td>3nd Level : 5/10</td>
                <td>Interviewer: Stephan</td>
              </tr>
              <tr>
                <td>4nd Level : 9/10</td>
                <td>Interviewer: Joyson</td>
              </tr>
            </table>
            <br />
            <div style={{display:'flex'}}>
            <div className='reschedule'>
              <div className='rescheduleText'> Reschedule Meeting</div>
            </div>
            <div className='joinmeeting'>
              <div className='joinmeetingtext'> Join Meeting</div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <PostedJob />
    </>

  )
}

export default TodaysInterview