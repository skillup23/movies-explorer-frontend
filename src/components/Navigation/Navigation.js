import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation({ toggleMenu }) {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="navigation__hidden"></div>
        <nav className="navigation__links-block">
          <NavLink
            className='navigation__link navigation__link-main'
            to='/'
            onClick={toggleMenu}
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName="navigation__link_active"
            className='navigation__link'
            to='movies'
            onClick={toggleMenu}>
            Фильмы
          </NavLink>
          <NavLink
            activeClassName="navigation__link_active"
            className='navigation__link'
            to='saved-movies'
            onClick={toggleMenu}>
            Сохраненные фильмы
          </NavLink>
        </nav>
        <NavLink
          activeClassName="navigation__account-block_active"
          className="navigation__account-block"
          to='/profile'
          onClick={toggleMenu}>
          <p className="navigation__account-text">Аккаунт</p>
          <div className="navigation__account-logo"></div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation;