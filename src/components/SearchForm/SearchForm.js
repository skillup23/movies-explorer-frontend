import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="searchform">
      <form className="searchform__form">
        <label className="searchform__input">
          <input type="search" name="seach" id="seach"
            className="searchform__textfield" placeholder="Фильм" label="Имя"
            required />
          <span className='searchform__error' id='searchform-error'>
            {/* Что-то пошло не так... */}
          </span>
        </label>
        <button className="searchform__button" type="submit">Найти</button>
      </form >
      <div className="searchform__checkbox">
        <FilterCheckbox />
        <h5 className="searchform__checkbox-title">Короткометражки</h5>
      </div>
    </div>
  )
}

export default SearchForm;