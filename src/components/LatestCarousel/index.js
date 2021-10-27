// Import from libraries
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './latestcarousel.scss';

const LatestCarousel = ({ title, anecdotes, currentIndex, modifyIndex }) => {
  return (
    <section className="latest-carousel">
      <h2 className="latest-carousel__title">{title}</h2>

      <AnecdoteCard
        {...anecdotes[currentIndex]}
      />

      <ArrowLeftCircle
        className="latest-carousel__left-arrow"
        onClick={() => {
          if (currentIndex == 0) {
            modifyIndex(anecdotes.length - 1);
          } else {
            modifyIndex(currentIndex - 1);
          }
        }}
      />
      <ArrowRightCircle
        className="latest-carousel__right-arrow"
        onClick={() => {
          modifyIndex((currentIndex + 1) % anecdotes.length);
        }}
      />
    </section>
  );
};

export default LatestCarousel;
