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
import * as mainApi from '../../utils/MainApi';


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAuthChecking, setIsAuthChecking] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [saveUsersMovies, setSaveUsersMovies] = React.useState([]);
  const [isErrorSearchMovies, setIsErrorSearchMovies] = React.useState(false);
  const [isPatchUser, setIsPatchUser] = React.useState(false);
  const history = useHistory();


  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi.getUserInfo(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(err => console.log(`Загрузка информации о пользователе: ${err}`));

      mainApi.getSaveMovies(token)
        .then((res) => {
          const saveMovies = res.filter(function (item) {
            return item.owner === currentUser._id
          })
          setSaveUsersMovies(saveMovies)
        }).catch((err) => {
          console.log(`Ошибка получения сохраненных фильмов: ${err}`)
          setIsErrorSearchMovies(true)
        })
    }
  }, [currentUser._id, isLoggedIn]);

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
        setIsAuthChecking(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onUpdateUser({ name, email }) {
    const token = localStorage.getItem('jwt');
    mainApi.setUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res);
        setIsPatchUser(true)
      })
      .catch(err => console.log(`Ошибка передачи данных пользователя ${err}`))
      .finally(() => {
        setTimeout(() => setIsPatchUser(false), 2000);
      });
  }


  function onSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setIsAuthChecking(false);
    setCurrentUser({});
    localStorage.setItem('moviesFiltered', JSON.stringify([]));
    history.push('/');
  }

  // проверка, что пользователь уже авторизован
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getUserInfo(token)
        .then(() => {
          setIsAuthChecking(true)
          setIsLoggedIn(true)
          // history.push('/movies');
        })
        .catch(() => {
          localStorage.removeItem('jwt');
        })
    } else {
      setIsAuthChecking(false)
      setIsLoggedIn(false)
    }
  }, [history]);

  //сохранение фильма
  function saveNewMovies(data) {
    const token = localStorage.getItem('jwt');
    mainApi.saveMovies(data, token)
      .then((dataMovies) => {
        setSaveUsersMovies((state) => [
          dataMovies,
          ...state,
        ]);
      })
      .catch(err => console.log(`Ошибка добавление фильма: ${err}`))
  }

  //удаление фильма
  function deleteMovies(id) {
    const array = saveUsersMovies.find(item => item.movieId === id)
    const token = localStorage.getItem('jwt');
    mainApi.deleteMovies(array._id, token).then(() => {
      setSaveUsersMovies((saveMovies) => saveMovies.filter((movie) => movie._id !== array._id)
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
            authChecking={isAuthChecking}
            addSaveMovie={saveNewMovies}
            deleteMovies={deleteMovies}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={isLoggedIn}
            authChecking={isAuthChecking}
            saveMovies={saveUsersMovies}
            deleteMovies={deleteMovies}
            isErrorSearchMovies={isErrorSearchMovies}
            component={SavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={isLoggedIn}
            authChecking={isAuthChecking}
            onSignOut={onSignOut}
            onUpdateUser={onUpdateUser}
            isPatchUser={isPatchUser}
            component={Profile}
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