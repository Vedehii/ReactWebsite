import { useState } from 'react';
import { Header, Navbar, VisionMission, CoreValues, OurTeam, Blog, Footer,CTABanner } from './components/index.js';
import './App.css';


// You will ignore this and use the exported components above.
const App = () => {
  return (
    // This is the container that should be in your main App.jsx
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Navbar />
      <Header/> 
      <VisionMission />
      <CoreValues />
      <OurTeam />
      <Blog />
      {/* <CTABanner /> */}
      <Footer />
    </div>
  );
};

export default App;
