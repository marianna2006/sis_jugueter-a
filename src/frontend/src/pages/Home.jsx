import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrusel from "../components/sections/Carrusel";
import PopularSection from "../components/sections/PopularSection";
import Categorias from "../components/sections/Categorias";
import NewProductSection from "../components/sections/NewProductsSection";
import AgeRanges from "../components/sections/AgeRanges";
import Offers from "../components/sections/Offers";
import Reviews from "../components/sections/Reviews";
import Newsletter from "../components/sections/Newsletter";


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
      <div className="p-6">
        <PopularSection></PopularSection>
      </div>

      {/*Categorías */}
      <h2 className="text-4xl font-bold text-center mt-8 mb-2 text-primary">
        ¡¡Explora nuestras categorías!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Encuentra el juguete perfecto para cada lugar y ocasión
      </p>
      <div className="mb-10">
        <Categorias></Categorias>
      </div>

      {/*Novedades*/}
    <div className="mt-10">
      <NewProductSection></NewProductSection>
    </div>

      {/*Edades */}
      <h2 className="text-4xl font-bold text-center mt-12 mb-2 text-primary">
        ¡¡Clasificados por edad!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Diseñado para cada etapa de tu vida
      </p>
      <div className="">
        <AgeRanges></AgeRanges>
      </div>

      {/*Ofertas */}
      <div className="mt-10">
        <Offers></Offers>
      </div>

      {/*Reseñas */}
      <div className="mt-10">
        <Reviews></Reviews>
      </div>

      {/*Boletín informativo */}
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
}
export default Home;
