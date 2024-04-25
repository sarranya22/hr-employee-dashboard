import React from 'react'
import './PostedJob.css'
import python from '../../../src/assets/python.PNG'
import dots from '../../../src/assets/dots.PNG'
import upArrow from '../../../src/assets/upArrow.PNG'
import angular from '../../../src/assets/angular.PNG'
import java from '../../../src/assets/java.PNG'


const PostedJob = () => {
    return (
        <div className='Postedjob-layout'>
            <div className='Postedjob-status-Layout'>
                <div className='Postedjob-Text'>Posted Jobs</div>
                <div className='PostedjobView-all'>View All</div>
            </div>
            <div className='Jobs'>
                <label htmlFor="Active Jobs" className='Jobs-text'>Active Jobs</label>
                <label htmlFor="Pending Jobs" className='Jobs-text'>Pending Jobs</label>
            </div>
            <hr />
            <div className='job'>
                <div className='Job-layout'>
                    <div className='Job-post'>
                        <div className='Job-developer'>
                            <img src={python} alt="logo" />
                            <label htmlFor="python" className=''>Python Developers</label>
                            <img src={dots} alt="logo" className='Settings' />
                        </div>
                        <hr />
                        <div className='Developer-count'>
                            <label htmlFor="Senior Developers" className='Developer-text'>Senior Developers</label><br /><br />
                            <div className='Count-layout'>
                                <label htmlFor="count" className='Count'>256</label>
                            </div><br />
                            <label htmlFor="Total application" className='Developer-text'>Total Applicants</label>

                        </div>
                        <hr />
                        <div className='Job-developer'>
                            <img src={upArrow} alt="logo" />
                            <label htmlFor="python" className='Jobstxt'><span className='Count-color'>28%</span> vs Last month</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="" className='Jobstxt'>6 mins ago</label>
                        </div>
                    </div>

                </div>
                <div className='Job-layout'>
                    <div className='Job-post'>
                        <div className='Job-developer'>
                            <img src={angular} alt="logo" />
                            <label htmlFor="python" className=''>Angular Developers</label>
                            <img src={dots} alt="logo" className='Settings' />
                        </div>
                        <hr />
                        <div className='Developer-count'>
                            <label htmlFor="Senior Developers" className='Developer-text'>Senior Developers</label><br /><br />
                            <div className='Count-layout'>
                                <label htmlFor="count" className='Count'>256</label>
                            </div><br />
                            <label htmlFor="Total application" className='Developer-text'>Total Applicants</label>

                        </div>
                        <hr />
                        <div className='Job-developer'>
                            <img src={upArrow} alt="logo" />
                            <label htmlFor="python" className='Jobstxt'><span className='Count-color'>28%</span> vs Last month</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="" className='Jobstxt'>6 mins ago</label>
                        </div>
                    </div>

                </div>
                <div className='Job-layout'>
                    <div className='Job-post'>
                        <div className='Job-developer'>
                            <img src={java} alt="logo" />
                            <label htmlFor="java" className=''>java Developers</label>
                            <img src={dots} alt="logo" className='Settings' />
                        </div>
                        <hr />
                        <div className='Developer-count'>
                            <label htmlFor="Senior Developers" className='Developer-text'>Senior Developers</label><br /><br />
                            <div className='Count-layout'>
                                <label htmlFor="count" className='Count'>256</label>
                            </div><br />
                            <label htmlFor="Total application" className='Developer-text'>Total Applicants</label>

                        </div>
                        <hr />
                        <div className='Job-developer'>
                            <img src={upArrow} alt="logo" />
                            <label htmlFor="python" className='Jobstxt'><span className='Count-color'>28%</span> vs Last month</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="" className='Jobstxt'>6 mins ago</label>
                        </div>
                    </div>

                </div>
                {/* <div className='Job-layout'>
                    <div className='Job-post'>
                        <div className='Job-developer'>
                            <img src={python} alt="logo" />
                            <label htmlFor="python" className=''>Python Developers</label>
                            <img src={dots} alt="logo" className='Settings' />
                        </div>
                        <hr />
                        <div className='Developer-count'>
                            <label htmlFor="Senior Developers" className='Developer-text'>Senior Developers</label><br /><br />
                            <div className='Count-layout'>
                                <label htmlFor="count" className='Count'>256</label>
                            </div><br />
                            <label htmlFor="Total application" className='Developer-text'>Total Applicants</label>

                        </div>
                        <hr />
                        <div className='Job-developer'>
                            <img src={upArrow} alt="logo" />
                            <label htmlFor="python" className='Jobstxt'><span className='Count-color'>28%</span> vs Last month</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="" className='Jobstxt'>6 mins ago</label>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default PostedJob