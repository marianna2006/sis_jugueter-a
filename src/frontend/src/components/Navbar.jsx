import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCart } from "./cards/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }),
    [];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center bg-[#F1F5FC] px-20 shadow-md border-b border-black w-full py-4">
      {/* Logo */}
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

      {/* Menú principal */}
      <ul className="flex gap-10 items-center">
        <li className="relative group">
          <button className="flex items-center gap-2 text-2xl hover:text-green-500">
            Categorías <FaChevronDown className="text-sm" />
          </button>

          {/* Dropdown */}
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
            <ul className="flex flex-col py-2 text-gray-700">
              {[
                { path: "muñecas", name: "Muñecas" },
                { path: "educativos", name: "Educativos" },
                { path: "deportes", name: "Deportes" },
                { path: "vehiculos", name: "Vehículos" },
                { path: "construccion", name: "Construcción" },
              ].map((cat) => (
                <li key={cat.path}>
                  <Link
                    to={`/categoria/${cat.path}`}
                    className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
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
            to="/contacts"
            className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500"
          >
            Contactos
          </Link>
        </li>

        <li>
          <Link
            to="/blogs"
            className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500"
          >
            Blog
          </Link>
        </li>
      </ul>

      {/* Buscador */}
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

      {/* Iconos y login/logout */}
      <div className="flex gap-8 items-center">
        <button className="p-2 border hover:border-green-400 rounded relative">
          <img src="../assets/icon-shoppingcart.svg" alt="Carrito" />

          {/* Contador dinámico */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.reduce((acc, p) => acc + p.quantity, 0)}
            </span>
          )}
        </button>

        {token ? (
          <button
            onClick={handleLogout}
            className="text-xl text-green-600 hover:text-red-500 font-semibold"
          >
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login">
            <button className="p-2 border hover:border-green-400 rounded">
              <img src="../assets/icon-user.svg" alt="Usuario" />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
