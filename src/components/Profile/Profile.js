import React from "react";
import './Profile.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";

function Profile({ onSignOut, onUpdateUser, isPatchUser }) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [isDisableButton, setIsDisableButton] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email)
  }, [currentUser]);

  React.useEffect(() => {
    if (currentUser.name === name && currentUser.email === email) {
      setIsDisableButton(true)
    } else {
      setIsDisableButton(false)
    }
  }, [name, email, currentUser.name, currentUser.email]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      email: email,
    });
  }

  function signOut() {
    onSignOut();
  }

  return (
    <div className="profile page-section">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__block">
          <h6 className="profile__info_title">
            Имя
          </h6>
          <label className="profile-form__label">
            <input type="text" name="name" id="name"
              className="profile__info" value={name || ""} label="Имя"
              onChange={handleChangeName}
              required />
            <span className='auth-form__error' id='name-error'></span>
          </label>
        </div>
        <div className="profile__block">
          <h6 className="profile__info_title">
            E-mail
          </h6>
          <label className="profile-form__label">
            <input type="text" name="email" id="email"
              className="profile__info" value={email || ""} label="email"
              onChange={handleChangeEmail}
              required />
            <span className='auth-form__error' id='email-error'></span>
          </label>
        </div>
        <div className="profile__block">
          {isPatchUser &&
            <h6 className="profile__info-text">
              Профиль обновлен
            </h6>
          }
          <button
            className={`profile__link profile__button ${isDisableButton ? "profile__button_disable" : ""}`}
            type="submit">
            Редактировать
          </button>
        </div>
      </form>
      <Link className="profile__link" to="#" onClick={signOut}>
        Выйти из аккаунта
      </Link>
    </div >
  )
}

export default Profile;