import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isCardsLoading }) {
  return (
    <section className="movies-card-list__section">
      {isCardsLoading && (
        <Preloader />
      )}
      {!isCardsLoading && (
        <ul className="movies-card-list">
          {movies.map((movie) => (
            <MoviesCard
              key={movie.link}
              movie={movie}
            />
          ))}
        </ul >
      )}
      <button type="button" className="movies-card-list__button-more">
        Ещё
      </button>
    </section>
  )
}

export default MoviesCardList;