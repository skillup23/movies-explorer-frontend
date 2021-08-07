import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import apiMovies from '../../utils/MoviesApi'

function Movies({ addSaveMovie }) {
  const [isMoviesData, setIsMoviesData] = React.useState([]);
  const [isSearch, setIsSearch] = React.useState('');
  const [isMovies, setIsMovies] = React.useState([]);
  // const [isShortMovies, setIsShortMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isCardsLoading, setIsCardsLoading] = React.useState(false);

  function onSetMovies(search) {
    setIsCardsLoading(true);
    setIsSearch(search)
      apiMovies.getMoviesList()
        .then((moviesData) => {
          setIsMoviesData(moviesData)
        })
        .catch(err => console.log(`Ошибка получения фильмов: ${err}`))
        .finally(() => setIsCardsLoading(false));
  }

  // console.log(isMovies)

  React.useEffect(() => {
    getFilterMovies(isMoviesData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, isMoviesData])

  function getFilterMovies(moviesData) {
    if (!isChecked) {
      const moviesFiltered = moviesData.filter(function (item) {
        return item.nameRU.toLowerCase().includes(isSearch);
      });
      setIsMovies(moviesFiltered)
      showFirstMovies(moviesFiltered)
    } else {
      const moviesShortFiltered = moviesData.filter(function (item) {
        return item.nameRU.toLowerCase().includes(isSearch) && item.duration <= 40;
      });
      setIsMovies(moviesShortFiltered)
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
  const [disableButtonMore, setDisableButtonMore] = React.useState(true);
  const [numberState, setNumberState] = React.useState(0);
  const [isMoviesRender, setIsMoviesRender] = React.useState([]);

  function showMoviesMore() {
    if (document.documentElement.clientWidth > 768) {
      renderNextMovies(3)
    } else {
      renderNextMovies(2)
    }
  }

  function renderNextMovies(n) {
    setNumberState(numberState + n)
    const nextMovies = isMovies.slice(0, n + numberState)
    setIsMoviesRender(nextMovies)
  }

  React.useEffect(() => {
    if (isMovies.length === isMoviesRender.length) {
      setDisableButtonMore(false)
    } else {
      setDisableButtonMore(true)
    }
  }, [isMovies.length, isMoviesRender.length, disableButtonMore]);

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
    setIsMoviesRender(firstMovies)
  }

  return (
    <div className="movies page-section">
      <SearchForm
        onSetMovies={onSetMovies}
        onShortMovies={onShortMovies}
      />
      <MoviesCardList
        isCardsLoading={isCardsLoading}
        // isMoviesRender={isChecked ? isShortMovies : isMoviesRender}
        isMoviesRender={isMoviesRender}
        disableButtonMore={disableButtonMore}
        addSaveMovie={addSaveMovie}
        showMoviesMore={showMoviesMore}
      />
    </div >
  )
}

export default Movies;



  // прелоадер
  // const [isCardsLoading, setIsCardsLoading] = React.useState(false);

  // function onSetMovies(search) {
  //   setIsCardsLoading(true);
  //   apiMovies.getMoviesList()
  //     .then((moviesData) => {
  //       if (isChecked === false) {
  //         const moviesFiltered = moviesData.filter(function (item) {
  //           return item.nameRU.toLowerCase().includes(search);
  //         });
  //         setIsMovies(moviesFiltered);
  //         setIsChecked(false)
  //       } else {
  //         const moviesFiltered = moviesData.filter(function (item) {
  //           return item.nameRU.toLowerCase().includes(search) && item.duration <= 40;
  //         });
  //         setIsMovies(moviesFiltered);
  //         setIsChecked(true)
  //       }
  //     })
  //     .catch(err => console.log(err))
  //     .finally(() => setIsCardsLoading(false));
  // }


    // React.useEffect(() => {
  //   setDisableButtonMore(true)
  //   if (document.documentElement.clientWidth > 768) {
  //     renderFirstMovies(3)
  //   } else {
  //     renderFirstMovies(2)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isMovies]);