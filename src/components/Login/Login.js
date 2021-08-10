import React from "react";
import './Login.css';
import '../Form/Form.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useForm";

function Login({ onLogin }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, resetFrom, errors, isValid } = useFormWithValidation();

  React.useEffect(() => {
    if (!currentUser) {
      resetFrom(currentUser, {}, true);
    }
  }, [currentUser, resetFrom]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
    // console.log(values)
  }

  return (
    <div className="login page-section">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h6 className="auth-form__label">
            E-mail
          </h6>
          <label className="auth-form__input">
            <input type="email"
              name="email"
              id="email"
              className="auth-form__textfield"
              placeholder=""
              label="Email"
              value={values.email || ""}
              onChange={handleChange}
              required />
            <span className='auth-form__error' id='email-error'>
              {/* Что-то пошло не так... */}
              {errors.email || ""}
            </span>
          </label>
          <h6 className="auth-form__label">
            Пароль
          </h6>
          <label className="auth-form__input">
            <input type="password"
              name="password"
              id="password"
              className="auth-form__textfield"
              placeholder=""
              label="Пароль"
              value={values.password || ""}
              onChange={handleChange}
              required />
            <span className='auth-form__error' id='password-error'>
              {/* Что-то пошло не так... */}
              {errors.password || ""}
            </span>
          </label>
        </div>
        <div className="auth-form__wrapper">
          <button className={`auth-form__button ${!isValid && "auth-form__button_disabled"}`}
            type="submit">
            Войти
          </button>
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

  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  // function handleEmailChange(evt) {
  //   setEmail(evt.target.value)
  // }

  // function handlePasswordChange(evt) {
  //   setPassword(evt.target.value)
  // }