import Tag from '../Tag';

import './favorites.scss';

const Favorites = ({ favorites }) => (
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
            <tr key={id} className="Favorites__body-row">
              <td className="Favorites__body-cell">{title}</td>
              <td className="Favorites__body-cell">{writer.pseudo}</td>
              <td className="Favorites__body-cell">
                {
                  category.map((item) => (
                    <Tag key={item.id} {...item} />
                  ))
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </section>
);

export default Favorites;
