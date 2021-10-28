// Import from libraries
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Import components
import Header from '../Header';
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
      <Anecdotes anecdotes={anecdotes} />
      {/* <HomeMessage />
      <BestCarousel title="Nos meilleures anecdotes" anecdotes={bests} currentIndex={bestIndex} modifyIndex={setBestIndex} />
      <LatestCarousel title="Nos dernières anecdotes" anecdotes={latests} currentIndex={latestIndex} modifyIndex={setLatestIndex} /> */}
      <Footer />
    </div>
  );
};

// == Export
export default App;
