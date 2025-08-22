# 🖥️ Sistema de Gestión Backend

## 📄 Descripción
Proyecto de gestión de usuarios con autenticación y roles (`admin` y `usuario`).  
Incluye backend con Node.js, Express y MongoDB, usando JWT para autenticación y bcrypt para encriptar contraseñas.

---

## 🛠️ Tecnologías usadas
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt  
- **Otros:** dotenv, cors

---

## 📂 Estructura del proyecto
/backend
|-- server.js

|-- routes/

|-- auth.js

|-- models/

|-- User.js

|-- middleware/

|-- authMiddleware.js

|-- .env

yaml
Copy
Edit

---

## ⚙️ Requisitos previos
- Node.js >= 18  
- MongoDB instalado o acceso a MongoDB Atlas  
- npm

---

## 🚀 Instrucciones de ejecución (Backend)

1. Ir a la carpeta backend:
```bash
cd backend
Instalar dependencias:

bash
npm install
Crear un archivo .env en la raíz del backend con las siguientes variables:

env
PORT=4000
MONGO_URI=tu_URI_de_mongodb
JWT_SECRET=tu_clave_secreta
Ejecutar el servidor en modo desarrollo:

bash
npm run dev
O en modo producción:

bash
node server.js
Verificar que el servidor funciona abriendo en el navegador o con Postman:

nginx
GET http://localhost:4000/

Debería responder: API funcionando 🚀

📌 Endpoints principales
POST /api/auth/register → Registrar usuario

POST /api/auth/login → Iniciar sesión

GET /api/auth/profile → Obtener perfil (requiere token)

GET /api/auth/users → Listar todos los usuarios (solo admin)

🧑‍💻 Autor
Nombre: Michael Andres Lopez Cardenas
