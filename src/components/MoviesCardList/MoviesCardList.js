import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { Route, Switch } from "react-router-dom";

function MoviesCardList({ isCardsLoading, isMoviesRender, disableButtonMore, showMoviesMore, addSaveMovie, deleteMovies, showMoviesAll, isErrorSearchMovies, isNotFoundMovies }) {

  return (
    <section className="movies-card-list__section">
      {isNotFoundMovies &&
        <h2 className="movies-card-list__text">
          Ничего не найдено
        </h2>
      }
      {isErrorSearchMovies &&
        <h2 className="movies-card-list__text">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
        </h2>
      }
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