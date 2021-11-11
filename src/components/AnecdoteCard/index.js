// Import from libraries
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

// Import components
import Tag from '../Tag';

// Import styles
import './anecdotecard.scss';

const AnecdoteCard = ({
  id,
  title,
  writer,
  createdAt,
  description,
  category,
  context,
}) => (
  <div className="anecdote-card">
    <h4 className="anecdote-card__title">{title}</h4>

    <div className="anecdote-card__tags">
      {
        category.map((item) => (
          <Tag key={item.id} {...item} />
        ))
        }
    </div>

    <div className="anecdote-card__date">Publié par {writer.pseudo} le {createdAt}</div>

    <p className="anecdote-card__description">{description}</p>

    <NavLink
      className="anecdote-card__link"
      to={`${context}/anecdote/${id}`}
      exact
    >
      En savoir plus...
    </NavLink>
  </div>
);

AnecdoteCard.propTypes = {
  id: PropTypes.number.isRequired,
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
  context: PropTypes.string.isRequired,
};

export default AnecdoteCard;
