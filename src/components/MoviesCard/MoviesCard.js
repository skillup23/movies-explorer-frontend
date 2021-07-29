import React from "react";
import './MoviesCard.css';
import { Route, Switch } from "react-router-dom";

function MoviesCard({ movie }) {
  const movieStyle = { backgroundImage: `url(${movie.link})` };
  const [isSaveMovie, setIsSaveMovie] = React.useState(false);

  function toggleSaveMovie() {
    setIsSaveMovie(!isSaveMovie)
  }
  return (
    <li className="movies-card">
      <h5 className="movies-card__title">
        33 слова о дизайне
      </h5>
      <p className="movies-card__time">
        1ч 47м
      </p>
      <div
        style={movieStyle}
        className="movies-card__img"
      ></div>
      <Switch>
        <Route exact path='/movies'>
          <button type="button"
            className={`movies-card__flag ${isSaveMovie ? "movies-card__flag_active" : "movies-card__flag_disactive"}`}
            onClick={toggleSaveMovie}
          ></button>
        </Route>
        <Route path='/saved-movies'>
          <button type="button"
            className="movies-card__flag movies-card__delete"
          ></button>
        </Route>
      </Switch>
    </li>
  )
}

export default MoviesCard;


