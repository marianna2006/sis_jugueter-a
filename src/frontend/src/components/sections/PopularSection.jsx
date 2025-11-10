import { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";

export default function PopularSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products") // tu backend
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold text-center mb-2 text-primary">
        ¡¡Productos destacados!!
      </h2>
      <p className="text-center text-2xl text-testSecondary mb-4">
        Los juguetes más populares y más valorados
      </p>

      <div className="overflow-x-auto">
        <div className="flex gap-4 p-4">
          {products.length > 0 ? (
            products.map((p) => (
              <div key={p.id} className="flex-shrink-0">
                <ProductCard
                  id={p.id} // 👈 necesario para el enlace dinámico
                  name={p.name}
                  price={`S/${p.price.toFixed(2)}`}
                  image={p.image}
                  oldPrice={
                    p.previousPrice ? `S/${p.previousPrice.toFixed(2)}` : null
                  }
                />
              </div>
            ))
          ) : (
            <p className="text-center w-full text-gray-500">
              Cargando productos...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
