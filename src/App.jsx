import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import MovieFinderPage from './pages/MovieFinderPage';
import MovieInfoPage from './pages/MovieInfoPage';
import { SearchProvider } from './provider/SearchContext';

function App() {
  
  return (
    <>
    <SearchProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MovieFinderPage />} />
          <Route path='/info' element={<MovieInfoPage />} />
        </Routes>
      </Router>
    </SearchProvider>       
    </>
  )
}

export default App;
