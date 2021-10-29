// Import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import actions
import { loadAnecdotes } from '../../actions';

// Import styles
import './anecdotes.scss';

const Anecdotes = ({ title, anecdotes, initialize }) => {
  useEffect(() => {
    initialize(loadAnecdotes);
  }, []);
  return (
    <section className="anecdotes">
      <h2 className="anecdotes__title">{title}</h2>

      <ul className="anecdotes__list">
        {
          anecdotes.map((anecdote) => (
            <li key={anecdote.id}>
              <AnecdoteCard {...anecdote} />
            </li>
          ))
        }
      </ul>
    </section>
  );
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
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  initialize: PropTypes.func.isRequired,
};

export default Anecdotes;
