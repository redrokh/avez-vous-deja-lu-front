// Import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';
import classNames from 'classnames';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './latestcarousel.scss';

const LatestCarousel = ({
  title,
  anecdotes,
  currentIndex,
  modifyIndex,
  initialize,
  context,
}) => {
  useEffect(() => {
    initialize();
  }, []);

  if (anecdotes.length === 0) {
    return (
      <></>
    );
  }

  return (
    <section
      className="latest-carousel"
    >
      <h2 className="latest-carousel__title">{title}</h2>

      <div className="latest-carousel__prev">
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
          className="latest-carousel__anecdote"
          {...anecdotes[currentIndex]}
          context={context}
        />
      </div>

      <div className="latest-carousel__next">
        <ChevronRight
          onClick={() => {
            modifyIndex((currentIndex + 1) % anecdotes.length);
          }}
        />
      </div>

      <div className="latest-carousel__shortcuts">
        {
          anecdotes.map((item, index) => (
            <div
              key={item.id}
              className={classNames(
                'latest-carousel__shortcut-ext',
                {
                  'latest-carousel__shortcut-ext--selected': currentIndex === index,
                },
              )}
              onClick={() => modifyIndex(index)}
            >
              <div
                className="latest-carousel__shortcut-int"
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};

LatestCarousel.propTypes = {
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
};

export default LatestCarousel;
