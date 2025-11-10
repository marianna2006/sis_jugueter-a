import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ comment: "", rating: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reseña enviada:", review);
    navigate(`/product/${id}`); // Regresa al detalle
  };

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white shadow-lg rounded-3xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Escribir reseña</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium text-gray-700">Comentario:</label>
        <textarea
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          className="w-full border rounded-lg p-2 mb-4"
          rows="4"
          placeholder="Escribe tu reseña..."
        />
        <label className="block mb-2 font-medium text-gray-700">Calificación (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={review.rating}
          onChange={(e) => setReview({ ...review, rating: e.target.value })}
          className="w-full border rounded-lg p-2 mb-6"
        />
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(`/product/${id}`)}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Enviar reseña
          </button>
        </div>
      </form>
    </div>
  );
}
