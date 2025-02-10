import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import routes from "./routes/routes.js";
import loggerMiddleware from "./controllers/middleware.js";
import loadAssociations from "./models/associations.js";
import session from 'express-session';
import mysqlInstance from "./database/db.js";

const app = express();

// Cargar asociaciones
loadAssociations();

// Configura express-session
app.use(session({
  secret: 'tu-secreto-aqui',  // Usa un secreto fuerte
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,  // Debe ser true en producción si usas HTTPS
    httpOnly: true,  // Mejorar la seguridad
    maxAge: 24 * 60 * 60 * 1000,  // 1 día en milisegundos
  },
}));

// Configurar CORS para permitir solicitudes desde http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',  // Asegúrate de que esta URL coincida con tu frontend
  methods: ['GET', 'POST', 'DELETE'],  // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Añadir Authorization si usas tokens
  credentials: true,  // Permite el envío de cookies con la solicitud
}));

// Rutas
app.use(express.json());  // Middleware para parsear JSON
app.use('/pablo', routes);

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ message: "Ocurrió un error interno" });
});

// Prueba la conexión a la base de datos
(async () => {
  try {
    const sequelize = mysqlInstance; // Instancia del Singleton para la conexión a la base de datos
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

// Manejo de rutas no existentes
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000");
});
