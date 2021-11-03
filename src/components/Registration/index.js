// import libraries

// import styles
import './registration.scss';

const Registration = () => (

  <div className="connection__form">
    <h1 className="connection__main--title">Je m'inscris</h1>

    <input className="form__input" type="text" label="Nom d'utilisateur" placeholder="Nom d'utilisateur" name="username" required />
    <input className="form__input" type="text" label="Email" placeholder="Email" name="email" required />
    <input className="form__input" type="text" label="Mot de passe" placeholder="Mot de passe" name="password" required />

    <div className="button_submit">
      <button className="submit" type="button">S'inscrire</button>
    </div>
  </div>
);

export default Registration;
