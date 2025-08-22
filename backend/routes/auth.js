const express = require('express'); // Importamos Express
const router = express.Router(); // Creamos un router de Express para definir rutas modularmente
const User = require('../models/User'); // Importamos el modelo de usuario
const bcrypt = require('bcrypt'); // Importamos bcrypt para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Importamos jsonwebtoken para generar tokens de autenticación
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para proteger rutas

// 1. Registro
router.post('/register', async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body; // Extraemos los datos del cuerpo de la solicitud
    if (!nombre || !email || !password)
      return res.status(400).json({ message: "Nombre, email y contraseña son obligatorios" });

    const existingUser = await User.findOne({ email }); // Verificamos si el email ya está registrado
    if (existingUser) return res.status(400).json({ message: "El correo ya está registrado" });

    const hashedPassword = await bcrypt.hash(password, 10); // Encriptamos la contraseña
    const newUser = new User({ nombre, email, password: hashedPassword, rol }); // Creamos el nuevo usuario
    await newUser.save(); // Guardamos el usuario en la base de datos

    res.status(201).json({ message: "Usuario registrado con éxito" }); // Respondemos con éxito
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error }); // Capturamos errores del servidor
  }
});

// 2. Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body; // Extraemos email y password
    const user = await User.findOne({ email }); // Buscamos al usuario por email
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

    const validPassword = await bcrypt.compare(password, user.password); // Comparamos la contraseña
    if (!validPassword) return res.status(400).json({ message: "Contraseña incorrecta" });

    // Generamos token JWT con id y rol del usuario, expira en 1 hora
    const token = jwt.sign({ id: user._id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Respondemos con token y datos del usuario (sin password)
    res.json({
      message: "Login exitoso",
      token,
      user: { id: user._id, nombre: user.nombre, email: user.email, rol: user.rol }
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error }); // Capturamos errores del servidor
  }
});

// 3. Perfil protegido
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Buscamos usuario por id, excluyendo la contraseña
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user); // Respondemos con datos del usuario
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
});

// 4. Obtener todos los usuarios (solo admin)
router.get('/users', authMiddleware, async (req, res) => {
  try {
    const requestingUser = await User.findById(req.user.id); // Obtenemos el usuario que hace la solicitud
    if (requestingUser.rol !== 'admin')
      return res.status(403).json({ message: 'Acceso denegado' }); // Verificamos que sea admin

    const users = await User.find().select('-password'); // Obtenemos todos los usuarios excluyendo contraseñas
    res.json(users); // Respondemos con la lista de usuarios
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
});

module.exports = router; 

