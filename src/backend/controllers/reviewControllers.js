import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ message: "Usuario no autenticado" });

    const review = await prisma.review.create({
      data: {
        productId: parseInt(productId),
        userId,
        rating,
        comment,
      },
      include: { user: { select: { name: true } } },
    });

    res.status(201).json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear reseña" });
  }
};

export const getReviewsByProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);

    const reviews = await prisma.review.findMany({
      where: { productId },
      include: { user: { select: { name: true } } },
    });

    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener reseñas" });
  }
};
