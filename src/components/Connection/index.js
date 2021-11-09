// import from libraries
import { NavLink } from 'react-router-dom';
// import styles
import './connection.scss';

const Connection = ({
  emailInput,
  passwordInput,
  onEmailChange,
  onPasswordChange,
  logInRequest
}) => (

  <form
    className="connection__form"
    onSubmit={(e) => {
      console.log('submitting form...');
      e.preventDefault();
      logInRequest();
    }}
  >
    <h1 className="connection__main--title">Se connecter</h1>

    <input
      className="form__input"
      value={emailInput}
      onChange={(e) => onEmailChange(e.target.value)}
      type="text"
      label="Nom d'utilisateur"
      placeholder="Nom d'utilisateur"
      name="username"
      required
    />
    <input
      className="form__input"
      value={passwordInput}
      onChange={(e) => {
        onPasswordChange(e.target.value);
      }}
      type="text"
      label="Mot de passe"
      placeholder="Mot de passe"
      name="password"
      required
    />

    <p className="link__inscription">Vous n'avez pas de compte ? Je m'en <NavLink className="link__inscription__form" to="/inscription" exact> crée</NavLink> un. </p>

    <div className="button_submit">
      <button className="submit" type="submit">Se Connecter</button>
    </div>
  </form>

);

export default Connection;
