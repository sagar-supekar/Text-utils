import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';
export default function Navbar(props)
{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid my-3">
    <a className="navbar-brand" href="/">{props.title}Text-Utils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="textform">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
       
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
</nav>
        
    );
}

