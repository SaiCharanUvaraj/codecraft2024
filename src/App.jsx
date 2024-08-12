import React from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Domain from "./pages/Domain";
import Home from "./pages/Home";
import Coord from "./pages/Coord";
import "./App.css";
import ParticlesComponent from "./components/Particles";
import { Maps } from "./pages/Maps";
import InfoSection from './pages/InfoSection';
import Count from './pages/Count';
import Prize from './pages/Prize';


function App() {
  return (
      <div>
        <Navbar />
        <ParticlesComponent id="particles" />
        <Home />

        <Domain />
        <InfoSection />
        <Maps />
        <Footer />
      </div>
  );
}

export default App;
