import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import apiMovies from '../../utils/MoviesApi'

function Movies({ addSaveMovie, deleteMovies }) {
  const [moviesData, setMoviesData] = React.useState([]);
  const [searchWord, setSearchWord] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isErrorSearchMovies, setIsErrorSearchMovies] = React.useState(false);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);
  const [isCardsLoading, setIsCardsLoading] = React.useState(false);

  function onSetMovies(search) {
    setIsNotFoundMovies(false)
    setIsCardsLoading(true);
    setSearchWord(search)
    apiMovies.getMoviesList()
      .then((moviesData) => {
        setMoviesData(moviesData)
      })
      .catch((err) => {
        console.log(`Ошибка получения фильмов: ${err}`)
        setIsErrorSearchMovies(true)
        setIsNotFoundMovies(false)
      })
      .finally(() => setIsCardsLoading(false));
  }

  React.useEffect(() => {
    const arrayMovies = JSON.parse(localStorage.getItem('moviesFiltered'));
    // if (moviesData.length === 0 ) {
    if (arrayMovies !== null && moviesData.length === 0) {
      setMovies(arrayMovies)
      showFirstMovies(arrayMovies)
      getFilterMovies(arrayMovies)
    } else {
      getFilterMovies(moviesData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, moviesData])

  function getFilterMovies(moviesData) {
    if (!isChecked) {
      const moviesFiltered = moviesData.filter(function (item) {
        return item.nameRU.toLowerCase().includes(searchWord);
      });
      if (moviesFiltered.length === 0) {
        setIsNotFoundMovies(true)
      } else {
        setIsNotFoundMovies(false)
      }
      setMovies(moviesFiltered)
      showFirstMovies(moviesFiltered)
      localStorage.setItem('moviesFiltered', JSON.stringify(moviesFiltered));
    } else {
      const moviesShortFiltered = moviesData.filter(function (item) {
        return item.nameRU.toLowerCase().includes(searchWord) && item.duration <= 40;
      });
      if (moviesShortFiltered.length === 0) {
        setIsNotFoundMovies(true)
      } else {
        setIsNotFoundMovies(false)
      }
      setMovies(moviesShortFiltered)
      showFirstMovies(moviesShortFiltered)
    }
  }

  function onShortMovies(disable) {
    if (!disable) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }

  //Изменение количества карточек на кнопку Еще
  const [isDisableButtonMore, setIsDisableButtonMore] = React.useState(true);
  const [numberState, setNumberState] = React.useState(0);
  const [moviesRender, setMoviesRender] = React.useState([]);

  function showMoviesMore() {
    if (document.documentElement.clientWidth > 768) {
      renderNextMovies(3)
    } else {
      renderNextMovies(2)
    }
  }

  function renderNextMovies(n) {
    setNumberState(numberState + n)
    const nextMovies = movies.slice(0, n + numberState)
    setMoviesRender(nextMovies)
  }

  React.useEffect(() => {
    if (movies.length === moviesRender.length) {
      setIsDisableButtonMore(false)
    } else {
      setIsDisableButtonMore(true)
    }
  }, [movies.length, moviesRender.length, isDisableButtonMore]);

  function showFirstMovies(moviesFiltered) {
    if (document.documentElement.clientWidth > 768) {
      renderFirstMovies(12, moviesFiltered)
    } else if (document.documentElement.clientWidth < 480) {
      renderFirstMovies(5, moviesFiltered)
    } else {
      renderFirstMovies(8, moviesFiltered)
    }
  }

  function renderFirstMovies(n, moviesFiltered) {
    setNumberState(n)
    const firstMovies = moviesFiltered.slice(0, n)
    setMoviesRender(firstMovies)
  }

  return (
    <div className="movies page-section">
      <SearchForm
        onSetMovies={onSetMovies}
        onShortMovies={onShortMovies}
      />
      <MoviesCardList
        isCardsLoading={isCardsLoading}
        moviesRender={moviesRender}
        deleteMovies={deleteMovies}
        isDisableButtonMore={isDisableButtonMore}
        addSaveMovie={addSaveMovie}
        showMoviesMore={showMoviesMore}
        isErrorSearchMovies={isErrorSearchMovies}
        isNotFoundMovies={isNotFoundMovies}
      />
    </div >
  )
}

export default Movies;