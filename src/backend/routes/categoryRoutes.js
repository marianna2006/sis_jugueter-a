import express from 'express';
import { categoryControllers } from '../controllers/categoryControllers.js';

//Traer controlador
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        name:
 *          type: string
 *          example: Muñecas
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 */

//GET
router.get('/',categoryControllers.getCategory);
/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: Obtener todas las categorías
 *    tags: [Categories] 
 *    responses: 
 *      200:
 *        description: OK
 */

//POST
router.post('/',categoryControllers.createCategory);
/**
 * @swagger
 * /api/categories:
 *  post:
 *    summary: Crear una nueva categoría
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Muñecas
 *    responses:
 *      201:
 *        description: Categoría creado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      400:
 *        description: Datos inválidos
 */

//PUT
router.put('/', categoryControllers.apdateCatgeory);
/**
 * @swagger
 * /api/categories/{id}:
 *  put:
 *    summary: Actualizar un categoría
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID de la categoría a actualizar
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
 *                example: Deportes
 *    responses:
 *      200:
 *        description: Categoría actualizada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: Categoría no encontrada
 */

//DELETE
router.delete('/',categoryControllers.deleteCategory);
/**
 * @swagger
 * /api/categories/{id}:
 *  delete:
 *    summary: Eliminar un producto
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID de la categoría a eliminar
 *        schema:
 *          type: integer
 *          example: 1
 *    responses:
 *      200:
 *        description: Categoría elimina correctamente
 *      404:
 *        description: Categoría no encontrado
 */

export default router;
