import React from 'react';
import logo from '../assets/logo.png';
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='nav' className='nav'>
        <div className="logo__wrapper">
            <img src={logo} alt="" />
            <span>Movies</span>
        </div>
        <ul className='nav__list'>
            <li className='nav__links'><Link to='/' >Home</Link></li>
            <li className='nav__links'><Link to='/movies' >Find Movies</Link></li>
            <li className='nav__links'><button className='nav__btn'>Contact</button></li>           
        </ul>        
    </div>
  )
}

export default Nav;