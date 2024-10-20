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
            { posterInfo && posterInfo.Poster && (
                <div className="movie__info--poster" style={{backgroundImage: `url(${posterInfo.Poster})`}}></div>
            )

            }            
            <div className="movie__info--short">
                <p><strong>Title:</strong> {posterInfo.Title}</p>
                <p><strong>Year:</strong> {posterInfo.Year}</p>
                <p><strong>Rated:</strong> {posterInfo.Rated}</p>
                <p><strong>Released:</strong> {posterInfo.Released}</p>
                <p><strong>Runtime:</strong> {posterInfo.Runtime}</p>
                <p><strong>Genre:</strong> {posterInfo.Genre}</p>
                <p><strong>Director:</strong> {posterInfo.Director}</p>
            </div>
            <div className="movie__info--actors">
                <p className='actors__para'> <strong>Actors:</strong>
                {posterInfo && posterInfo.Actors ? posterInfo.Actors.split(',').map((actor, index) => {
                   return <span className='actors__name' key={index}>{` ${actor.trim()}, `}</span>
                }) : <></>}
                </p>
            </div>
            <div className="movie__info--para">
                <p className='movie__info--plot'><strong>Plot:</strong> {posterInfo.Plot}</p>
            </div>
        </div>
    )
}

export default MovieInfo;