import React from 'react';
import logo from '../assets/logo.png';
import "./Nav.css";

const Nav = () => {
  return (
    <div id='nav' className='nav'>
        <div className="logo__wrapper">
            <img src={logo} alt="" />
            <span>Movies</span>
        </div>
        <ul className='nav__list'>
            <li>Home</li>
            <li>Find Movies</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Nav;