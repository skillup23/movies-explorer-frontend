import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project page-section" id="about-project">
      <h4 className="main-section__title about-project__title">
        О проекте
      </h4>
      <ul className="about-project__info">
        <li className="about-project__block">
          <h5 className="main-section__subtitle">
            Дипломный проект включал 5 этапов
          </h5>
          <p className="main-section__paragraph about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__block">
          <h5 className="main-section__subtitle">
            На выполнение диплома ушло 5 недель
          </h5>
          <p className="main-section__paragraph about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__time-line">
        <li className="about-project__time-line_blocks">
          <div className="about-project__time-line_block about-project__backend">
            1 неделя
          </div>
          <p className="about-project__tech-text">
            Back-end
          </p>
        </li>
        <li className="about-project__time-line_blocks">
          <div className="about-project__time-line_block about-project__frontend">
            4 недели
          </div>
          <p className="about-project__tech-text">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;