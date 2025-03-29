import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MiPortfolio
        </Link>

        {/* Botón para el menú en móviles */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <ul
          className={`md:flex space-x-4 absolute md:static bg-gray-900 md:bg-transparent top-16 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li>
            <Link to="/" className="hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar
