import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Domain from "./pages/Domain";
import "./App.css";
import ParticlesComponent from "./components/Particles";

function App() {
  return (
    <div>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Domain />
      <Footer />
    </div>
  );
}
export default App;
