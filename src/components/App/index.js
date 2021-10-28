// Import from libraries
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Import components
import Header from '../Header';
import Anecdote from '../Anecdote';
import Footer from '../Footer';
import HomeMessage from '../HomeMessage';
import BestCarousel from '../BestCarousel';
import LatestCarousel from '../LatestCarousel';
import Anecdotes from '../Anecdotes';

// Import styles
import './styles.scss';

// Import data
import latests from '../../utils/latests';
import bests from '../../utils/bests';
import anecdotes from '../../utils/anecdotes';

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
            anecdotes={bests}
            currentIndex={bestIndex}
            modifyIndex={setBestIndex}
          />
          <LatestCarousel
            anecdotes={latests}
            currentIndex={latestIndex}
            modifyIndex={setLatestIndex}
          />
        </Route>
        <Route path="/anecdotes" exact>
          <Anecdotes
            title="Toutes nos anecdotes"
            anecdotes={anecdotes}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
