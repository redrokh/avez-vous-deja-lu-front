// Import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';
import classNames from 'classnames';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './bestcarousel.scss';

const BestCarousel = ({
  title,
  anecdotes,
  currentIndex,
  modifyIndex,
  initialize,
  context,
  isLoading,
}) => {
  useEffect(() => {
    console.log('useEffect');
    initialize();
  }, []);

  console.log('outside useEffect');
  if (isLoading) {
    return (
      <></>
    );
  }

  return (
    <section
      className="best-carousel"
    >
      <h2 className="best-carousel__title">{title}</h2>

      <div className="best-carousel__prev">
        <ChevronLeft
          onClick={() => {
            if (currentIndex === 0) {
              modifyIndex(anecdotes.length - 1);
            }
            else {
              modifyIndex(currentIndex - 1);
            }
          }}
        />
      </div>

      <div>
        <AnecdoteCard
          className="best-carousel__anecdote"
          {...anecdotes[currentIndex]}
          context={context}
        />
      </div>

      <div className="best-carousel__next">
        <ChevronRight
          onClick={() => {
            modifyIndex((currentIndex + 1) % anecdotes.length);
          }}
        />
      </div>

      <div className="best-carousel__shortcuts">
        {
          anecdotes.map((item, index) => (
            <div
              key={item.id}
              className={classNames(
                'best-carousel__shortcut-ext',
                {
                  'best-carousel__shortcut-ext--selected': currentIndex === index,
                },
              )}
              onClick={() => modifyIndex(index)}
            >
              <div
                className="best-carousel__shortcut-int"
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};

BestCarousel.propTypes = {
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
      slug: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  currentIndex: PropTypes.number.isRequired,
  modifyIndex: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BestCarousel;
