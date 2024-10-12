import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search'>
        <input className='search__input' type="text" placeholder='Search Movie by Name...' />
        <button className='search__btn'>
            <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} />
        </button>
    </div>
  )
}

export default SearchBar;