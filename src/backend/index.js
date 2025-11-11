import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import "./config/passport.js";
import session from "express-session";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import reviewsRoutes from "./routes/reviewRoutes.js";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({
    message: "API corriendo correctamente.",
  });
});

//Rutas que deseo usar
app.use("/api/users", userRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/reviews", reviewsRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo exitosamente😀😀.");
});
