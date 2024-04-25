import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import Sidenav from '../sidenav/Sidenav';
const Layouts = () => {
  return (
    <>
    <div className="row grow w-100">
        <Header />
        </div>
    <div className="row w-100">
    <div className="col-1">
    <Sidenav />
    </div>
    <div className="col-8">test</div>
    <div className="col-3">demo</div>

</div>
<div className="row w-100">
    <div className="col-12 py-3 bg-danger">
        Footer
    </div>
</div>
</>
  )
}

export default Layouts