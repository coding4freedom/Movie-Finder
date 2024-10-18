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
            const response = await axios.get(`https://www.omdbapi.com/?s=${getMovieID}&apikey=${posterapiKey}`);
            setPosterInfo(response.data)
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchPosterData();
    }, []);

    return (
        <div className='movie__info'>
            <div className="movie__info--poster" style={{backgroundImage: `url(${posterInfo.Poster})`}}></div>
        </div>
    )
}

export default MovieInfo;