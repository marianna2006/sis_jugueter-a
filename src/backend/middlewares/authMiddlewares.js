import { verifyToken } from "../utils/auth.js";

export const authenticate = (req, res, next) => {
  try {
    // Verificar si tiene token
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token no proporcionado",
      });
    }

    // Verificar si el token es válido
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Token inválido o expirado",
      });
    }

    // Pasa validación de token
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error en la autenticación",
    });
  }
};
