import React from 'react'
import logo from '../../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap'

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
         <div className="container">
            <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a className="nav-link" aria-current="page" href="#header">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#about">About me</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href='#blog'>Blog</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#contact">Contact</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
    
  )
}

  