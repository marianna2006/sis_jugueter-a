import express from "express";
import {registerUser} from "../controllers/emailControllers.js"

const router = express.Router();

router.post("/register", registerUser)
/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Register usuario y enviar
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email: 
 *                type: object
 *                example: usuario@gmail.com
 *              name:
 *                type: string
 *                example: Marianna Mori
 *    responses:
 *      200:
 *        description: Email enviado correctamente
 *      500:
 *        description: Error del servidor
 */

export default router;