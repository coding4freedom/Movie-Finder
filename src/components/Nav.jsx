import React, { useState } from 'react';
import logo from '../assets/logo.png';
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tab = '\u00A0\u00A0\u00A0\u00A0';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div id='nav' className='nav'>
        <div className="logo__wrapper">
            <img src={logo} alt="" />
            <span>Movies</span>
        </div>
        <ul className='nav__list'>
            <li className='nav__links'><Link to='/' >Home</Link></li>
            <li className='nav__links'><Link to='/movies' >Find Movies</Link></li>
            <li className='nav__links'><button className='nav__btn' onClick={openModal}>Contact</button></li>           
        </ul>

        <button className='nav__btn-mobile' onClick={openModal}>C</button>

        {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <h2>Contact Information</h2>
            <p>First Name: {tab}Chris</p>
            <p>Last Name: {tab}Hawkins</p>
            <p>Email: {tab}chris.hawkins.cyber@gmail.com</p>
            <p>GitHub: {tab}<a href='https://github.com/coding4freedom'>Chris Hawkins</a></p>
          </div>
        </div>
      )}        
    </div>
  )
}

export default Nav;