import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Container, Footer } from './components/indexComponents'
import { Home, AboutMe } from './pages/indexpages'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Aboutme" element={<AboutMe />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>

  );
}

export default App;
