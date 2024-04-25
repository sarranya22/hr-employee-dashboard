import React from 'react'
import Activity from './Activity/Activity'
import Upcomings from './Upcomings'
import HiringCandidates from './HiringCandidates/HiringCandidates'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
    return (
        <div className='Right-layout'>
            <div className='Calendar-layout'>
                <div className='Calendar'>
                <DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
                </div>
            </div>
            <Upcomings />
            <Activity />
            <HiringCandidates />
        </div>
    )
}
