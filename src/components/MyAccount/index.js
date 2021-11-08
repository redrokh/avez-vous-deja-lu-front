import { Route, NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Profile from '../Profile';
import Favorites from '../Favorites';

import './myaccount.scss';

import anecdotes from '../../utils/anecdotes';

const MyAccount = () => {
  const [editingPseudo, setEditingPseudo] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const history = useHistory();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <section className="MyAccount">
      <h2 className="MyAccount__title">Mon compte</h2>

      {
        !isMobile && (
          <div className="MyAccount__menu">
            <ul className="MyAccount__menu-list">
              <li className="MyAccount__menu-item">
                <NavLink to="/mon-compte">Profil</NavLink>
              </li>
              <li className="MyAccount__menu-item">
                <NavLink to="/mon-compte/favoris">Favoris</NavLink>
              </li>
            </ul>
          </div>
        )
      }

      <div className="MyAccount__content">
        <div className="MyAccount__content-header">
          <Route path="/mon-compte" exact>
            <h3 className="MyAccount__content-title">Profil</h3>
          </Route>
          <Route path="/mon-compte/favoris" exact>
            <h3 className="MyAccount__content-title">Favoris</h3>
          </Route>
          {
            isMobile && (
              <label htmlFor="menuSelection">
                <select
                  className="MyAccount__content-select"
                  id="menuSelection"
                  onChange={
                    (e) => {
                      switch (e.target.value) {
                        case 'profile':
                          history.push('/mon-compte');
                          break;
                        case 'favorite':
                          history.push('mon-compte/favoris');
                          break;
                        default:
                      }
                    }
                  }
                >
                  <option value="profile">Profil</option>
                  <option value="favorite">Favoris</option>
                </select>
              </label>
            )
          }
        </div>

        <Route path="/mon-compte" exact>
          <Profile
            editingPseudo={editingPseudo}
            editingEmail={editingEmail}
            setEditingPseudo={setEditingPseudo}
            setEditingEmail={setEditingEmail}
          />
        </Route>
        <Route path="/mon-compte/favoris" exact>
          <Favorites favorites={anecdotes} />
        </Route>
      </div>
    </section>
  );
};

export default MyAccount;
