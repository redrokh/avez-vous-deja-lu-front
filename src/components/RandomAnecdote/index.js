// import libraries
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowUpCircle, ArrowDownCircle, Star } from 'react-feather';
import Loader from 'react-loader-spinner';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// Import components
import Tag from '../Tag';
// import styles
import './randomanecdote.scss';

const RandomAnecdote = ({
  id,
  title,
  createdAt,
  content,
  writer,
  category,
  source,
  isFavorite,
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
  isConnected,
  reconnecting,
}) => {
  const history = useHistory();

  useEffect(() => {
    // Load anecdote when user is connected and anecdote is not already loading
    if (isConnected && !anecdoteLoaded && !loadingAnecdote) {
      loadAnecdote();
    }
    // Route requires authorization and user is not reconnecting
    else if (!reconnecting && !isConnected) {
      history.push('/connexion');
    }
  }, [reconnecting]);

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
    return <div className="RandomAnecdote__server-error">Désolé, nous rencontrons des problèmes de serveur temporaire</div>;
  }

  return (
    <article className="RandomAnecdote">
      <div className="RandomAnecdote__header">
        <h2 className="RandomAnecdote__title">{title}</h2>

        <div>
          <button
            className="RandomAnecdote__generate-button"
            type="button"
            onClick={() => loadAnecdote()}
          >
            Générer une autre anecdote
          </button>
        </div>
      </div>

      <div className="RandomAnecdote__categories">
        {
          category.map((item) => (
            <Tag key={item.id} {...item} />
          ))
        }
      </div>

      <div className="RandomAnecdote__top-part">
        <div className="RandomAnecdote__publication">Publier par {writer.pseudo}, le {createdAt}</div>
        <Star
          stroke="#FFD700"
          fill={isFavorite ? '#FFD700' : 'none'}
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

      <div className="RandomAnecdote__middle-part">
        <div className="RandomAnecdote__voter">
          <ArrowUpCircle
            className="RandomAnecdote__upvote"
            strokeWidth="2"
            onClick={() => {
              if (isConnected) {
                upVote();
              }
              else {
                alert('Vous devez être connecté pour effectuer cette action');
              }
            }}
          />
          <div className="RandomAnecdote__vote-count">{voteCount}</div>
          <ArrowDownCircle
            className="RandomAnecdote__downvote"
            strokeWidth="2"
            onClick={() => {
              if (isConnected) {
                downVote();
              }
              else {
                alert('Vous devez être connecté pour effectuer cette action');
              }
            }}
          />
        </div>

        <p className="RandomAnecdote__content">{content}</p>
      </div>

      <div className="RandomAnecdote__info">
        <button
          className="RandomAnecdote__knew"
          onClick={() => {
            if (isConnected) {
              iKnew();
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
          className="RandomAnecdote__didnt-know"
          onClick={() => {
            if (isConnected) {
              iDidntKnow();
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

      <aside className="RandomAnecdote__sources">
        <h3 className="RandomAnecdote__sources-title">Source :</h3>
        <a
          className="RandomAnecdote__source-link"
          target="_blank"
          href={source}
          rel="noreferrer"
        >
          {source}
        </a>
      </aside>
    </article>
  );
};

RandomAnecdote.propTypes = {
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

export default RandomAnecdote;
