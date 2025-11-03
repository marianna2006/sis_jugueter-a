import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-green-600">TOY’S HOUSE</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/ofertas">Ofertas</Link>
        </li>
        <li>
          <Link to="/contactos">Contactos</Link>
        </li>
      </ul>
      
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Buscar juguete"
          className="border rounded px-2 py-1"
        />
        <button>🛒</button>
      </div>
    </nav>
  );
}
