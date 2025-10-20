import express from 'express';
import { userControllers } from '../controllers/userControllers.js';

//Traer controlador
const router = express.Router();

//Rutas para llamar al usuario
router.get('/', userControllers.getUsers);
router.post('/', userControllers.createUser)

export default router;