import React from 'react';
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
        <h1 className='stand-out'>
            <span className='circle'>
              <img src={logo} className='header__logo' alt="" />
            </span>
            Movies is the #1 place to get movie data
        </h1>
        <p>
          FIND MOVIES USING 
          <span className='circle'><img src={logo} className='header__logo' alt="" /></span>
          <span className='stand-out'>MOVIES</span>
        </p>
    </div>
  )
}

export default Header;