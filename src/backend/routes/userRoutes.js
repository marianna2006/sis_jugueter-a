import express from 'express';
import { userControllers } from '../controllers/userControllers.js';

//Traer controlador
const router = express.Router();

/** 
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties: 
 *        id:
 *          type: integer
 *          example: 1
 *        email: 
 *          type: string
 *          example: marianna@gmail.com
 *        name:
 *          type: string 
 *          example: marianna 
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses: 
 *      200:
 *        description: OK
 * 
 */

//Rutas para llamar al usuario
router.get('/', userControllers.getUsers);

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear un nuevo usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json: 
 *          schema:
 *            type: object
 *            properties:
 *              email: 
 *                type: string
 *                example: marianna@gmail.com
 *              name:
 *                type: string
 *                example: marianna
 *    responses:
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json: 
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos inválidos
 *      500:
 *        description: Error del servidor
 */

router.post('/', userControllers.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Actualizar usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *          example: 1
 *        description: ID del usuario a actualizar
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: 
 *              email: 
 *                type: string
 *                example: marianna@gmail.com
 *              name:
 *                type: string
 *                example: marianna
 *    responses:
 *      200:
 *        description: Usuario actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos inválidos
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error del servidor
 */

router.put('/:id', userControllers.updateUser);

//Método para eliminar DELETE
//Método para actualizar PUT
//Método para modificar PATCH

export default router;