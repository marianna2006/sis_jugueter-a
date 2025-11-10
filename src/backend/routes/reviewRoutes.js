import express from "express";
import { reviewController } from "../controllers/reviewControllers.js";
import { authenticate } from "../middlewares/authMiddlewares.js";

//Traer controlador
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Review:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        rating:
 *          type: integer
 *          example: 5
 *        comment:
 *          type: string
 *          example: "Excelente producto, a mi hijo le encantó"
 *        productId:
 *          type: integer
 *          example: 3
 *        userId:
 *          type: integer
 *          example: 2
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 */

// CREAR RESEÑA (solo usuarios autenticados)
router.post("/", authenticate, reviewController.create);
/**
 * @swagger
 * /api/reviews:
 *  post:
 *    summary: Crear una nueva reseña (usuario autenticado)
 *    tags: [Reviews]
 *    security:
 *      - bearerAuth: []  # JWT requerido
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              rating:
 *                type: integer
 *                example: 4
 *              comment:
 *                type: string
 *                example: "Buena calidad y envío rápido"
 *              productId:
 *                type: integer
 *                example: 3
 *    responses:
 *      201:
 *        description: Reseña creada exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Review'
 *      401:
 *        description: Usuario no autenticado o token inválido
 *      500:
 *        description: Error al crear la reseña
 */

export default router;