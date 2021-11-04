// Import from libraries
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Import components
import Header from '../../containers/Header';
import Page from '../../containers/Page';
import Anecdote from '../Anecdote';
import Footer from '../../containers/Footer';
import HomeMessage from '../HomeMessage';
import BestCarousel from '../../containers/BestCarousel';
import LatestCarousel from '../../containers/LatestCarousel';
import Categories from '../../components/Categories';
import Anecdotes from '../../containers/Anecdotes';
import categoriesData from '../../utils/categories';

// Import styles
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Page>
      <Switch>
        <Route path="/" exact>
          <HomeMessage />
          <BestCarousel />
          <LatestCarousel />
        </Route>
        <Route path="/anecdotes" exact>
          <Anecdotes
            title="Toutes nos anecdotes"
          />
        </Route>
        <Route path="/categories" exact>
          <Categories categoriesData={categoriesData} />
        </Route>
      </Switch>
    </Page>
    <Footer />
  </div>
);

// == Export
export default App;
