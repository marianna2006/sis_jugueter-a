import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProduct = await fetch(
          `http://localhost:3000/api/products/${id}`
        );
        if (!resProduct.ok) throw new Error("Error al cargar producto");
        const dataProduct = await resProduct.json();
        setProduct(dataProduct);

        const resReviews = await fetch(
          `http://localhost:3000/api/reviews/${id}`
        );
        if (!resReviews.ok) throw new Error("Error al cargar reseñas");
        const dataReviews = await resReviews.json();
        setReviews(Array.isArray(dataReviews) ? dataReviews : []);
      } catch (err) {
        console.error(err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleNewReview = (review) =>
    setReviews((prev = []) => [review, ...prev]);

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-10">Cargando producto...</p>
    );
  if (!product)
    return (
      <p className="text-center text-red-500 mt-10">Producto no encontrado</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Producto */}
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-8">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>
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

          <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-all duration-300 shadow-md">
            Añadir al carrito
          </button>
        </div>
      </div>

      {/* Sección de reseñas y formulario */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
          Reseñas del producto
        </h2>

        {/* Formulario de reseña */}
        <div className="mb-8">
          <ReviewForm
            productId={parseInt(id)}
            onReviewSubmitted={handleNewReview}
          />
        </div>

        {/* Lista de reseñas */}
        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.id || r._id}
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                    {r.user?.name?.[0] || "A"}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {r.user?.name || "Usuario anónimo"}
                    </p>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill={i < r.rating ? "#FBBF24" : "#E5E7EB"}
                          className="w-5 h-5"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.034 9.39c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.962z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{r.comment}</p>
                <p className="text-gray-400 text-xs mt-3">
                  {new Date(r.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Aún no hay reseñas para este producto.
          </p>
        )}
      </div>
    </div>
  );
}
