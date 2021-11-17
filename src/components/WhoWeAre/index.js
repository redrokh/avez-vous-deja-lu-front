// Import styles
import './whoweare.scss';

// Import images
import julian from 'src/assets/img/julian.png';
import benji from 'src/assets/img/benji.png';
import luke from 'src/assets/img/luke.png';
import oreDa from 'src/assets/img/oreDa.png';

const WhoWeAre = () => (
  <section
    className="WhoWeAre"
  >
    <h2 className="WhoWeAre__title">Qui sommes-nous ?</h2>

    <div className="WhoWeAre__card WhoWeAre__card--julian">
      <img
        className="WhoWeAre__photo"
        src={julian}
        alt="Julian LAPENNE"
      />

      <div className="WhoWeAre__description">
        <h3 className="WhoWeAre__name">Julian LAPENNE</h3>

        <span className="WhoWeAre__role">Scrum Master et Lead Dev Back</span>

        <p className="WhoWeAre__message">
          Je suis tellement discret sur mon grille-pain haut débit que l’on se demande si je suis encore là.
        </p>
      </div>
    </div>

    <div className="WhoWeAre__card WhoWeAre__card--benjamin">
      <img
        className="WhoWeAre__photo"
        src={benji}
        alt="Benjamin FOURMONT"
      />

      <div className="WhoWeAre__description">
        <h3 className="WhoWeAre__name">Benjamin FOURMONT</h3>

        <span className="WhoWeAre__role">Product Owner et Référent Technique Back</span>

        <p className="WhoWeAre__message">
          J’ai peur d’Alexandre...
        </p>
      </div>
    </div>

    <div className="WhoWeAre__card WhoWeAre__card--lucas">
      <img
        className="WhoWeAre__photo"
        src={luke}
        alt="Benjamin FOURMONT"
      />

      <div className="WhoWeAre__description">
        <h3 className="WhoWeAre__name">Lucas CAMUS</h3>

        <span className="WhoWeAre__role">Référent Technique Front</span>

        <p className="WhoWeAre__message">
          J'aime bien prendre une semaine de vacances avant les vacances pour bien préparer les vacances, et une semaine après pour me remettre de mes vacances :D
        </p>
      </div>
    </div>

    <div className="WhoWeAre__card WhoWeAre__card--alexandre">
      <img
        className="WhoWeAre__photo"
        src={oreDa}
        alt="Benjamin FOURMONT"
      />

      <div className="WhoWeAre__description">
        <h3 className="WhoWeAre__name">Alexandre MURDAY</h3>

        <span className="WhoWeAre__role">Lead Fev Front et Git Master</span>

        <p className="WhoWeAre__message">
          Vive le troll ! Trollons tous pour être heureux ;)
        </p>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
