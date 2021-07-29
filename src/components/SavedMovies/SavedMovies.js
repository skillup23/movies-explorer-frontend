import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies, isCardsLoading }) {
  return (
    <div className="saved-movies page-section">
      <SearchForm />
      <MoviesCardList 
        movies={movies}
        isCardsLoading={isCardsLoading}
      />
    </div >
  )
}

export default SavedMovies;