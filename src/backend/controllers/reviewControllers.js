import { reviewServices } from "../services/reviewServices.js";

export const reviewController = {
  async create(req, res) {
    try {
      const userId = req.user.id; //middleware
      const review = await reviewServices.createReview({ ...req.body, userId });
      res.status(201).json(review);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear reseña" });
    }
  },

  async getByProduct(req, res) {
    try {
      const { productId } = req.params;
      const reviews = await reviewServices.getReviewsByProduct(productId);
      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener reseñas" });
    }
  },
};
