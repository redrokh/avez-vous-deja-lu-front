// import libraries

// import styles
import './contact.scss';

const Contact = () => (

  <form
    className="Contact__form"
    onSubmit={(e) => {
      e.preventDefault();
      window.location.href = `mailto:avezvousdejalu.pro@gmail.com?subject=${`Demande de contact - ${e.target[0].value} ${e.target[1].value}`}&body=${e.target[3].value}`;
    }}
  >
    <h2 className="Contact__title">Contact</h2>

    <input className="Contact__input" type="text" label="Nom" placeholder="Nom" name="username" required />
    <input className="Contact__input" type="text" label="Prénom" placeholder="Prénom" name="username" required />
    <input className="Contact__input" type="text" label="Email" placeholder="Email" name="email" required />
    <textarea className="Contact__input" type="text" label="Votre message" placeholder="Votre message" name="password" required />

    <div className="submit__button">
      <button className="submit" type="submit">Envoyer</button>
    </div>
  </form>
);

export default Contact;
