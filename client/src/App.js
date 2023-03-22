import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, AboutMe, Resume, Skills, Projects, Contact } from './pages/indexpages'
import { Header, Footer } from './sections/indexSections'
import { Container } from './components/indexComponents'



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutme" element={<AboutMe />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
