import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, isCardsLoading }) {
  return (
    <div className="movies page-section">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isCardsLoading={isCardsLoading}
      />
    </div >
  )
}

export default Movies;