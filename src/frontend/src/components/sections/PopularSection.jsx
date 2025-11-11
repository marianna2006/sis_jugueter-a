import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from "../cards/ProductCard";

export default function PopularSection() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        if (!res.ok) throw new Error("Error al obtener productos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-6">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-6">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No hay productos disponibles.</p>;
  }


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
                  id={p.id} 
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
