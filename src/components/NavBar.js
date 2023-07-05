import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/">
            <img src="nh.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            News Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  focus-ring rounded-pill focus-ring-light " to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link focus-ring rounded-pill focus-ring-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBar
