// Import from libraries
import PropTypes from 'prop-types';

// Import components
import AnecdoteCard from '../AnecdoteCard';

const Anecdotes = ({ anecdotes }) => (
  <section className="anecdotes">
    <h2 className="anecdotes__title">Découvrez nos anecdotes</h2>
    <ul className="anecdotes__list">
      {
        anecdotes.map((anecdote) => (
          <li>
            <AnecdoteCard key={anecdote.id} {...anecdote} />
          </li>
        ))
      }
    </ul>
  </section>
);

Anecdotes.propTypes = {
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
};

export default Anecdotes;
