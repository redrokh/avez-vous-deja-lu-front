import { useHistory } from 'react-router-dom';
// import styles
import './registration.scss';

const Registration = ({
  pseudoInput,
  emailInput,
  passwordInput,
  onPseudoInputChange,
  onEmailInputChange,
  onPasswordInputChange,
  pseudoInputIsInvalid,
  emailInputIsInvalid,
  passwordInputIsInvalid,
  pseudoInputError,
  emailInputError,
  passwordInputError,
  registrationError,
  registrationFailed,
  registrationSucceeded,
  formValidation,
}) => {
  const history = useHistory();

  if (registrationSucceeded) {
    return (
      <section>
        <div>
          Inscription réussie. Pour vous connecter cliquer <span onClick={() => history.push('/connexion')}>ici</span>.
        </div>
      </section>
    );
  }

  return (
    <form
      className="Registration"
      onSubmit={(e) => {
        e.preventDefault();
        formValidation();
      }}
    >
      <h2 className="Registration__title">Je m'inscris</h2>

      {
        registrationFailed && (
          <div>
            { registrationError }
          </div>
        )
      }

      <div className="Registration__field">
        <input
          className="Registration__field-input"
          id="pseudoInput"
          value={pseudoInput}
          onChange={(e) => onPseudoInputChange(e.target.value)}
          type="text"
          label="Pseudo"
          placeholder="Pseudo"
          name="pseudo"
          required
        />

        {
          pseudoInputIsInvalid && (
            <span className="Registration__field-error">
              { pseudoInputError }
            </span>
          )
        }
      </div>

      <div className="Registration__field">
        <input
          className="Registration__field-input"
          id="emailInput"
          value={emailInput}
          onChange={(e) => onEmailInputChange(e.target.value)}
          type="text"
          label="Nom d'utilisateur"
          placeholder="Adresse email"
          name="username"
          required
        />

        {
          emailInputIsInvalid && (
            <span className="Registration__field-error">
              { emailInputError }
            </span>
          )
        }
      </div>

      <div className="Registration__field">
        <input
          className="Registration__field-input"
          id="passwordInput"
          value={passwordInput}
          onChange={(e) => {
            onPasswordInputChange(e.target.value);
          }}
          type="password"
          label="Mot de passe"
          placeholder="Mot de passe"
          name="password"
          autoComplete="off"
          required
        />

        {
          passwordInputIsInvalid && (
            <span className="Registration__field-error">
              { passwordInputError }
            </span>
          )
        }
      </div>

      <div className="Registration__submit-container">
        <button className="Registration__submit-button" type="submit">S'inscrire</button>
      </div>
    </form>

  );
};

export default Registration;
