import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Cargando producto...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Producto no encontrado</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-8">
        {/* Imagen del producto */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-gray-600 mb-5 leading-relaxed">
              {product.description || "Sin descripción disponible."}
            </p>

            <div className="flex items-center gap-3 mb-4">
              {product.previousPrice && (
                <span className="text-gray-400 line-through text-lg">
                  S/{product.previousPrice.toFixed(2)}
                </span>
              )}
              <span className="text-3xl font-semibold text-green-600">
                S/{product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-700 mb-1">Stock: {product.stock}</p>
            <p className="text-gray-700 mb-6">
              Categoría:{" "}
              <span className="font-medium text-primary">
                {product.category?.name || "Sin categoría"}
              </span>
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-md">
              Escribir reseña
            </button>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-all duration-300 shadow-md">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>

      {/* Sección de reseñas */}
      <div className="mt-12 bg-white rounded-3xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
          Reseñas del producto
        </h2>

        {product.reviews && product.reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {product.reviews.map((r) => (
              <div
                key={r.id}
                className="border rounded-2xl p-5 bg-gray-50 hover:shadow-lg transition duration-300"
              >
                <p className="font-semibold text-lg text-gray-800">
                  {r.user?.name || "Usuario anónimo"}
                </p>
                <p className="text-yellow-500 text-sm mb-2">⭐ {r.rating}/5</p>
                <p className="text-gray-600 italic">{r.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Aún no hay reseñas para este producto.</p>
        )}
      </div>
    </div>
  );
}
