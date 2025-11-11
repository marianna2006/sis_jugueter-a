import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const reviewServices = {
  async createReview(data) {
    try {
      const { comment, rating, productId, userId } = data;

      return await prisma.review.create({
        data: { comment, rating, productId, userId },
        include: { user: { select: { name: true } } },
      });
    } catch (error) {
      throw new Error("Error al crear usuario." + error.message);
    }
  },

  async getReviewsByProduct(productId) {
    try {
      return await prisma.review.findMany({
        where: { productId: Number(productId) },
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      });
    } catch (error) {
      throw new Error("Error al crear usuario." + error.message);
    }
  },

  async getAllReviews() {
    try {
      return await prisma.review.findMany({
        include: {
          product: true, 
        },
      });
    } catch (error) {
      throw new Error("Error al obtener reseñas: " + error.message);
    }
  },
};
