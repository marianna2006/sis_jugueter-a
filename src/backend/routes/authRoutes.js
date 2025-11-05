import express from "express";
import { authControllers } from "../controllers/authControllers.js";
import passport from "passport";
const router = express.Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    BearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 */

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Registrar nuevo usuario
 *    tags: [Auth]
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
 *                example: Marianna
 *              password:
 *                type: string
 *                example: m1223
 *    responses:
 *      201:
 *        description: Usuario registrado exitosamente
 *      400:
 *        description: Datos enviados incorrectos
 *      500:
 *        description: Error interno del servidor
 */
router.post("/register", authControllers.register);

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Iniciar sesión del usuario
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: sofia@gmail.com
 *              password:
 *                type: string
 *                example: s123
 *    responses:  
 *      200: 
 *        description: Inicio de sesión exitoso
 *      401: 
 *        description: Credenciales inválidas
 *      500:
 *        description: Error interno del servidor
 */
router.post("/login", authControllers.login);

router.get(
    "/google",
    passport.authenticate("google",{
        scope: ["profile", "email"],
    })
);

router.get(
    "/google/callback", 
    passport.authenticate("google", {
        failureRedirect: "http://localhost:5173/login-error",
    }),
    authControllers.googleCallBack
);


export default router;