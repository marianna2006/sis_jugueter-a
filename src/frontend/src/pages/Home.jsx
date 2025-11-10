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
      <div className="p-6 mt-10">
        <PopularSection></PopularSection>
      </div>

      {/*Categorías */}
      <div className="p-6 mt-10">
        <Categorias></Categorias>
      </div>

      {/*Novedades*/}
      <div className="p-6 mt-10">
        <NewProductSection></NewProductSection>
      </div>

      {/*Edades */}
      <div className="p-6 mt-10">
        <AgeRanges></AgeRanges>
      </div>

      {/*Ofertas */}
      <div className="p-6 mt-10">
        <Offers></Offers>
      </div>

      {/*Reseñas */}
      <div className="p-6 mt-10">
        <Reviews></Reviews>
      </div>

      {/*Boletín informativo */}
      <div className="p-6 mt-10">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
}
export default Home;
