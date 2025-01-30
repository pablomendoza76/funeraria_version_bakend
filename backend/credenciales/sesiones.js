import bcrypt from 'bcrypt';
import db from '../database/db.js';  // Conexión a la base de datos
import CredencialesModel from '../models/CredencialesModel.js';

// Lógica para el inicio de sesión
export const login = async (req, res) => {
  const { email, password } = req.body;  // Recibimos email y contraseña

  console.log('Email recibido:', email);  // Verifica que el email esté llegando correctamente

  try {
    // Buscar la credencial en la base de datos
    const credencial = await CredencialesModel.findOne({ where: { correo: email } });

    if (!credencial) {
      return res.status(401).json({ mensaje: 'Email no encontrado' });
    }

    console.log('Contraseña del usuario:', password);
    console.log('Contraseña almacenada:', credencial.contrasena);
    console.log('Departamento:', credencial.departamento);

    // Comparar la contraseña ingresada con la contraseña encriptada
    const esValida = await bcrypt.compare(password, credencial.contrasena);

    if (!esValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    // Mapeo de departamentos
    const departamentosPermitidos = {
      'Servicio al Cliente': 'cliente',
      'Administración': 'admin',
      'Soporte Técnico': 'soporte',
      'Recursos Humanos': 'rrhh',
    };

    const departamentoNombre = departamentosPermitidos[credencial.departamento];

    if (!departamentoNombre) {
      return res.status(403).json({ mensaje: 'Acceso denegado: Departamento no permitido' });
    }

    // Guardar los datos en la sesión
    req.session.usuarioId = credencial.id;
    req.session.email = credencial.correo;
    req.session.departamento = credencial.departamento;

    req.session.save((err) => {
      if (err) {
        console.error("Error al guardar la sesión:", err);
      } else {
        console.log("Sesión guardada exitosamente:", req.session);
      }
    });

    return res.status(200).json({
      success: true,
      departamento: departamentoNombre,
      mensaje: 'Inicio de sesión exitoso',
    });
  } catch (error) {
    console.error('Error al verificar las credenciales:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Lógica para cerrar sesión
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al cerrar sesión' });
    }
    res.status(200).json({ mensaje: 'Sesión cerrada con éxito' });
  });
};
