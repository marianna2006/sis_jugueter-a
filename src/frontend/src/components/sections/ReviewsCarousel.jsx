import { useEffect, useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const url = productId
          ? `http://localhost:3000/api/reviews/${productId}`
          : `http://localhost:3000/api/reviews`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al obtener reseñas");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [productId]);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-6">Cargando reseñas...</p>
    );
  if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;
  if (reviews.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">
        No hay reseñas disponibles.
      </p>
    );

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Reseñas de clientes
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide py-2 px-2"
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="flex-shrink-0 w-60 bg-white rounded-xl shadow p-3 hover:shadow-lg transition-shadow"
            >
              {/* Imagen del producto */}
              {r.product?.image && (
                <div className="w-full h-32 mb-2 rounded-lg overflow-hidden">
                  <img
                    src={r.product.image}
                    alt={r.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-semibold text-gray-800">
                  {r.user?.name || "Usuario"}
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < r.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600 italic line-clamp-3">
                {r.comment}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-primary hover:text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
