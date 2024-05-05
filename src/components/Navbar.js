import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">{props.aboutText}</a> */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary mx-3" type="submit">Search</button>
          </form>
          <div className='theme-switch'>
            <button className="theme-button blue mx-2 bg-primary" onClick={()=>props.toggleMode('primary')} style={{backgroundColor:'#2772db',width:'20px', height:'20px', borderRadius:'50%', border:'none'}}></button>
            <button className='theme-button green mx-2  bg-success' onClick={()=>props.toggleMode('success')} style={{backgroundColor:'#3a9188',width:'20px', height:'20px', borderRadius:'50%', border:'none'}}></button>
            <button className='theme-button orange mx-2 bg-danger' onClick={()=>props.toggleMode('danger')} style={{backgroundColor:'#ff5722',width:'20px', height:'20px', borderRadius:'50%', border:'none'}}></button>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>props.toggleMode('null')} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
//To define props type on title & aboutText
//isRequired mens it's never be empty
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
//To set default value of Navbar
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'About text here'
}