import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"; // Asegúrate de que esté con la capitalización correcta
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar /> {/* Aquí está el componente NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
