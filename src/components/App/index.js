// == Import
import './styles.scss';

import Header from '../Header';
import Anecdote from '../Anecdote';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Anecdote />
    <Footer />
  </div>
);

// == Export
export default App;
