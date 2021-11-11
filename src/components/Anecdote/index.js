// import libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle, ArrowDownCircle, Star } from 'react-feather';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// Import components
import Tag from '../Tag';
// import styles
import './anecdote.scss';

const Anecdote = ({
  id,
  title,
  createdAt,
  content,
  writer,
  category,
  source,
  isFavorite,
  nextAnecdote,
  prevAnecdote,
  upvote,
  downvote,
  toggleIsFavorite,
  knew,
  didntKnow,
  initialize,
  isConnected,
  isLoading,
}) => {
  const location = useLocation();
  const history = useHistory();
  const baseUrl = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
  const { anecdoteId } = useParams();
  useEffect(() => {
    initialize(parseInt(anecdoteId, 10));
  }, []);

  useEffect(() => {
    if (anecdoteId !== id && isLoading) {
      history.push(`${baseUrl}/${id}`);
    }
  }, [id]);

  if (isLoading) {
    return <></>;
  }
  if (!isConnected) {
    history.push('/connexion');
  }

  return (
    <article className="anecdote">
      <h2 className="anecdote__title">{title}</h2>

      <div className="anecdote__categories">
        {
          category.map((item) => (
            <Tag key={item.id} {...item} />
          ))
        }
      </div>

      <div className="anecdote__top-part">
        <div className="anecdote__publication">Publier par {writer.pseudo}, le {createdAt}</div>
        { isConnected && <Star stroke="yellow" fill={isFavorite ? 'yellow' : 'none'} onClick={toggleIsFavorite} /> }
      </div>

      <div className="anecdote__middle-part">
        {
          isConnected && (
            <div className="anecdote__voter">
              <ArrowUpCircle className="anecdote__upvote" onClick={() => upvote(writer.id, id)} />
              <div className="anecdote__vote-count">Vote</div>
              <ArrowDownCircle className="anecdote__downvote" onClick={() => downvote(writer.id, id)} />
            </div>
          )
        }

        <p className="anecdote__content">{content}</p>
      </div>

      <div className="anecdote__info">
        <button
          className="anecdote__knew"
          onClick={knew}
          type="button"
        >
          Je connaissais
        </button>

        <button
          className="anecdote__didnt-know"
          onClick={didntKnow}
          type="button"
        >
          Je ne connaissais pas
        </button>
      </div>

      <aside className="anecdote__sources">
        <h3 className="anecdote__sources-title">Source :</h3>
        <a
          className="anecdote__source-link"
          target="_blank"
          href={source}
          rel="noreferrer"
        >
          {source}
        </a>
      </aside>

      <div className="anecdote__nav">
        <button
          className="anecdote__nav-link"
          onClick={() => prevAnecdote(id)}
          type="button"
        >
          Précédent
        </button>
        <button
          className="anecdote__nav-link"
          onClick={() => nextAnecdote(id)}
          type="button"
        >
          Suivant
        </button>
      </div>
    </article>
  );
};

Anecdote.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  writer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pseudo: PropTypes.string.isRequired,
  }).isRequired,
  source: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  category: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  prevAnecdote: PropTypes.func.isRequired,
  nextAnecdote: PropTypes.func.isRequired,
  upvote: PropTypes.func.isRequired,
  downvote: PropTypes.func.isRequired,
  knew: PropTypes.func.isRequired,
  didntKnow: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  toggleIsFavorite: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default Anecdote;
