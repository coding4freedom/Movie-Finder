import React, {useEffect, useState} from 'react';
import { useSearch } from '../provider/SearchContext';
import axios from 'axios';
import './MovieInfo.css';

const MovieInfo = () => {
    const { getMovieID } = useSearch();
    const [posterInfo, setPosterInfo] = useState([]);
    const posterapiKey = import.meta.env.VITE_MOVIE_API_KEY;

    async function fetchPosterData() {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${getMovieID}&apikey=${posterapiKey}`);
            setPosterInfo(response.data)
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        if (getMovieID) {
            fetchPosterData();
        }
        
    }, [getMovieID]);

    return (
        <div className='movie__info'>
            <div className="movie__info--poster" style={{backgroundImage: `url(${posterInfo.Poster})`}}></div>
            <div className="movie__info--short">
                <p>Title: {posterInfo.Title}</p>
                <p>Year: {posterInfo.Year}</p>
                <p>Rated: {posterInfo.Rated}</p>
                <p>Released: {posterInfo.Released}</p>
                <p>Runtime: {posterInfo.Runtime}</p>
                <p>Genre: {posterInfo.Genre}</p>
                <p>Director: {posterInfo.Director}</p>
            </div>
            {/* <div className="movie__info--actors">
                {posterInfo.Actors.split(',').map((actor, index) => {
                    <p className='actors__name' key={index}>{actor}</p>
                })}
            </div> */}
            <div className="movie__info--para">
                <p className='movie__info--plot'>Plot: {posterInfo.Plot}</p>
            </div>
        </div>
    )
}

export default MovieInfo;