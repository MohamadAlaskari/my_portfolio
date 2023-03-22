import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, AboutMe } from './pages/indexpages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboutme" element={<AboutMe />} />
      </Routes>
    </Router>

  );
}

export default App;
