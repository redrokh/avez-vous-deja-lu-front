// import from libraries
import { NavLink } from 'react-router-dom';
// import styles
import './connection.scss';

const Connection = ({
  emailInput,
  passwordInput,
  onEmailChange,
  onPasswordChange,
  logInRequest,
  formValidation,
  emailIsValid,
  emailError,
  passwordIsValid,
  passwordError,
  logInFailed,
}) => (
  <form
    className="Connection"
    onSubmit={(e) => {
      e.preventDefault();
      formValidation();
    }}
  >
    <h2 className="Connection__title">Se connecter</h2>

    {
      logInFailed && (
        <div>
          Adresse email ou mot de passe incorrect
        </div>
      )
    }

    <div className="Connection__field">
      <input
        className="Connection__field-input"
        id="emailInput"
        value={emailInput}
        onChange={(e) => onEmailChange(e.target.value)}
        type="text"
        label="Nom d'utilisateur"
        placeholder="Adresse email"
        name="username"
        required
      />

      {/* <label
        className="Connection__field-label"
        htmlFor="emailInput"
      >
        Adresse email
      </label> */}

      {
        !emailIsValid && (
          <span className="Connection__field-error">
            { emailError }
          </span>
        )
      }
    </div>

    <div className="Connection__field">
      <input
        className="Connection__field-input"
        id="passwordInput"
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

      {/* <label
        className="Connection__field-label"
        htmlFor="passwordInput"
      >
        Mot de passe
      </label> */}

      {
        !passwordIsValid && (
          <span className="Connection__field-error">
            { passwordError }
          </span>
        )
      }
    </div>

    <p className="Connection__registration-msg">Vous n'avez pas de compte ? Je m'en <NavLink className="Connection__registration-link" to="/inscription" exact> crée</NavLink> un. </p>

    <div className="Connection__submit-container">
      <button className="Connection__submit-button" type="submit">Se Connecter</button>
    </div>
  </form>

);

export default Connection;
