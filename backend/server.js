const express = require('express'); // Importamos Express, framework para crear servidores
const mongoose = require('mongoose'); // Importamos Mongoose para interactuar con MongoDB
const cors = require('cors'); // Importamos CORS para permitir solicitudes desde otros dominios
require('dotenv').config(); // Cargamos variables de entorno desde un archivo .env

const app = express(); // Creamos la instancia de Express

// 1. Middlewares
app.use(cors()); // Habilitamos CORS para todas las rutas
app.use(express.json()); // Permitimos recibir datos en formato JSON en las solicitudes

// 2. Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI) // Conectamos a la base de datos usando la URI del .env
  .then(() => console.log("✅ MongoDB conectado")) // Si la conexión es exitosa, mostramos mensaje
  .catch(err => console.log("❌ Error de conexión:", err)); // Si falla, mostramos el error

// 3. Importar rutas
const authRoutes = require('./routes/auth'); // Importamos las rutas de autenticación
app.use('/api/auth', authRoutes); // Definimos que todas las rutas de auth comiencen con /api/auth

// 4. Ruta inicial
app.get("/", (req, res) => {
  res.send("API funcionando 🚀"); // Ruta principal para verificar que el servidor está activo
});

// 5. Iniciar servidor
const PORT = process.env.PORT || 4000; // Puerto definido en el .env o 4000 por defecto
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`)); // Iniciamos el servidor