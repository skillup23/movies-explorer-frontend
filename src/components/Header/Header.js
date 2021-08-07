import React, { useState } from "react";
import logo from "../../images/logo.svg";
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Route, Link, Switch } from "react-router-dom";

function Header({ loggedIn }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Switch>
      <Route exact path='/'>
        {loggedIn
          ? <header
            className={`header page-section ${isMenuOpen ? "header__menu-open" : ""}`}>
            <Link to='/'>
              <img
                src={logo}
                alt='Логотип дипломной работы'
                className='logo header__logo'
              />
            </Link>
            <button
              className='header__burger'
              type='button'
              aria-label='меню'
              onClick={toggleMenu}
            ></button>
            <Navigation
              toggleMenu={toggleMenu}
            />
          </header>

          : <header className="header page-section">
            <Link to='/'>
              <img
                src={logo}
                alt='Логотип дипломной работы'
                className='logo header__logo'
              />
            </Link>
            <nav className="header__links-block">
              <Link className='header__auth-link header__link' to='signup'>
                Регистрация
              </Link>
              <Link className='header__auth-link header__link' to='signin'>
                <div className='header__login'>
                  Войти
                </div>
              </Link>
            </nav>
          </header>
        }
      </Route>
      <Route path='/(signup|signin)'>
        <header className="header__auth page-section">
          <Link to='/'>
            <img
              src={logo}
              alt='Логотип дипломной работы'
              className='logo header__logo header__logo-auth'
            />
          </Link>
          <h2 className="header__title-auth">
            Добро пожаловать!
          </h2>
        </header>
      </Route>
      <Route path='/(movies|saved-movies|profile)'>
        <header
          className={`header page-section 
        ${isMenuOpen ? "header__menu-open" : ""}`}>
          <Link to='/'>
            <img
              src={logo}
              alt='Логотип дипломной работы'
              className='logo header__logo'
            />
          </Link>
          <button
            className='header__burger'
            type='button'
            aria-label='меню'
            onClick={toggleMenu}
          ></button>
          <Navigation
            toggleMenu={toggleMenu}
          />
        </header>
      </Route>
      <Route path='*'>
        <header className="header__disable page-section">
        </header>
      </Route>
    </Switch>
  )
}

export default Header;