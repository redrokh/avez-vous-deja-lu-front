// import from libraries
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

// import styles
import './categories.scss';

const Categories = ({
  categories,
  loadData,
  loadingData,
  loadDataFailed,
  dataLoaded,
}) => {
  useEffect(() => {
    loadData();
  }, []);
  const history = useHistory();

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

  return (
    <section className="Categories">
      <h2 className="Categories__title">Toutes les Catégories</h2>

      <ul className="Categories__grid">
        {
          categories.map((category) => (
            <li
              key={category.id}
              className="Categories__card"
              style={{
                backgroundColor: category.color,
              }}
              onClick={() => history.push(`/categories/${category.slug}`)}
            >
              <h3 className="Categories__card-title">{category.name}</h3>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loadData: PropTypes.func.isRequired,
  loadingData: PropTypes.bool.isRequired,
  loadDataFailed: PropTypes.bool.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
};
export default Categories;
