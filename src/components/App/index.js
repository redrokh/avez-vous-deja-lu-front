// Import from libraries
import { Switch, Route } from 'react-router-dom';

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
import Categories from '../../containers/Categories';
import Error from '../Error';
import Contact from '../Contact';
import LegalesMentions from '../LegalesMentions';
import Footer from '../../containers/Footer';

// Import styles
import './styles.scss';

// Component
const App = () => (
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
          path="/qui-sommes_nous"
          exact
        >
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
        </Route>

        <Route
          path="/au-hasard/anecdote/:anecdoteId"
          exact
        ></Route>

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

// == Export
export default App;
