import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: { 
        title: "API REST - JUGUETERIA TOY'S HOUSE", 
        version: "1.0.0",
        descripcion: "Documentacióm de API REST, Prisma y PostgrSQL",
        contact:{
            email: "mariannamori2006@gmail.com"
        },
    },   
    servers: [{ 
        url: "http://localhost:3000",
        description: "Servidor de Desarrollo"
    }],
  },
  apis: ["./routes/*.js"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
