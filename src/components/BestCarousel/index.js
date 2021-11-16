// Import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';

// Import components
import AnecdoteCard from '../AnecdoteCard';

// Import styles
import './bestcarousel.scss';

const BestCarousel = ({
  title,
  anecdotes,
  currentIndex,
  setCurrentIndex,
  loadData,
  loadingData,
  dataLoaded,
  context,
}) => {
  useEffect(() => {
    loadData();
  }, []);

  if (loadingData) {
    return (
      <Loader
        type="ThreeDots"
        color="#fff"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
  if (!dataLoaded) {
    return (
      <div>Désolé, nous rencontrons des problèmes de serveur temporaire</div>
    );
  }

  return (
    <section
      className="BestCarousel"
    >
      <h2 className="BestCarousel__title">{title}</h2>

      <div className="BestCarousel__prev">
        <ChevronLeft
          onClick={() => {
            if (currentIndex === 0) {
              setCurrentIndex(anecdotes.length - 1);
            }
            else {
              setCurrentIndex(currentIndex - 1);
            }
          }}
        />
      </div>

      <div className="BestCarousel__anecdote">
        <AnecdoteCard
          {...anecdotes[currentIndex]}
          context={context}
        />
      </div>

      <div className="BestCarousel__next">
        <ChevronRight
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % anecdotes.length);
          }}
        />
      </div>

      <div className="BestCarousel__shortcuts">
        {
          anecdotes.map((item, index) => (
            <div
              key={item.id}
              className={classNames(
                'BestCarousel__shortcut-ext',
                {
                  'BestCarousel__shortcut-ext--selected': currentIndex === index,
                },
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <div
                className="BestCarousel__shortcut-int"
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
  setCurrentIndex: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
  loadingData: PropTypes.bool.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
};

export default BestCarousel;
