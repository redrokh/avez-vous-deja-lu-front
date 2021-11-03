// Import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './anecdotes.scss';

const Anecdotes = ({
  title,
  anecdotes,
  initialize,
  context,
}) => {
  useEffect(() => {
    initialize();
  }, []);
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
    })).isRequired,
  })).isRequired,
  initialize: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
};

export default Anecdotes;
