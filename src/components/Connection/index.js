// import from libraries

// import styles
import './connection.scss';

const Connection = () => (

  <div className="connection__form">
    <h1 className="connection__main--title">Se connecter</h1>

    <input className="form__input" type="text" label="Nom d'utilisateur" placeholder=" " name="username" required />
    <label for="email" class="form__label">Nom d'utilisateur</label>
    <input className="form__input" type="text" label="Mot de passe" placeholder=" " name="password" required />
    <label for="password" class="form__label">Mot de passe</label>

    <div className="button_submit">
      <button className="submit" type="button">Se Connecter</button>
    </div>
  </div>

);

export default Connection;
