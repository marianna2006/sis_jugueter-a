import { authServices } from "../services/authServices.js";
import { generateToken } from "../utils/auth.js";

export const authControllers = {
  //Registro tradicional
  async register(req, res) {
    try {
      const { email, name, password } = req.body;
      const result = await authServices.register({ email, name, password });

      res.status(201).json({
        succes: true,
        message: "Usuario registrado exitosamente.",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  },

  //Login traidicional
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await authServices.login({ email, password });

      // 🔹 Generar token JWT
      const token = generateToken(user);

      res.status(200).json({
        succes: true,
        message: "Inicio de sesión exitoso",
        data: {
          user,
          token, // <-- aquí lo devolvemos al frontend
        },
      });
    } catch (error) {
      if (
        error.message == "Email no encontrado" ||
        error.message == "Contraseña incorrecta"
      ) {
        return res.status(400).json({
          succes: false,
          message: error.message,
        });
      }

      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  },

  //Google Callback
  async googleCallBack(req, res) {
    try {
      const user = req.user;
      const token = generateToken(user.id, user.email);
      res.redirect(`http://localhost:5173/login-success?token=${token}`); //Vista de frontend exitosa
    } catch (error) {
      res.redirect(
        `http://localhost:5173/login-error?message=${error.message}`
      ); //Vista de frontend si falla
    }
  },
};
