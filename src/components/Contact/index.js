// import libraries

// import styles
import './contact.scss';

const Contact = () => (

  <section className="contact__form">
    <h2 className="contact__title">Contact</h2>

    <input className="contact__input" type="text" label="Nom" placeholder="Nom" name="username" required />
    <input className="contact__input" type="text" label="Prénom" placeholder="Prénom" name="username" required />
    <input className="contact__input" type="text" label="Email" placeholder="Email" name="email" required />
    <textarea className="contact__input" type="text" label="Votre message" placeholder="Votre message" name="password" required />

    <div className="submit__button">
      <button className="submit" type="button">Envoyer</button>
    </div>
  </section>
);

export default Contact;
