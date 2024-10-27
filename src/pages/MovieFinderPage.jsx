import React from 'react';
import Nav from '../components/Nav';
import SearchBar from '../components/ui/SearchBar';
import Banner from '../components/Banner';
import styles from './MovieFinderPage.module.css';
import ShowMovies from '../components/ShowMovies';
import { useSearch } from '../provider/SearchContext';

const MovieFinderPage = () => {  

  return (
    <>
      <Banner />
      <Nav />
      <div className={styles.customSearchBar}>
        <h2>Browse our Movie Listings</h2>
        <SearchBar />
      </div>
      <ShowMovies />
    </>
  )
}

export default MovieFinderPage;