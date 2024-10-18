import React, {useEffect, useState} from 'react';
import { useSearch } from '../provider/SearchContext';
import axios from 'axios';
import './ShowMovies.css';

const ShowMovies = () => {
    const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
    const { searchMovie, setGetMovieID } = useSearch();
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);    
    const [shouldFetch, setShouldFetch] = useState(false);
  
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`);
        setMovies(response.data.Search || []);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    function onClickGetID(id) {
      setGetMovieID(id)
    }

    useEffect(() => {
      if (shouldFetch && searchMovie) {
        fetchData();
        setShouldFetch(false)
      }
    },[shouldFetch]);

    useEffect(() => {
      if (searchMovie) {
        setShouldFetch(true)
      }
    }, [searchMovie]);
    
    return (
      <div className="show">
        <div className="show__title--wrapper">
          <h3 className="show__title">Search results for: {searchMovie}</h3>
        </div>
        <section className="show__movies--wrapper">
          {loading
            ? Array.from({ length: 6 }, (_, index) => (
                <SkeletonMovie key={index} />
              ))
            : movies.slice(0, 6).map((movie, index) => {
                return (
                  <div className="show__card half__transparent" key={index}>
                    <div className="show__card--title" style={{backgroundImage: `url(${movie.Poster})`, backgroundColor: '#181818'}}>
                      <div className="card__overlay" onClick={() => onClickGetID(movie.imdbID)}>More Info</div>
                    </div>
                    <p className="show__para">
                      <strong>Title:</strong> {movie.Title}
                    </p>
                    <p className="show__para">
                      <strong>Type:</strong>{movie.Type}
                    </p>
                  </div>
                );
              }
            )
          }
        </section>
      </div>
    );
}

const SkeletonMovie = () => (
  <div className="show__card skeleton">
    <div className="show__card--title skeleton-title"></div>
    <p className='show__para skeleton-para'></p>
    <p className='show__para skeleton-para'></p>
  </div>
);

export default ShowMovies;