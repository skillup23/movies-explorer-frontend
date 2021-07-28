import React from "react";
import arroylink from "../../images/link-arroy.png";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio page-section">
      <h4 className="portfolio__title">
        Портфолио
      </h4>
      <div className="portfolio__block">
        <a className="portfolio__link" href="https://skillup23.github.io/how-to-learn">
          Статичный сайт
        </a>
        <a className="portfolio__link" href="https://skillup23.github.io/how-to-learn">
          <img
            src={arroylink}
            alt='Статичный сайт'
            className='portfolio__link-arroy'
          />
        </a>
      </div>
      <div className="portfolio__block">
        <a className="portfolio__link" href="https://skillup23.github.io/russian-travel">
          Адаптивный сайт
        </a>
        <a className="portfolio__link-arroy-block" href="https://skillup23.github.io/russian-travel">
          <img
            src={arroylink}
            alt='Статичный сайт'
            className='portfolio__link-arroy'
          />
        </a>
      </div>
      <div className="portfolio__block">
        <a className="portfolio__link" href="https://robert.students.nomoredomains.monster/">
          Одностраничное приложение
        </a>
        <a className="portfolio__link" href="https://robert.students.nomoredomains.monster/">
          <img
            src={arroylink}
            alt='Статичный сайт'
            className='portfolio__link-arroy'
          />
        </a>
      </div>
    </section>
  )
}

export default Portfolio;