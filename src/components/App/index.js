// Import from libraries
import { Switch, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import components
import Header from '../Header';
import Anecdote from '../Anecdote';
import Footer from '../Footer';
import HomeMessage from '../HomeMessage';
import BestCarousel from '../../containers/BestCarousel';
import LatestCarousel from '../../containers/LatestCarousel';
import Anecdotes from '../../containers/Anecdotes';

// Import styles
import './styles.scss';

// == Composant
const App = () => {
  const [latestIndex, setLatestIndex] = useState(0);
  const [bestIndex, setBestIndex] = useState(0);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeMessage />
          <BestCarousel
            currentIndex={bestIndex}
            modifyIndex={setBestIndex}
          />
          <LatestCarousel
            currentIndex={latestIndex}
            modifyIndex={setLatestIndex}
          />
        </Route>
        <Route path="/anecdotes" exact>
          <Anecdotes
            title="Toutes nos anecdotes"
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
