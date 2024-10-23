import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../provider/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
  const { searchMovie, setSearchMovie } = useSearch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchMovie(e.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    navigate('/movies');    
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search Movie by Name..."
          value={searchMovie}
          onChange={handleChange}
        />
        <button className="search__btn" disabled={loading}>
          <FontAwesomeIcon className="search__icon" icon={ loading ? faSpinner: faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;