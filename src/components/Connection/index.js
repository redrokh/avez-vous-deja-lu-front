// import from libraries
import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import styles
import './connection.scss';

const Connection = ({
  emailInput,
  passwordInput,
  onEmailInputChange,
  onPasswordInputChange,
  emailInputIsInvalid,
  passwordInputIsInvalid,
  emailInputError,
  passwordInputError,
  connectionFailed,
  connectionSucceeded,
  formValidation,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (connectionSucceeded) {
      history.push('/');
    }
  }, [connectionSucceeded]);

  return (
    <form
      className="Connection"
      onSubmit={(e) => {
        e.preventDefault();
        formValidation();
      }}
    >
      <h2 className="Connection__title">Se connecter</h2>

      {
        connectionFailed && (
          <div className="Connection__error-msg">
            Adresse email ou mot de passe incorrect
          </div>
        )
      }

      <div className="Connection__field">
        <input
          className="Connection__field-input"
          id="emailInput"
          value={emailInput}
          onChange={(e) => onEmailInputChange(e.target.value)}
          type="text"
          label="Nom d'utilisateur"
          placeholder="Adresse email"
          name="password"
          autoComplete="off"
          required
        />

        {
          emailInputIsInvalid && (
            <div className="Connection__field-error">
              { emailInputError }
            </div>
          )
        }
      </div>

      <div className="Connection__field">
        <input
          className="Connection__field-input"
          id="passwordInput"
          value={passwordInput}
          onChange={(e) => {
            onPasswordInputChange(e.target.value);
          }}
          type="password"
          label="Mot de passe"
          placeholder="Mot de passe"
          name="password"
          required
        />

        {
          passwordInputIsInvalid && (
            <span className="Connection__field-error">
              { passwordInputError }
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
};
export default Connection;
