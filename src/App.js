import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from "./components/StatsSection";
import ParticlesSection from "./components/ParticlesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StatsSection />
      <ParticlesSection />
    </div>
  );
}

export default App;
