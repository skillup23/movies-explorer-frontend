import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { Route, Switch } from "react-router-dom";

function MoviesCardList({ isCardsLoading, isMoviesRender, disableButtonMore, showMoviesMore, addSaveMovie, deleteMovies, showMoviesAll }) {

  return (
    <section className="movies-card-list__section">
      {isCardsLoading && (
        <Preloader />
      )}
      {!isCardsLoading && (
        <ul className="movies-card-list">
          {isMoviesRender.map((movie) => (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              addSaveMovie={addSaveMovie}
              deleteMovies={deleteMovies}
            />
          ))}
        </ul >
      )}
      <Switch>
        <Route exact path='/movies'>
          <button type="button"
            className={disableButtonMore ? "movies-card-list__button-more" : "movies-card-list__button-more_disable"}
            onClick={showMoviesMore}>
            Ещё
          </button>
        </Route>
        <Route path='/saved-movies'>
          <button type="button"
            className={disableButtonMore ? "movies-card-list__button-more" : "movies-card-list__button-more_disable"}
            onClick={showMoviesAll}>
            Показать все
          </button>
        </Route>
      </Switch>
      {/* <button type="button"
        className={disableButtonMore ? "movies-card-list__button-more" : "movies-card-list__button-more_disable"}
        onClick={showMoviesMore}>
        Ещё
      </button> */}
    </section>
  )
}

export default MoviesCardList;