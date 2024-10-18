import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

export const SearchProvider = ({ children }) => {
    const [searchMovie, setSearchMovie] = useState('');
    const [getMovieID, setGetMovieID] = useState('');

    return (
        <SearchContext.Provider value={{ searchMovie, setSearchMovie, getMovieID, setGetMovieID }}>
            { children }
        </SearchContext.Provider>
    );
};