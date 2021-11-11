// import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// import styles
import './categories.scss';

const Categories = ({ categories, initialize }) => {
  useEffect(() => {
    initialize();
  }, []);
  const history = useHistory();

  return (
    <section>
      <h2 className="main__title">Toutes les Catégories</h2>

      <ul className="categorie__grid">
        {
          categories.map((category) => (
            <li
              key={category.id}
              className="grid__card"
              onClick={() => history.push(`/categories/${category.slug}`)}
            >
              <h3 className="title__card">{category.name}</h3>
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
  initialize: PropTypes.func.isRequired,
};
export default Categories;
