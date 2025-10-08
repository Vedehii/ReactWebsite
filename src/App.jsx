import { useState } from 'react';
import { Header, Navbar, VisionMission, CoreValues, OurTeam, Blog,Doet,Footer,CaseStudies } from './components/index.js';
import './App.css';





const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Navbar />
      <Header/> 
      <VisionMission />
      <CoreValues />
      <OurTeam />
      <Blog />
      <Doet/>
      <CaseStudies/>
      <Footer />

    </div>
  );
};

export default App;
