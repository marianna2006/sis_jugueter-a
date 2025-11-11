import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const productServices = {
  //Crear producto
  async createProduct(data) {
    try {
      const {
        name,
        description,
        price,
        previousPrice,
        stock,
        image,
        categoryId,
      } = data;

      //Categoría
      if (!categoryId) throw new Error("Debe enviar un categoryId válido");

      return await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          previousPrice: parseFloat(previousPrice),
          stock: parseInt(stock),
          image,
          categoryId: parseInt(categoryId),
        },
      });
    } catch (error) {
      throw new Error("Error al crear producto: " + error.message);
    }
  },

  //Obtener productos
  async getAllProducts() {
    try {
      return await prisma.product.findMany({
        include: {
          category: true,
          reviews: true,
        },
      });
    } catch (error) {
      throw new Error("Error al obtener productos: " + error.message);
    }
  },

  //Obtener productos por Id
  async getProductById(id) {
    try {
      return await prisma.product.findUnique({
        where: { id: parseInt(id) },
        include: {
          category: true,
          reviews: true,
        },
      });
    } catch (error) {
      throw new Error("Error al obtener producto: " + error.message);
    }
  },

  //Actualizar producto
  async updateProduct(id, data) {
    try {
      return await prisma.product.update({
        where: { id: parseInt(id) },
        data: {
          ...data,
          price: data.price ? parseFloat(data.price) : undefined,
          previousPrice: data.previousPrice
            ? parseFloat(data.previousPrice)
            : undefined,
          stock: data.stock ? parseInt(data.stock) : undefined,
          categoryId: data.categoryId ? parseInt(data.categoryId) : undefined,
        },
      });
    } catch (error) {
      throw new Error("Error al actualizar producto: " + error.message);
    }
  },

  //Eliminar producto
  async deleteProduct(id) {
    try {
      return await prisma.product.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      throw new Error("Error al eliminar usuario" + error.message);
    }
  },

  // Obtener productos populares
  async getPopularProducts() {
    try {
      return await prisma.product.findMany({
        where: { isPopular: true },
        include: {
          category: true,
          reviews: true,
        },
      });
    } catch (error) {
      throw new Error("Error al obtener productos populares: " + error.message);
    }
  },

  // Obtener productos nuevos
  async getNewProducts() {
    try {
      return await prisma.product.findMany({
        where: { isNew: true },
        include: {
          category: true,
          reviews: true,
        },
      });
    } catch (error) {
      throw new Error("Error al obtener productos nuevos: " + error.message);
    }
  },

  // Obtener productos en oferta
  async getOfferProducts() {
    try {
      const products = await prisma.product.findMany({
        where: { isOffer: true },
        include: {
          category: true,
          reviews: true,
        },
      });
      console.log("Productos en oferta:", products); // <--- Verificar aquí
      return products;
    } catch (error) {
      console.error("Error en getOfferProducts:", error); // <--- Para ver errores
      throw new Error("Error al obtener productos en oferta: " + error.message);
    }
  },
};
