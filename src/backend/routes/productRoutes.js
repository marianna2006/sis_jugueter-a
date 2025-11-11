import express from "express";
import { productControllers } from "../controllers/productControllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        name:
 *          type: string
 *          example: Muñeco bebé con vincha rosa
 *        description:
 *          type: string
 *          example: Muñeco de vincha rosa y lazos rosas
 *        price:
 *          type: number
 *          example: 99.99
 *        oldPrice:
 *          type: number
 *          example: 120.00
 *        stock:
 *          type: integer
 *          example: 10
 *        categoryId:
 *          type: integer
 *          example: 1
 *        image:
 *          type: string
 *          example: "https://misitio.com/images/muñeco.jpg"
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 */

//Obtener todos  los productos
router.get("/", productControllers.getAllProducts);
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

// GET producto por ID
router.get("/:id", productControllers.getProductById);
/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Obtener un producto por ID
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID del producto
 *        schema:
 *          type: integer
 *          example: 1
 *    responses:
 *      200:
 *        description: Producto encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Producto no encontrado
 */

// POST crear producto
router.post("/", productControllers.createProduct);
/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Crear un nuevo producto
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Muñeco bebé con vincha rosa
 *              description:
 *                type: string
 *                example: Muñeco de vincha rosa y lazos rosas
 *              price:
 *                type: number
 *                example: 99.99
 *              oldPrice:
 *                type: number
 *                example: 120.00
 *              stock:
 *                type: integer
 *                example: 10
 *              categoryId:
 *                type: integer
 *                example: 1
 *              image:
 *                type: string
 *                example: "https://misitio.com/images/muñeco.jpg"
 *    responses:
 *      201:
 *        description: Producto creado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Datos inválidos
 */


// PUT actualizar producto
router.put("/:id", productControllers.updateProduct);
/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Actualizar un producto
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID del producto a actualizar
 *        schema:
 *          type: integer
 *          example: 1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              price:
 *                type: number
 *              oldPrice:
 *                type: number
 *              stock:
 *                type: integer
 *              categoryId:
 *                type: integer
 *              image:
 *                type: string
 *    responses:
 *      200:
 *        description: Producto actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Producto no encontrado
 */

// DELETE eliminar producto
router.delete("/:id", productControllers.deleteProduct);
/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Eliminar un producto
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID del producto a eliminar
 *        schema:
 *          type: integer
 *          example: 1
 *    responses:
 *      200:
 *        description: Producto eliminado correctamente
 *      404:
 *        description: Producto no encontrado
 */

router.get("/filter/popular", productControllers.getPopularProducts);
router.get("/filter/new", productControllers.getNewProducts);
router.get("/filter/offer", productControllers.getOfferProducts);

export default router;
