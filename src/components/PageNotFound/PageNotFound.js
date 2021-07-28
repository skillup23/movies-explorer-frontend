import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <section className="not-found page-section">
      <h2 className="not-found__title">
       404
      </h2>
      <h3 className="not-found__subtitle">
        Страница не найдена
      </h3>
      <Link className="not-found__button" to="/">Назад</Link>
    </section>
  )
}

export default PageNotFound; 