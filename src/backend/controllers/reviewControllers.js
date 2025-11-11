import { reviewServices } from "../services/reviewServices.js";

export const reviewControllers = {
  // Crear reseña
  async createReview(req, res) {
    try {
      const { productId, rating, comment } = req.body;
      const userId = req.user?.id;
      if (!userId)
        return res.status(401).json({ message: "Usuario no autenticado" });

      const review = await reviewServices.createReview({
        productId,
        rating,
        comment,
        userId,
      });
      res.status(201).json(review);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error al crear reseña: " + err.message });
    }
  },

  // Obtener todas las reseñas
  async getAllReviews(req, res) {
    try {
      const reviews = await reviewServices.getAllReviews();
      res.status(200).json(reviews);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error al obtener reseñas: " + err.message });
    }
  },

  // Obtener reseñas por producto
  async getReviewsByProduct(req, res) {
    try {
      const { productId } = req.params;
      const reviews = await reviewServices.getReviewsByProduct(productId);
      res.status(200).json(reviews);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({
          message: "Error al obtener reseñas por producto: " + err.message,
        });
    }
  },
};
