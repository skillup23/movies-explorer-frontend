import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

function App() {
  const [isCardsLoading, setIsCardsLoading] = React.useState(false);

  const linksMovies = [
    {
      link: '/img/1.jpg'
    },
    {
      link: '/img/2.jpg'
    },
    {
      link: '/img/3.jpg'
    },
    {
      link: '/img/4.jpg'
    },
    {
      link: '/img/5.jpg'
    },
    {
      link: '/img/6.jpg'
    },
    {
      link: '/img/7.jpg'
    },
    {
      link: '/img/8.jpg'
    },
    {
      link: '/img/9.jpg'
    },
    {
      link: '/img/10.jpg'
    },
    {
      link: '/img/11.jpg'
    },
    {
      link: '/img/12.jpg'
    }
  ];

  const linksMoviesSave = [
    {
      link: '/img/1.jpg'
    },
    {
      link: '/img/2.jpg'
    },
    {
      link: '/img/3.jpg'
    }
  ];


  return (
    <div className="page__content">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies
            movies={linksMovies}
            isCardsLoading={isCardsLoading}
          />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies
            movies={linksMoviesSave}
            isCardsLoading={isCardsLoading}
          />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
