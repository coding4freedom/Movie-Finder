import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../provider/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
  const { searchMovie, setSearchMovie } = useSearch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchMovie(e.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
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
        <button className="search__btn">
          <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;