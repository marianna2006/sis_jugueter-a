import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#F1F5FC] px-20 shadow-md border-b border-black w-full py-4">
      <div className="flex items-center gap-3">
        <img src="../assets/logo.svg"></img>
        <li>
          <Link to="/" className="text-2xl font-bold text-[#007C4E] hover:text-green-500">TOY’S HOUSE</Link>
        </li>
      </div>

      <ul className="flex gap-10">
        <li>
          <Link to="/" className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500">Inicio </Link>
        </li>
        <li>
          <Link to="/ofertas" className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500">Ofertas</Link>
        </li>
        <li>
          <Link to="/contactos" className="text-2xl hover:underline hover:decoration-green-500 transition-all duration-200 hover:text-green-500">Contactos</Link>
        </li>
      </ul>
      
      <div className="flex border rounded w-80">
        <img src="../assets/icon-search.svg"></img>
        <input
          type="text"
          placeholder="Buscar juguete"
          className="border rounded px-2 py-1 w-80"
        />
      </div>

      <div className="flex gap-8">
        <button className="p-2 border hover:border-green-400 rounded">
          <img src="../assets/icon-shoppingcart.svg"></img>
        </button>
        <button className="p-2 border hover:border-green-400 rounded">
          <img src="../assets/icon-user.svg"></img>
        </button>
      </div>
    </nav>
  );
}
