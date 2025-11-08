import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#F1F5FC] px-20 shadow-md border-b border-black w-full py-4">
      <div className="flex items-center gap-3">
        <img src="../assets/logo.svg" alt="Logo" />
        <li>
          <Link
            to="/"
            className="text-2xl font-bold text-[#007C4E] hover:text-green-500"
          >
            TOY’S HOUSE
          </Link>
        </li>
      </div>

      <ul className="flex gap-10 items-center">
        {/* CATEGORÍAS */}
        <li className="relative group">
          <button className="flex items-center gap-2 text-2xl hover:text-green-500">
            Categorías <FaChevronDown className="text-sm" />
          </button>

          {/* Menú desplegable */}
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
            <ul
              className="flex flex-col py-2 text-gray-700"
              onMouseEnter={(e) =>
                e.currentTarget.parentElement.classList.add("group-hover")
              }
            >
              <li>
                <Link
                  to="/categoria/muñecas"
                  className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                >
                  Muñecas
                </Link>
              </li>
              <li>
                <Link
                  to="/categoria/educativos"
                  className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                >
                  Educativos
                </Link>
              </li>
              <li>
                <Link
                  to="/categoria/deportes"
                  className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                >
                  Deportes
                </Link>
              </li>
              <li>
                <Link
                  to="/categoria/vehiculos"
                  className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                >
                  Vehículos
                </Link>
              </li>
              <li>
                <Link
                  to="/categoria/construccion"
                  className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                >
                  Construcción
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link
            to="/ofertas"
            className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500"
          >
            Ofertas
          </Link>
        </li>

        <li>
          <Link
            to="/contactos"
            className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500"
          >
            Contactos
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500"
          >
            Blog
          </Link>
        </li>
      </ul>

      {/* BUSCADOR */}
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Buscar juguete"
          className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </div>

      <div className="flex gap-8">
        <button className="p-2 border hover:border-green-400 rounded">
          <img src="../assets/icon-shoppingcart.svg" alt="Carrito" />
        </button>
        <Link to="/Login">
          <button className="p-2 border hover:border-green-400 rounded">
            <img src="../assets/icon-user.svg" alt="Usuario" />
          </button>
        </Link>
      </div>
    </nav>
  );
}
