import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/General">Aaj Tak</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link" aria-current="page" to="/General">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
