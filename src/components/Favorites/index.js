import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Trash2 } from 'react-feather';
import Loader from 'react-loader-spinner';

import Tag from '../Tag';

import './favorites.scss';

const Favorites = ({
  anecdotes,
  deleteFavorite,
  loadData,
  loadingData,
  loadDataFailed,
  dataLoaded,
  isConnected,
  reconnecting,
}) => {
  let isFirstMount = useRef(true);
  const history = useHistory();

  useEffect(() => {
    if (isFirstMount) {
      isFirstMount = false;
    }
  }, []);

  useEffect(() => {
    if (isConnected && !dataLoaded && !loadingData) {
      loadData();
    }
  }, [reconnecting]);

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

  if (loadDataFailed || !dataLoaded) {
    return (
      <></>
    );
  }

  if (anecdotes.length === 0) {
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
            anecdotes.map(({
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
                    onClick={() => deleteFavorite(id)}
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
  deleteFavorite: PropTypes.func.isRequired,
};

export default Favorites;
