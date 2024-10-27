import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
    const [searchMovie, setSearchMovie] = useState('');
    const [getMovieID, setGetMovieID] = useState('');
    const [movies, setMovies] = useState([]);
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <SearchContext.Provider value={{ searchMovie, setSearchMovie, getMovieID, setGetMovieID, movies, setMovies, loading, setLoading, click, setClick }}>
            { children }
        </SearchContext.Provider>
    );
};