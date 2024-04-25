import React from 'react'
import './CandidateStatus.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import view from '../../../src/assets/view.PNG'
import filter from '../../../src/assets/filter.PNG'

function createData(id, name, position, first, second, third, fourth, totalMark, status, actions) {
    return { id, name, position, first, second, third, fourth, totalMark, status, actions };
}

const rows = [
    createData('#001', "John Deo", "Designer", "6/10", "7/10", "...", "2/10", "3/10", "Active"),
    createData('#002', "John Smith", "Designer", "...", "7/10", "...", "...", "3/10", "Reject"),
    createData('#003', "Stella", "Designer", "6/10", "7/10", "8/10", "7/10", "3/10", "Hired"),
    createData('#004', "Randy", "Designer", "6/10", "7/10", "...", "...", "3/10", "Active"),
    createData('#005', "John Deo", "Designer", "6/10", "7/10", "7/10", "8/10", "9/10", "Hired"),
];

const CandidateStatus = () => {
    return (
        <div className='Candidate-layout'>
            <div className='Candidate-status-Layout'>
                <div className='Candidate-Text'>Candidate Status</div>
                <div className='CandidateView-all'>View All</div>
                {/* <div className='Search-layout'>
                    <button class="btn" className='Filter-layout'><img src={filter} className="view" alt="logo" /> <span className='Filter'>Filter</span></button>
                </div> */}
            </div>
            <div className='Table-layout'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='Table-header'>
                                <TableCell align='right' className='Header-cell'>Job Id</TableCell>
                                <TableCell align="right" className='Header-cell'>Name</TableCell>
                                <TableCell align="right" className='Header-cell'>Position</TableCell>
                                <TableCell align="right" className='Header-cell'>1st Level</TableCell>
                                <TableCell align="right" className='Header-cell'>2nd Level</TableCell>
                                <TableCell align="right" className='Header-cell'>3nd Level</TableCell>
                                <TableCell align="right" className='Header-cell'>4nd Level</TableCell>
                                <TableCell align="right" className='Header-cell'>Total Mark</TableCell>
                                <TableCell align="center" className='Header-cell'>Status</TableCell>
                                <TableCell align="right" className='Header-cell'>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                                    <TableCell align="right">{row.id}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.position}</TableCell>
                                    <TableCell align="right">{row.first}</TableCell>
                                    <TableCell align="right">{row.second}</TableCell>
                                    <TableCell align="right">{row.third}</TableCell>
                                    <TableCell align="right">{row.fourth}</TableCell>
                                    <TableCell align="right">{row.totalMark}</TableCell>
                                    <TableCell align="center">
                                        <div className='Status' >
                                            <label htmlFor="" className='Status-label' >{row.status}</label>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <img src={view} className="view" alt="logo" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}

export default CandidateStatus