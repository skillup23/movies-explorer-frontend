import React from "react";
import './MoviesCard.css';
import { Route, Switch } from "react-router-dom";

function MoviesCard({ movie, addSaveMovie, deleteMovies }) {
  // const movieStyle = { backgroundImage: `url(https://api.nomoreparties.co${movie.image.url})` };
  const [isSaveMovie, setIsSaveMovie] = React.useState(false);

  function handleSaveMovie() {
    setIsSaveMovie(!isSaveMovie)
    addSaveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      movieId: movie.id
    })
  }

  function handleDeleteClick() {
    deleteMovies(movie.id || movie.movieId)
    setIsSaveMovie(!isSaveMovie)
  }

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    if (hours === 0) {
      return minutes + 'м.';
    } else {
      return hours + 'ч. ' + minutes + 'м.';
    }
  };

  return (
    <li className="movies-card">
      <h5 className="movies-card__title">
        {movie.nameRU}
      </h5>
      <p className="movies-card__time">
        {getTimeFromMins(movie.duration)}
      </p>
      <Switch>
        <Route exact path='/movies'>
          <a href={movie.trailerLink} target='_blank' rel="noreferrer" className='movies-card__link-trailer'>
            <img
              src={`https://api.nomoreparties.co${movie.image.url}`}
              alt='Фото фильма'
              className='movies-card__img'
            />
          </a>
          <button type="button"
            className={`movies-card__flag ${isSaveMovie ? "movies-card__flag_active" : "movies-card__flag_disactive"}`}
            onClick={isSaveMovie ? handleDeleteClick : handleSaveMovie}
          ></button>
        </Route>
        <Route path='/saved-movies'>
          <a href={movie.trailer} target='_blank' rel="noreferrer" className='movies-card__link-trailer'>
            <img
              src={movie.image}
              alt='Фото фильма'
              className='movies-card__img'
            />
          </a>
          <button type="button"
            className="movies-card__flag movies-card__delete"
            onClick={handleDeleteClick}
          ></button>
        </Route>
      </Switch>
    </li>
  )
}

export default MoviesCard;