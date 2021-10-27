// Import from libraries
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './latestcarousel.scss';

const LatestCarousel = ({ title, anecdotes, currentIndex, modifyIndex }) => {
  console.log(anecdotes);
  return (
    <section className="best-carousel">
      <h2 className="best-carousel__title">{title}</h2>

      <AnecdoteCard
        {...anecdotes[currentIndex]}
      />

      <ArrowLeftCircle
        className="best-carousel__left-arrow"
        onClick={() => {
          if (currentIndex == 0) {
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
};

export default LatestCarousel;
