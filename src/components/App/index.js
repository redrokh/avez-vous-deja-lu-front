// Import from libraries
import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import from app components
import Header from '../../containers/Header';
import Page from '../../containers/Page';
import HomeMessage from '../HomeMessage';
import Connection from '../../containers/Connection';
import Registration from '../../containers/Registration';
import MyAccount from '../../containers/MyAccount';
import BestCarousel from '../../containers/BestCarousel';
import LatestCarousel from '../../containers/LatestCarousel';
import Anecdotes from '../../containers/Anecdotes';
import Anecdote from '../../containers/Anecdote';
import RandomAnecdote from '../../containers/RandomAnecdote';
import Categories from '../../containers/Categories';
import Error from '../Error';
import WhoWeAre from '../WhoWeAre';
import Contact from '../Contact';
import LegalesMentions from '../LegalesMentions';
import Footer from '../../containers/Footer';

// Import styles
import './styles.scss';

// Component
const App = ({
  reconnectUser,
  cancelReconnection,
  registrationSucceeded,
  resetRegistrationState,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/inscription' && registrationSucceeded) {
      resetRegistrationState();
    }
  }, [location]);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      reconnectUser();
    }
    else {
      cancelReconnection();
    }
  }, []);
  return (
    <div className="app">
      { /* Header */ }
      <Header />

      { /* Page content */ }

      <Page>
        { /* Authorized for unsigned users */ }
        <Switch>
          <Route
            path="/"
            exact
          >
            <HomeMessage />
            <BestCarousel />
            <LatestCarousel />
          </Route>

          <Route
            path="/inscription"
            exact
          >
            <Registration />
          </Route>

          <Route
            path="/connexion"
            exact
          >
            <Connection />
          </Route>

          <Route
            path="/anecdotes"
            exact
          >
            <Anecdotes
              anecdoteGroup="anecdotes"
            />
          </Route>

          <Route
            path="/categories"
            exact
          >
            <Categories />
          </Route>

          <Route
            path="/nos-meilleures-anecdotes"
            exact
          >
            <Anecdotes
              anecdoteGroup="bests"
            />
          </Route>

          <Route
            path="/nos-meilleures-anecdotes/anecdote/:anecdoteId"
            exact
          >
            <Anecdote
              context="bests"
            />
          </Route>

          <Route
            path="/nos-dernieres-anecdotes/anecdote/:anecdoteId"
            exact
          >
            <Anecdote
              context="latests"
            />
          </Route>

          <Route
            path="/mentions-legales"
            exact
          >
            <LegalesMentions />
          </Route>

          <Route
            path="/contact"
            exact
          >
            <Contact />
          </Route>

          <Route
            path="/qui-sommes-nous"
            exact
          >
            <WhoWeAre />
          </Route>

          { /* Authorized for signed user */ }

          <Route
            path="/mon-compte"
          >
            <MyAccount />
          </Route>

          <Route
            path="/mes-favoris/:anecdoteId"
            exact
          >
            <Anecdote context="favorites" />
          </Route>

          <Route
            path="/anecdotes/anecdote/:anecdoteId"
            exact
          >
            <Anecdote context="anecdotes" />
          </Route>

          <Route
            path="/categories/:slug"
            render={({ match }) => (
              <Anecdotes
                anecdoteGroup="categories"
                slug={match.params.slug}
              />
            )}
            exact
          />

          <Route
            path="/categories/:categorySlug/anecdote/:anecdoteId"
            exact
          >
            <Anecdote
              context="categories"
            />
          </Route>

          <Route
            path="/au-hasard"
            exact
          >
            <RandomAnecdote />
          </Route>

          { /* Url is not supported */ }

          <Route>
            <Error />
          </Route>
        </Switch>
      </Page>

      { /* Footer */ }
      <Footer />
    </div>
  );
};

App.propTypes = {
  reconnectUser: PropTypes.func.isRequired,
  cancelReconnection: PropTypes.func.isRequired,
};

// == Export
export default App;
