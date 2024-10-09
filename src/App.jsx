import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import MovieFinderPage from './pages/MovieFinderPage';
import MovieInfoPage from './pages/MovieInfoPage';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MovieFinderPage />} />
          <Route path='/info' element={<MovieInfoPage />} />
        </Routes>
      </Router>       
    </>
  )
}

export default App;
