import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Tag from '../Tag';
import { Trash2 } from 'react-feather';

import './favorites.scss';

const Favorites = ({ favorites, userId, deleteFavorite }) => {
  const history = useHistory();
  if (favorites.length === 0) {
    return (
      <section className="Favorites">
        <div>Vous n'avez pas de favoris</div>
      </section>
    );
  }
  return (
    <section className="Favorites">
      <table className="Favorites__table">
        <thead className="Favorites__header">
          <tr className="Favorites__header-row">
            <th className="Favorites__header-cell">Titre</th>
            <th className="Favorites__header-cell">Auteur</th>
            <th className="Favorites__header-cell">Catégorie(s)</th>
          </tr>
        </thead>

        <tbody className="Favorites__body">
          {
            favorites.map(({
              id,
              title,
              writer,
              category,
            }) => (
              <tr
                key={id}
                className="Favorites__body-row"
              >
                <td
                  className="Favorites__body-cell"
                  onClick={() => {
                    history.push(`/mes-favoris/${id}`);
                  }}
                >
                  {title}
                </td>
                <td
                  className="Favorites__body-cell"
                  onClick={() => {
                    history.push(`/mes-favoris/${id}`);
                  }}
                >
                  {writer.pseudo}
                </td>
                <td
                  className="Favorites__body-cell"
                  onClick={() => {
                    history.push(`/mes-favoris/${id}`);
                  }}
                >
                  <div className="Favorites__categories">
                    {
                      category.map((item) => (
                        <Tag key={item.id} {...item} />
                      ))
                    }
                  </div>
                </td>
                <td className="Favorites__body-cell">
                  <button
                    className="Favorites__delete-button"
                    type="button"
                    onClick={() => deleteFavorite(userId, id)}
                  >
                    <Trash2 stroke="white" strokeWidth="1" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
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
  userId: PropTypes.number.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
};

export default Favorites;
