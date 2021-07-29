import React from "react";
import './Login.css';
import '../Form/Form.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login page-section">
      <form className="auth-form">
        <div className="auth-form__wrapper">
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
          <button className="auth-form__button" type="submit">Войти</button>
          <p className="auth-form__text">
            Еще не зарегистрированы?&nbsp;
            <Link className="auth-form__link" to="/signup">Регистрация</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;