// Import from libraries
import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './anecdotes.scss';
import { setAnecdotesTitle } from '../../actions/anecdoteActions';

const Anecdotes = ({
  title,
  anecdotes,
  slug,
  loadData,
  loadingData,
  loadDataFailed,
  dataLoaded,
  anecdoteGroup,
  isConnected,
  reconnecting,
}) => {
  const history = useHistory();
  const context = useLocation().pathname;

  useEffect(() => {
    // Route doesn't require authorization or user has authorization
    if (slug === '' || isConnected) {
      loadData(anecdoteGroup, slug);
    }
    // Route requires authorization and user is not reconnecting
    else if (!reconnecting) {
      history.push('/connexion');
    }
  }, [reconnecting, context]);
  /* useEffect(() => {
    if (
      (context === '/anecdotes' || context === '/nos-meilleures-anecdotes')
      && !loadingData && !dataLoaded
    ) {
      loadData(anecdoteGroup, slug);
    }
    switch (context) {
      case '/anecdotes':
        setAnecdotesTitle('Toutes nos anecdotes');
        break;
      case '/nos-meilleures-anecdotes':
        setAnecdotesTitle('Découvrez nos meilleures anecdotes');
        break;
      default:
    }
  }, [context]); */

  if (!isConnected && slug.length > 0 && !reconnecting) {
    history.push('/connexion');
  }

  if (reconnecting || loadingData) {
    return (
      <Loader
        type="ThreeDots"
        color="#fff"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }

  if (loadDataFailed) {
    return (
      <div className="Anecdotes__server-error">Désolé, nous rencontrons des problèmes de serveur temporaire</div>
    );
  }

  return (
    <section className="anecdotes">
      <h2 className="anecdotes__title">{title}</h2>

      <ul className="anecdotes__list">
        {
          anecdotes.map((anecdote) => (
            <li key={anecdote.id} className="anecdotes__item">
              <AnecdoteCard {...anecdote} context={context} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

Anecdotes.defaultProps = {
  slug: '',
};

Anecdotes.propTypes = {
  title: PropTypes.string.isRequired,
  anecdotes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    writer: PropTypes.shape({
      pseudo: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  loadData: PropTypes.func.isRequired,
  loadingData: PropTypes.bool.isRequired,
  loadDataFailed: PropTypes.bool.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  anecdoteGroup: PropTypes.string.isRequired,
  slug: PropTypes.string,
};

export default Anecdotes;
