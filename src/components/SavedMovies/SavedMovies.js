import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isCardsLoading, saveMovies, deleteMovies, isErrorSearchMovies }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  // const [isSearch, setIsSearch] = React.useState('');
  const [isMoviesRender, setIsMoviesRender] = React.useState([]);
  const [disableButtonMore, setDisableButtonMore] = React.useState(false);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);

  function onSetMovies(search) {
    setIsNotFoundMovies(false)
    setIsFilter(true)
    if (!isChecked) {
      const moviesFiltered = saveMovies.filter(function (item) {
        return item.nameRU.toLowerCase().includes(search);
      });
      if (moviesFiltered.length === 0) {
        setIsNotFoundMovies(true)
      } else {
        setIsNotFoundMovies(false)
      }
      setIsMoviesRender(moviesFiltered)
    } else {
      const moviesShortFiltered = saveMovies.filter(function (item) {
        return item.nameRU.toLowerCase().includes(search) && item.duration <= 40;
      });
      if (moviesShortFiltered.length === 0) {
        setIsNotFoundMovies(true)
      } else {
        setIsNotFoundMovies(false)
      }
      setIsMoviesRender(moviesShortFiltered)
    }
    setDisableButtonMore(true)
  }

  function onShortMovies(disable) {
    if (!disable) {
      setIsChecked(true)
      setIsFilter(true)
      getShortMovies()
    } else {
      setIsChecked(false)
      setIsFilter(false)
    }
  }

  function getShortMovies() {
    const moviesShortFiltered = saveMovies.filter(function (item) {
      return item.duration <= 40;
    });
    setIsMoviesRender(moviesShortFiltered)
  }

  function showMoviesAll() {
    setDisableButtonMore(false)
    setIsFilter(false)
    setIsNotFoundMovies(false)
  }

  return (
    <div className="saved-movies page-section">
      <SearchForm
        onSetMovies={onSetMovies}
        onShortMovies={onShortMovies}
      />
      <MoviesCardList
        // isMoviesRender={saveMovies}
        isMoviesRender={isFilter ? isMoviesRender : saveMovies}
        isCardsLoading={isCardsLoading}
        deleteMovies={deleteMovies}
        disableButtonMore={disableButtonMore}
        isErrorSearchMovies={isErrorSearchMovies}
        isNotFoundMovies={isNotFoundMovies}
        showMoviesAll={showMoviesAll}
      // addSaveMovie={addSaveMovie}
      />
    </div >
  )
}

export default SavedMovies;