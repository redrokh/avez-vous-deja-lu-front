// Import styles
import './homemessage.scss';

// Component
const HomeMessage = () => (
  <section className="HomeMessage">
    <h1 className="HomeMessage__title">Avez-vous déjà lu</h1>

    <p className="HomeMessage__content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Sed eu varius ligula. Quisque id sagittis metus. Nulla facilisi.
      Phasellus scelerisque euismod ligula, ac euismod nisl aliquet nec. <br />
      Suspendisse vulputate convallis tincidunt. In eget neque libero.
      Donec leo est, convallis quis mattis quis, bibendum eu nibh.
      Maecenas lectus lorem, aliquet sed condimentum sed, cursus ut mi.
      Nam hendrerit sodales ornare.
    </p>
  </section>
);

// Export component
export default HomeMessage;
