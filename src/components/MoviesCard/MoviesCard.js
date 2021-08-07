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
      // movieId: movie._id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      // country: "test3",
      // director: "test3",
      // duration: 12,
      // year: "1991",
      // description: "test3",
      // image: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      // trailer: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      // thumbnail: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      // nameRU: "тест3",
      // nameEN: "test3",
      movieId: "554333"
    })
  }

  function handleDeleteClick() {
    deleteMovies(movie._id)
  }

  return (
    <li className="movies-card">
      <h5 className="movies-card__title">
        {/* 33 слова о дизайне */}
        {movie.nameRU}
      </h5>
      <p className="movies-card__time">
        {/* 1ч 47м */}
        {movie.duration} м
      </p>
      <Switch>
        <Route exact path='/movies'>
          <img
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt='Фото фильма'
            className='movies-card__img'
          />
          <button type="button"
            className={`movies-card__flag ${isSaveMovie ? "movies-card__flag_active" : "movies-card__flag_disactive"}`}
            onClick={handleSaveMovie}
          ></button>
        </Route>
        <Route path='/saved-movies'>
          <img
            src={movie.image}
            alt='Фото фильма'
            className='movies-card__img'
          />
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


      // {/* <div
      //   style={movieStyle}
      //   className="movies-card__img"
      // ></div> */}