import React from "react";
import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="page-section">
        <h4 className="main-section__title techs__title ">
          Технологии
        </h4>
        <div className="techs__info-block">
          <h3 className="techs__subtitle">
            7 технологий
          </h3>
          <p className="main-section__paragraph techs__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className="techs__blocks">
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                HTML
              </p>
            </li>
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                CSS
              </p>
            </li>
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                JS
              </p>
            </li>
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                React
              </p>
            </li>
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                Git
              </p>
            </li>
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                Express.js
              </p>
            </li>
            <li className="techs__block main-section__paragraph">
              <p className="techs__text">
                mongoDB
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs;