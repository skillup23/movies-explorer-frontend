import React from "react";
import avatar from "../../images/avatar.jpg";
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me page-section" id="about-me">
      <h4 className="main-section__title about-me__title">
        Студент
      </h4>
      <div className="about-me__block-info">
        <div className="about-me__block-text">
          <h3 className="about-me__name">
            Роберт
          </h3>
          <h4 className="about-me__prof">
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social-links">
            <li>
              <a className="about-me__social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li>
              <a className="about-me__social-link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img
          src={avatar}
          alt='Аватарка'
          className='about-me__block-avatar'
        />
      </div>
    </section>
  )
}

export default AboutMe;