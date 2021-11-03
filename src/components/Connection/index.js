// import from libraries

// import styles
import './connection.scss';

const Connection = () => (

  <div className="connection__form">
    <h1 className="connection__main--title">Se connecter</h1>

    <input className="form__input" type="text" label="Nom d'utilisateur" placeholder="Nom d'utilisateur " name="username" required />
    <input className="form__input" type="text" label="Mot de passe" placeholder="Mot de passe" name="password" required />

    <p className="link__inscription">Vous n'avez pas de compte ? Je m'en crée un.</p>

    <div className="button_submit">
      <button className="submit" type="button">Se Connecter</button>
    </div>
  </div>

);

export default Connection;
