import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './animations.css';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ExpertisePage from './components/pages/ExpertisePage';
import PathologiesPage from './components/pages/PathologiesPage';
import SinistresPage from './components/pages/SinistresPage';
import ActualitesPage from './components/pages/ActualitesPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expertise/:expertiseType" element={<ExpertisePage />} />
          <Route path="/dossiers/pathologies-batiment" element={<PathologiesPage />} />
          <Route path="/dossiers/sinistres-assurances" element={<SinistresPage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
