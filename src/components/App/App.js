import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../context/CurrentUserContext';
// import apiMovies from '../../utils/MoviesApi'
import * as mainApi from '../../utils/MainApi';


function App() {
  // const [isCardsLoading, setIsCardsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  // const [isMoviesData, setIsMoviesData] = React.useState([]);
  const [isSaveMovies, setIsSaveMovies] = React.useState([]);
  // const [isCardsLoading, setIsCardsLoading] = React.useState(false);
  const history = useHistory();

  // console.log(currentUser)

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi.getUserInfo(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(err => console.log(`Загрузка информации о пользователе: ${err}`));

      // setIsCardsLoading(true);
      // apiMovies.getMoviesList()
      //   .then((moviesData) => {
      //     setIsMoviesData(moviesData)
      //   })
      //   .catch(err => console.log(`Ошибка получения фильмов: ${err}`))
      //   .finally(() => setIsCardsLoading(false));

      mainApi.getSaveMovies(token)
        .then((res) => {
          const saveMovies = res.filter(function (item) {
            return item.owner === currentUser._id
          })
          setIsSaveMovies(saveMovies)
        }).catch(err => console.log(`Ошибка получения сохраненных фильмов: ${err}`))
    }
  }, [currentUser._id, isLoggedIn]);

  // console.log(isSaveMovies)

  //регистрация, авторизация, обновление пользователя, выход
  function onRegister({ name, email, password }) {
    mainApi.register(name, email, password)
      .then(() => {
        onLogin({ email, password })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onLogin({ email, password }) {
    mainApi.login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onUpdateUser({ name, email }) {
    const token = localStorage.getItem('jwt');
    mainApi.setUserInfo(name, email, token).then((res) => {
      setCurrentUser(res);
    }).catch(err => console.log(`Ошибка передачи данных пользователя ${err}`))
  }


  function onSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  }

  // проверка, что пользователь уже авторизован
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoggedIn(true);
      mainApi.getUserInfo(token)
        .then(() => {
          setIsLoggedIn(true);
          // history.push('/movies');
        })
        .catch(() => {
          localStorage.removeItem('jwt');
        })
      // .finally(() => setIsAuthChecking(false));
    } else {
      setIsLoggedIn(false)
    }
  }, [history]);

  //сохранение фильма
  function saveNewMovies(data) {
    const token = localStorage.getItem('jwt');
    mainApi.saveMovies(data, token)
      .then((dataMovies) => {
        setIsSaveMovies((state) => [
          dataMovies,
          ...state,
        ]);
      })
      .catch(err => console.log(`Ошибка добавление фильма: ${err}`))
  }

  //удаление фильма
  function deleteMovies(id) {
    const token = localStorage.getItem('jwt');
    mainApi.deleteMovies(id, token).then(() => {
      setIsSaveMovies((saveMovies) => saveMovies.filter((movie) => movie._id !== id)
      )
    }).catch(err => console.log(`Ошибка удаления фильма: ${err}`))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header
          loggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={isLoggedIn}
            addSaveMovie={saveNewMovies}
            // moviesData={isMoviesData}
            // isCardsLoading={isCardsLoading}
            component={Movies}
          // isCardsLoading={isCardsLoading}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={isLoggedIn}
            saveMovies={isSaveMovies}
            deleteMovies={deleteMovies}
            // addSaveMovie={saveNewMovies}
            component={SavedMovies}
          // isCardsLoading={isCardsLoading}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={isLoggedIn}
            onSignOut={onSignOut}
            onUpdateUser={onUpdateUser}
            component={Profile}
          // isCardsLoading={isCardsLoading}
          />
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


  // const linksMovies = [
  //   {
  //     link: '/img/1.jpg'
  //   },
  //   {
  //     link: '/img/2.jpg'
  //   },
  //   {
  //     link: '/img/3.jpg'
  //   },
  //   {
  //     link: '/img/4.jpg'
  //   },
  //   {
  //     link: '/img/5.jpg'
  //   },
  //   {
  //     link: '/img/6.jpg'
  //   },
  //   {
  //     link: '/img/7.jpg'
  //   },
  //   {
  //     link: '/img/8.jpg'
  //   },
  //   {
  //     link: '/img/9.jpg'
  //   },
  //   {
  //     link: '/img/10.jpg'
  //   },
  //   {
  //     link: '/img/11.jpg'
  //   },
  //   {
  //     link: '/img/12.jpg'
  //   }
  // ];

  // const linksMoviesSave = [
  //   {
  //     link: '/img/1.jpg'
  //   },
  //   {
  //     link: '/img/2.jpg'
  //   },
  //   {
  //     link: '/img/3.jpg'
  //   }
  // ];

    // function onSetMovies(search) {
  //   apiMovies.getMoviesList()
  //   .then((moviesData) => {
  //     const moviesFiltered = moviesData.filter(function (item) {
  //       return item.nameRU.toLowerCase().includes(search);
  //     });
  //     setIsMovies(moviesFiltered);
  //     })
  //   .catch(err => console.log(err))
  // }

  // test()

  // const testUrl = isMovies.images.url
  // console.log("isMovies")

  // const moviesFiltered = movies.filter(function (item) {
  //   return item.includes('2018');
  // });


    //получение всех фильмов
  // React.useEffect(() => {
  //   if (!isLoggedIn) {
  //     console.log('нет данных')
  //   } else {

  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoggedIn])

  //получение сохраненных фильмов
  // React.useEffect(() => {
  //   const token = localStorage.getItem('jwt');
  //   mainApi.getSaveMovies(token)
  //     .then((res) => {
  //       const saveMovies = res.filter(function (item) {
  //         return item.owner === currentUser._id
  //       })
  //       setIsSaveMovies(saveMovies)
  //       console.log(saveMovies)
  //     }).catch(err => console.log(`Ошибка получения фильмов: ${err}`))
  // }, [currentUser._id, isMoviesData])
  // function getSaveMovies() {
  //   const token = localStorage.getItem('jwt');
  //   mainApi.getSaveMovies(token)
  //     .then((res) => {
  //       const saveMovies = res.filter(function (item) {
  //         return item.owner === currentUser._id
  //       })
  //       setIsSaveMovies(saveMovies)
  //       console.log(saveMovies)
  //     }).catch(err => console.log(`Ошибка получения фильмов: ${err}`))
  // }