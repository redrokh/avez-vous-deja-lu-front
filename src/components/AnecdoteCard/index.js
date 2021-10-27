// Import from libraries
import PropTypes from 'prop-types';

// Import components
import Tag from '../Tag';

// Import styles
import './anecdotecard.scss';

const AnecdoteCard = ({ title, writer, createdAt, description, categories }) => (
  <div className="anecdote-card">
    <h4 className="anecdote-card__title">{title}</h4>

    <div className="anecdote-card__tags">
      {
        categories.map((category) => (
          <Tag key={category.id} {...category} />
        ))
        }
    </div>

    <div className="anecdote-card__date">Publié par {writer.pseudo} le {createdAt}</div>

    <p className="anecdote-card__description">{description}</p>

    <div>En savoir plus...</div>
  </div>
);

AnecdoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
}

export default AnecdoteCard;
