import { productServices } from "../services/productServices.js";

export const productControllers = {
  // Crear producto
  async createProduct(req, res) {
    try {
      const { name, description, price, stock, categoryId, image } = req.body;

      // Validaciones básicas
      if (!name || !price || !stock || !categoryId) {
        return res.status(400).json({
          message: "Faltan datos obligatorios: name, price, stock o categoryId",
        });
      }

      const newProduct = await productServices.createProduct({
        name,
        description,
        price,
        stock,
        categoryId,
        image,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear producto: " + error.message });
    }
  },

  // Obtener todos los productos
  async getAllProducts(req, res) {
    try {
      const products = await productServices.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener productos: " + error.message });
    }
  },

  // Obtener producto por ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await productServices.getProductById(id);

      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.status(200).json(product);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener producto: " + error.message });
    }
  },

  // Actualizar producto
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price, stock, categoryId, image } = req.body;

      const updatedProduct = await productServices.updateProduct(id, {
        name,
        description,
        price,
        stock,
        categoryId,
        image,
      });

      res.status(200).json(updatedProduct);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al actualizar producto: " + error.message });
    }
  },

  // Eliminar producto
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await productServices.deleteProduct(id);
      res.status(200).json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar producto: " + error.message });
    }
  },
};
