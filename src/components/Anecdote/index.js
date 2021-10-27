// import libraries
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import styles
import './anecdote.scss';

const Anecdote = () => (
  <div className="anecdote">
    <h1 className="main__title">Titre</h1>
    <h2 className="categorie__name">Nom de la Catégorie</h2>
    <h6 className="author__info">Publier par Toto l'asticot, le 34/12/3492</h6>
    <div className="container__content">
      <article className="anecdote__content">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica.
      </article>
    </div>

    <aside className="source__link">
      <ul className="source__list">
        <li className="source__title">Source(s) : </li>
        <li className="source__item"><Link to="/la-source">Lien source</Link></li>
        <li className="source__item"><Link to="/la-source">Lien source</Link></li>
      </ul>
    </aside>

    <button className="know" type="button">Je connaissais</button>
    <button className="didnt__know" type="button">Je ne connaissais pas</button>

    <div className="btn__prev__next">
      <button className="previous" type="button">Précédent</button>
      <button className="next" type="button">Suivant</button>
    </div>
  </div>
);

export default Anecdote;
