import { useHistory } from 'react-router-dom';
// import styles
import './registration.scss';

const Registration = ({
  pseudoInput,
  emailInput,
  passwordInput,
  onPseudoChange,
  onEmailChange,
  onPasswordChange,
  formValidation,
  registrationError,
  pseudoError,
  emailError,
  passwordError,
  pseudoIsInvalid,
  emailIsInvalid,
  passwordIsInvalid,
  registrationFailed,
  registrationSucceeded,
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
          onChange={(e) => onPseudoChange(e.target.value)}
          type="text"
          label="Pseudo"
          placeholder="Pseudo"
          name="pseudo"
          required
        />

        {
          pseudoIsInvalid && (
            <span className="Registration__field-error">
              { pseudoError }
            </span>
          )
        }
      </div>

      <div className="Registration__field">
        <input
          className="Registration__field-input"
          id="emailInput"
          value={emailInput}
          onChange={(e) => onEmailChange(e.target.value)}
          type="text"
          label="Nom d'utilisateur"
          placeholder="Adresse email"
          name="username"
          required
        />

        {
          emailIsInvalid && (
            <span className="Registration__field-error">
              { emailError }
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
            onPasswordChange(e.target.value);
          }}
          type="text"
          label="Mot de passe"
          placeholder="Mot de passe"
          name="password"
          required
        />

        {
          passwordIsInvalid && (
            <span className="Registration__field-error">
              { passwordError }
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
