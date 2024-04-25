import React from 'react'
import "./Dashboard.css"
import TodaysInterview from './TodaysInterview'
import CandidateStatus from './CandidateStatus/CandidateStatus'
const Dashboard = () => {
  return (
    <div>
    <div className='Dashboard-layout'>
        <div className='Hr-emp'>HR Employee</div>
        <div className='Hr-content'>Enjoy your selecting potential candidates Tracking and Management System.</div>
    </div>
    <TodaysInterview />
    <CandidateStatus />
    </div>
  )
}

export default Dashboard