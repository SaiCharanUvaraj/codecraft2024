import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Domain from "./pages/Domain";
import Coord from "./pages/Coord";
import "./App.css";
import ParticlesComponent from "./components/Particles";
import { Maps } from "./pages/Maps";

function App() {
  return (
    <div>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Domain />
      <Coord /> 
      <Maps />
      <Footer />
    </div>
  );
}
export default App;
