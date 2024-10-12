import React from 'react';
import movie from '../../assets/undraw_home.svg';
import './MoviePic.css';

const MoviePic = () => {
  return (
    <figure className='movie-pic'>
        <img src={movie} alt="" />
    </figure>
  )
}

export default MoviePic;