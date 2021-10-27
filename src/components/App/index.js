// Import from libraries
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Import components
import Header from '../Header';
import Footer from '../Footer';
import LatestCarousel from '../LatestCarousel';

// Import styles
import './styles.scss';

// Import data
import latests from '../../utils/latests';

// == Composant
const App = () => {
  const [latestIndex, setLatestIndex] = useState(0);
  const [bestIndex, setBestIndex] = useState(0);
  return (
  <div className="app">
    <Header />
    <LatestCarousel title="Nos dernières anecdotes" anecdotes={latests} currentIndex={latestIndex} modifyIndex={setLatestIndex} />
    <Footer />
  </div>
  );
};

// == Export
export default App;
