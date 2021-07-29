import React from "react";
import './Footer.css';
import { Route, Switch } from "react-router-dom";

function Footer() {
  return (
    <Switch>
      <Route exact path='(/|/movies|/saved-movies)'>
        <footer className="footer page-section">
          <h6 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h6>
          <div className="footer__block">
            <p className="footer__copyright">&copy; {new Date().getFullYear()}. Роберт</p>
            <nav className="footer__links">
              <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
              <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">
                Github
              </a>
              <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </nav>
          </div>
        </footer>
      </Route>
      <Route path='/(signup|signin|profile)'>
        <footer className="footer footer__disable page-section">
        </footer>
      </Route>
      <Route path='*'>
        <footer className="footer footer__disable page-section">
        </footer>
      </Route>
    </Switch>
  )
}

export default Footer;