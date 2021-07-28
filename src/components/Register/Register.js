import React from "react";
import './Register.css';
import '../Form/Form.css';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register page-section">
      <form className="auth-form">
        <div className="auth-form__wrapper">
          <h6 className="auth-form__label">
            Имя
          </h6>
          <label className="auth-form__input">
            <input type="text" name="name" id="name"
              className="auth-form__textfield" placeholder="" label="Имя"
              required />
            <span className='auth-form__error' id='name-error'>
              {/* Что-то пошло не так... */}
            </span>
          </label>
          <h6 className="auth-form__label">
            E-mail
          </h6>
          <label className="auth-form__input">
            <input type="email" name="email" id="email"
              className="auth-form__textfield" placeholder="" label="Email"
              required />
            <span className='auth-form__error' id='email-error'>
              {/* Что-то пошло не так... */}
            </span>
          </label>
          <h6 className="auth-form__label">
            Пароль
          </h6>
          <label className="auth-form__input">
            <input type="password" name="password" id="password"
              className="auth-form__textfield" placeholder="" label="Пароль"
              required />
            <span className='auth-form__error' id='password-error'>
              {/* Что-то пошло не так... */}
            </span>
          </label>
        </div>
        <div className="auth-form__wrapper">
          <button className="auth-form__button" type="submit">Зарегистрироваться</button>
          <p className="auth-form__text">
            Уже зарегистрированы?&nbsp;
            <Link className="auth-form__link" to="/signin">Войти</Link>
          </p>
        </div>
      </form>
    </div >
  )
}

export default Register;