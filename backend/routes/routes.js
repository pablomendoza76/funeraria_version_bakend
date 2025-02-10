import express from 'express';
import bcrypt from 'bcrypt';
import Credencial from '../models/Credencial.js';  // Modelo de credenciales

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario en la base de datos usando el modelo Credencial
    const user = await Credencial.findOne({ where: { correo: email } });

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña (suponiendo que las contraseñas están cifradas)
    const isPasswordValid = await bcrypt.compare(password, user.contrasena);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si todo es válido, establecer la sesión
    req.session.userId = user.id;  // Guardamos el ID del usuario en la sesión
    res.status(200).json({ message: 'Inicio de sesión exitoso' });

  } catch (error) {
    console.error('Error en la autenticación:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;
