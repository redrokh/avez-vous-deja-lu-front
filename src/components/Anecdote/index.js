// import libraries
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle, ArrowDownCircle, Star } from 'react-feather';
import Loader from 'react-loader-spinner';
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
  loadIsFavorite,
  loadingIsFavorite,
  loadIsFavoriteFailed,
  isFavoriteLoaded,
  toggleIsFavorite,
  voteCount,
  iKnewCount,
  iDidntKnowCount,
  upVote,
  upVoting,
  upVoteFailed,
  upVoteSucceeded,
  downVote,
  downVoting,
  downVoteFailed,
  downVoteSucceeded,
  iKnew,
  iKnewPending,
  iKnewFailed,
  iKnewSucceeded,
  iDidntKnow,
  iDidntKnowPending,
  iDidntKnowFailed,
  iDidntKnowSucceeded,
  nextAnecdote,
  prevAnecdote,
  loadAnecdote,
  loadingAnecdote,
  loadAnecdoteFailed,
  anecdoteLoaded,
  context,
  isConnected,
  reconnecting,
}) => {
  let isFirstMount = useRef(true);
  const location = useLocation();
  const history = useHistory();
  const baseUrl = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
  const { categorySlug, anecdoteId } = useParams();

  useEffect(() => {
    if (isFirstMount) {
      isFirstMount = false;
    }
  }, []);

  useEffect(() => {
    // Route doesn't require authorization or user has authorization
    if (context === 'bests' || context === 'latests' || isConnected) {
      if (!anecdoteLoaded && !loadingAnecdote) {
        loadAnecdote(context, parseInt(anecdoteId, 10));
      }
    }
    // Route requires authorization and user is not reconnecting
    else if (!reconnecting) {
      history.push('/connexion');
    }
  }, [reconnecting]);

  useEffect(() => {
    // Coming from next/prev button
    if (id !== 0 && isFirstMount) {
      history.push(`${baseUrl}/${id}`);
    }
    // Coming from favorites
    else if (isConnected) {
      loadAnecdote(context, parseInt(anecdoteId, 10));
    }
  }, [id]);

  if (
    reconnecting
    || loadingAnecdote
    || loadingIsFavorite
    || upVoting
    || downVoting
    || iKnewPending
    || iDidntKnowPending
  ) {
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

  if (
    loadAnecdoteFailed
    || loadIsFavoriteFailed
    || upVoteFailed
    || downVoteFailed
    || iKnewFailed
    || iDidntKnowFailed
  ) {
    return <div>Désolé, nous rencontrons des problèmes de serveur temporaire</div>;
  }

  return (
    <article className="Anecdote">
      <h2 className="Anecdote__title">{title}</h2>

      <div className="Anecdote__categories">
        {
          category.map((item) => (
            <Tag key={item.id} {...item} />
          ))
        }
      </div>

      <div className="Anecdote__top-part">
        <div className="Anecdote__publication">Publier par {writer.pseudo}, le {createdAt}</div>
        <Star
          stroke="yellow"
          fill={isFavorite ? 'yellow' : 'none'}
          onClick={() => {
            if (isConnected) {
              toggleIsFavorite(isFavorite);
            }
            else {
              alert('Vous devez être connecté pour effectuer cette action');
            }
          }}
        />
      </div>

      <div className="Anecdote__middle-part">
        <div className="Anecdote__voter">
          <ArrowUpCircle
            className="Anecdote__upvote"
            onClick={() => {
              if (isConnected) {
                upVote(context);
              }
              else {
                alert('Vous devez être connecté pour effectuer cette action');
              }
            }}
          />
          <div className="Anecdote__vote-count">{voteCount}</div>
          <ArrowDownCircle
            className="Anecdote__downvote"
            onClick={() => {
              if (isConnected) {
                downVote(context);
              }
              else {
                alert('Vous devez être connecté pour effectuer cette action');
              }
            }}
          />
        </div>

        <p className="Anecdote__content">{content}</p>
      </div>

      <div className="Anecdote__info">
        <button
          className="Anecdote__knew"
          onClick={() => {
            if (isConnected) {
              iKnew(context);
            }
            else {
              alert('Vous devez être connecté pour effectuer cette action');
            }
          }}
          type="button"
        >
          Je connaissais ({iKnewCount})
        </button>

        <button
          className="Anecdote__didnt-know"
          onClick={() => {
            if (isConnected) {
              iDidntKnow(context);
            }
            else {
              alert('Vous devez être connecté pour effectuer cette action');
            }
          }}
          type="button"
        >
          Je ne connaissais pas ({iDidntKnowCount})
        </button>
      </div>

      <aside className="Anecdote__sources">
        <h3 className="Anecdote__sources-title">Source :</h3>
        <a
          className="Anecdote__source-link"
          target="_blank"
          href={source}
          rel="noreferrer"
        >
          {source}
        </a>
      </aside>

      <div className="Anecdote__nav">
        <button
          className="Anecdote__nav-link"
          onClick={() => prevAnecdote(context, anecdoteId, categorySlug)}
          type="button"
        >
          Précédent
        </button>
        <button
          className="Anecdote__nav-link"
          onClick={() => nextAnecdote(context, anecdoteId, categorySlug)}
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
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  iKnew: PropTypes.func.isRequired,
  iDidntKnow: PropTypes.func.isRequired,
  loadAnecdote: PropTypes.func.isRequired,
  loadingAnecdote: PropTypes.bool.isRequired,
  loadAnecdoteFailed: PropTypes.bool.isRequired,
  anecdoteLoaded: PropTypes.bool.isRequired,
  loadIsFavorite: PropTypes.func.isRequired,
  loadingIsFavorite: PropTypes.bool.isRequired,
  loadIsFavoriteFailed: PropTypes.bool.isRequired,
  isFavoriteLoaded: PropTypes.bool.isRequired,
  toggleIsFavorite: PropTypes.func.isRequired,
};

export default Anecdote;
