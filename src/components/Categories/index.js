// import from libraries
import PropTypes from 'prop-types';

// import styles
import './categories.scss';

const Categories = ({ categoriesData }) => {
  console.log(categoriesData);
  return (
    <section>
      <h2 className="main__title">Toutes les Catégories</h2>

      <ul className="categorie__grid">
        {
          categoriesData.map((category) => (
            <li key={category.id} className="grid__card">
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
};
export default Categories;
