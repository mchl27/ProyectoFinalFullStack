// Importamos mongoose
const mongoose = require('mongoose');

// Definimos el esquema del usuario
const UserSchema = new mongoose.Schema({
  nombre: {
    type: String, // Tipo de dato: cadena de texto
    required: true // Campo obligatorio
  },
  email: {
    type: String, // Tipo de dato: cadena de texto
    required: true, // Campo obligatorio
    unique: true // Debe ser único en la base de datos
  },
  password: {
    type: String, // Tipo de dato: cadena de texto
    required: true // Campo obligatorio
  },
  rol: {
    type: String, // Tipo de dato: cadena de texto
    enum: ['admin', 'usuario'], // Solo puede ser 'admin' o 'usuario'
    default: 'usuario' // Valor por defecto
  }
}, { timestamps: true }); // Agrega automáticamente campos createdAt y updatedAt

// Exportamos el modelo de usuario para usarlo en rutas y controladores
module.exports = mongoose.model('User', UserSchema);
