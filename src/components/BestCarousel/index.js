// Import from libraries
import PropTypes from 'prop-types';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './bestcarousel.scss';

const BestCarousel = ({ anecdotes, currentIndex, modifyIndex }) => (
  <section className="best-carousel">
    <h2 className="best-carousel__title">Nos meilleures anecdotes</h2>

    <AnecdoteCard
      {...anecdotes[currentIndex]}
    />

    <ArrowLeftCircle
      className="best-carousel__left-arrow"
      onClick={() => {
        if (currentIndex === 0) {
          modifyIndex(anecdotes.length - 1);
        } else {
          modifyIndex(currentIndex - 1);
        }
      }}
    />
    <ArrowRightCircle
      className="best-carousel__right-arrow"
      onClick={() => {
        modifyIndex((currentIndex + 1) % anecdotes.length);
      }}
    />
  </section>
);

BestCarousel.propTypes = {
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
  currentIndex: PropTypes.number.isRequired,
  modifyIndex: PropTypes.func.isRequired,
};

export default BestCarousel;
