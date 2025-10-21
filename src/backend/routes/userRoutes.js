import express from 'express';
import { userControllers } from '../controllers/userControllers.js';

//Traer controlador
const router = express.Router();

//Rutas para llamar al usuario
router.get('/', userControllers.getUsers);
router.post('/', userControllers.createUser);
router.put('/:id', userControllers.updateUser);

//Método para eliminar DELETE
//Método para actualizar PUT
//Método para modificar PATCH

export default router;