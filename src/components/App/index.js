// Import from libraries
import { Switch, Route } from 'react-router-dom';

// Import components
import Header from '../../containers/Header';
import Connection from '../Connection';
import Registration from '../Registration';
import Page from '../../containers/Page';
import Anecdote from '../../containers/Anecdote';
import Footer from '../../containers/Footer';
import HomeMessage from '../HomeMessage';
import BestCarousel from '../../containers/BestCarousel';
import LatestCarousel from '../../containers/LatestCarousel';
import Categories from '../../containers/Categories';
import Anecdotes from '../../containers/Anecdotes';
import Error from '../Error';
import Contact from '../Contact';

// Import styles
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Page>
      <Switch>
        <Route path="/inscription" exact>
          <Registration />
        </Route>
        <Route path="/connexion" exact>
          <Connection />
        </Route>
        <Route path="/" exact>
          <HomeMessage />
          <BestCarousel />
          <LatestCarousel />
        </Route>
        <Route path="/anecdotes" exact>
          <Anecdotes
            title="Toutes nos anecdotes"
            context="/anecdotes"
          />
        </Route>
        <Route path="/categories" exact>
          <Categories />
        </Route>
        <Route path="/anecdotes/anecdote/:anecdoteId" exact>
          <Anecdote />
        </Route>
        <Route path="/nos-meilleures-anecdotes/anecdote/:anecdoteId" exact>
          <Anecdote />
        </Route>
        <Route path="/nos-dernieres-anecdotes/anecdote/:anecdoteId" exact>
          <Anecdote />
        </Route>
        <Route path="/nos-meilleures-anecdotes" exact>
          <Anecdotes
            title="Nos meilleures anecdotes"
            context="/nos-meilleures-anecdotes"
          />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Page>
    <Footer />
  </div>
);

// == Export
export default App;
