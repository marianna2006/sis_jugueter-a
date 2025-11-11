import { useState } from "react";

export default function ReviewForm({ productId, onReviewSubmitted }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stars = [1, 2, 3, 4, 5];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("Debes iniciar sesión para escribir una reseña");

      console.log("Token que se enviará:", token);

      const res = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ productId, comment, rating }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al enviar reseña");

      onReviewSubmitted(data);
      setComment("");
      setRating(5);
      setHoverRating(0);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-gray-50 p-6 rounded-3xl shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-800">Escribe tu reseña</h3>

      {/* Estrellas clicables */}
      <div className="flex items-center gap-2">
        {stars.map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={star <= (hoverRating || rating) ? "#FBBF24" : "#E5E7EB"} // amarillo si está seleccionado
            className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-125"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.034 9.39c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.962z" />
          </svg>
        ))}
      </div>

      <textarea
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe tu comentario..."
        className="border p-3 rounded-xl resize-none w-full focus:ring-2 focus:ring-indigo-400 outline-none"
        rows={4}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md"
      >
        {loading ? "Enviando..." : "Enviar reseña"}
      </button>
    </form>
  );
}
