// Import from libraries
import PropTypes from 'prop-types';

// Import components
import Tag from '../Tag';

const AnecdoteCard = ({ tags }) => (
  <div>
    <h4></h4>

    <div>
      {
        tags.map((tag) => (
          <Tag key={tag.id} {...tag} />
        ))
        }
    </div>
  </div>
);

AnecdoteCard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
}
