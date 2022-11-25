import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>


    <nav className="navbar navbar-expand-lg py-3 navbar-dark navStyle ">
  <div className="container-fluid">
    <span className="navbar-brand ms-5 fs-3" >START REACT</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="" >Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="protfolio">Protfolio</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



      </div>
    )
  }
}
