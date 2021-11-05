// import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// import styles
import './categories.scss';

const Categories = ({ categoriesData, initialize }) => {
  useEffect(() => {
    initialize();
  }, []);
  const history = useHistory();

  return (
    <section>
      <h2 className="main__title">Toutes les Catégories</h2>

      <ul className="categorie__grid">
        {
          categoriesData.map((category) => (
            <li key={category.id} className="grid__card" onClick={function() {
              history.push(`/categories/${category.id}`);
            }}>
              <h3 className="title__card">{category.title}</h3>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

Categories.propTypes = {
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  initialize: PropTypes.func.isRequired,
};
export default Categories;
