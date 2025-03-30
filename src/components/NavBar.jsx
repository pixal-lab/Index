import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/xelphion.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // pagina activa
  const linkClasses = (path) =>
    `px-4 py-0.5 text-lg font-semibold transition-colors ${
      location.pathname === path
        ? "text-blue-400 border-blue-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 py-1 text-white shadow-lg">
      <div className="max-w-inherit scontainer px-7 flex justify-between items-center py-1">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <p>Pixal-lab</p>
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="" size={28} /> : <Menu size={28} />}
        </button>

        <ul
          className={`absolute md:static top-12 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex transition-all duration-300 ease-in-out 
          ${isOpen ? "block pl-3 py-3 space-y-3" : "hidden"}`}
        >
          <li>
            <Link to="/" className={linkClasses("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" className={linkClasses("/projects")}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClasses("/about")}>
              Sobre mí
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
