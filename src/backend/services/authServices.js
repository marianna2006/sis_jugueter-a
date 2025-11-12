import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

import { hashPassword, comparePassword, generateToken } from "../utils/auth.js";

export const authServices = {
  // 🟢 Registrar usuario
  async register(data) {
    try {
      const { email, name, password } = data;

      // Verificar si el correo ya existe antes de crear
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        throw new Error("El correo electrónico ya está registrado");
      }

      // Hashear contraseña
      const hashedPassword = await hashPassword(password);

      // Crear usuario
      const user = await prisma.user.create({
        data: { email, name, password: hashedPassword },
      });

      // Generar token
      const token = generateToken(user.id, user.email);

      // Devolver usuario sin password
      const { password: _, ...userWithoutPassword } = user;

      return {
        user: userWithoutPassword,
        token,
      };
    } catch (error) {
      // Si es un error de Prisma por email duplicado
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        throw new Error("El correo electrónico ya está registrado");
      }
      throw new Error("Error al registrar usuario. " + error.message);
    }
  },

  // 🟣 Iniciar sesión
  async login(data) {
    try {
      const { email, password } = data;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new Error("Email no encontrado");
      }

      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Contraseña incorrecta");
      }

      const token = generateToken(user.id, user.email);
      const { password: _, ...userWithoutPassword } = user;

      return {
        user: userWithoutPassword,
        token,
      };
    } catch (error) {
      throw new Error(error.message || "Error al iniciar sesión");
    }
  },
};
