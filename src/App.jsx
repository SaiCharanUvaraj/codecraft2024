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
import Sponsors from './pages/Sponsors'
import { Stdcoord } from './pages/Stdcoord';
import CustomizedTimeline from './pages/Timeline';

function App() {
  return (
      <div>
        <Navbar />
        <div className='p-4'>
        <ParticlesComponent id="particles" />
        <div className='pt-20 md:pt-0'>
        <Home />
        </div>
        {/* <Count /> */}
        <Prize />
        <Domain />
        {/* <Coord /> */}
        <div className=''>
          <InfoSection />
        </div>
        <Stdcoord />
        <CustomizedTimeline/>
        <Sponsors />
        <Maps />
        </div>
        <Footer />
      </div>
  );
}

export default App;
