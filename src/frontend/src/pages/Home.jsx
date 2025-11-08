import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import Categorias from "../components/Categorias";

function Home() {
  const [token, setToken] = useState(null);
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
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <section className="mb-5">
        <Carrusel></Carrusel>
      </section>

      {/*Productos destacados */}
      <section className="px-10 py-12 bg-[#F1F5FC] mb-5">
        <h2 className="text-4xl font-bold text-center mb-3 text-primary">
          ¡¡Productos destacados!!
        </h2>
        <p className="text-center text-2xl text-testSecondary">
          Los juguetes más populares y más valorados
        </p>
        
      </section>

      {/*Categorías */}
      <section className="px-10 py-12 bg-[#F1F5FC] mb-5">
        <h2 className="text-4xl font-bold text-center mb-3 text-primary">
          ¡¡Explora nuestras categorías!!
        </h2>
        <p className="text-center text-2xl text-testSecondary">
          Encuentra el juguete perfecto para cada lugar y ocasión
        </p>
        <Categorias></Categorias>
      </section>

      <h1 className="text-2xl font-bold mb-4">Bienvenido a mi pagina 🏡</h1>
      {token && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Cerrar Sesion
        </button>
      )}
      {token ? (
        <div>
          <p className="text-green-600 text-xl">Haz iniciado exitosamente</p>
        </div>
      ) : (
        <div>
          <p className="text-red-600 text-xl">
            Parece que no haz iniciado sesion
          </p>
          <Link to="/login" className="mt-4 inline-block text-blue-500">
            Ir a la pagina de Login
          </Link>
        </div>
      )}
    </div>
  );
}
export default Home;
