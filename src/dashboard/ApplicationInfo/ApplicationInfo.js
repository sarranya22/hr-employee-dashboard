import React from 'react'
import { Bar } from 'react-chartjs-2';
import './ApplicationInfo.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import file from '../../../src/assets/file.PNG'
import newassment from '../../../src/assets/assmentimg.png'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)
const ApplicationInfo = () => {
  const data = {
    labels: ['Jan', 'Feb', 'mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Received',
        data: [0, 1000, 1500, 500, 2000, 485, 1800, 700, 499, 154, 458, 1950],
        backgroundColor: '#277ACC',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        // text: 'Chart.js Bar Chart',
      },
    },
  }
  return (
    <div className='Chart-layout'>
      <div style={{ width: '55%' }}>
        <Bar options={options} data={data} />
      </div>
      <div className='New-assment'>
        <div style={{ display: 'flex' }}>
          <img src={file} alt="logo" className='File-image' />
          <img src={newassment} alt="logo" className='imageOne' />
          <img src={newassment} alt="logo" className='imageTwo' />
        </div>
        <div className='Countlayout'>
          <div>0033</div>
        </div>
        <div className='New-assment-text'>
          <div>New Assessment's</div>
        </div>
        <div className='View-details'>
          <div className='View-detail-text'>View Details</div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationInfo