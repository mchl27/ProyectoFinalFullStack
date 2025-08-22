const jwt = require('jsonwebtoken'); // Importamos jsonwebtoken para verificar tokens

// Middleware para proteger rutas y validar token JWT
function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization']; // Obtenemos el header "Authorization"
  if (!authHeader) {
    // Si no existe el header, acceso denegado
    return res.status(401).json({ message: "Acceso denegado, token faltante" });
  }

  // Separar "Bearer" del token
  const token = authHeader.split(' ')[1]; // Se espera formato "Bearer <token>"
  if (!token) {
    // Si no hay token después de "Bearer", acceso denegado
    return res.status(401).json({ message: "Token inválido" });
  }

  try {
    // Verificamos que el token sea válido usando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardamos la información del usuario en la request
    next(); // Pasamos al siguiente middleware o ruta
  } catch (error) {
    // Si el token es inválido o ha expirado
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

module.exports = authMiddleware; // Exportamos el middleware