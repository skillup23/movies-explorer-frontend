import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSetMovies, onShortMovies }) {
  const [seach, setSeach] = React.useState('');
  

  function handleChangeSearch(e) {
    setSeach(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSetMovies(seach.toLowerCase());
  }

  return (
    <div className="searchform">
      <form
        className="searchform__form"
        onSubmit={handleSubmit}
      >
        <label className="searchform__input">
          <input
            type="search"
            name="seach"
            id="seach"
            className="searchform__textfield"
            placeholder="Фильм"
            label="Имя"
            value={seach || ''}
            onChange={handleChangeSearch}
            required
          />
          <span className='searchform__error' id='searchform-error'>
            {/* Что-то пошло не так... */}
          </span>
        </label>
        <button
          className="searchform__button"
          type="submit"
        >Найти
        </button>
      </form >
      <div className="searchform__checkbox">
        <FilterCheckbox 
          onShortMovies={onShortMovies}
        />
        <h5 className="searchform__checkbox-title">Короткометражки</h5>
      </div>
    </div>
  )
}

export default SearchForm;