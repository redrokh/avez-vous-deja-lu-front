// Import from libraries
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  slug,
}) => {
  useEffect(() => {
    initialize(context, slug);
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

Anecdotes.defaultProps = {
  slug: '',
};

Anecdotes.propTypes = {
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
  initialize: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
  slug: PropTypes.string,
};

export default Anecdotes;
