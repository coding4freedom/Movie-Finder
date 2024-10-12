import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import SearchBar from '../components/ui/SearchBar';
import MoviePic from '../components/ui/MoviePic';

const HomePage = () => {
  return (
    <>
      <Nav />
      <Header />
      <SearchBar />
      <MoviePic />
    </>
  )
}

export default HomePage;