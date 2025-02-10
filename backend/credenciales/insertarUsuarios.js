import bcrypt from 'bcrypt';
import db from '../database/db.js';  // Conexión a la base de datos

async function insertarUsuarios() {
  const usuarios = [
    { nombre: 'Juan', apellido: 'Pérez', correo: 'juan.perez@funerariaJaramilo.com', contrasena: '123456', departamento: 'Ventas' },
    { nombre: 'María', apellido: 'López', correo: 'maria.lopez@funerariaJaramilo.com', contrasena: '234567', departamento: 'Recursos Humanos' },
    { nombre: 'Carlos', apellido: 'Gómez', correo: 'carlos.gomez@funerariaJaramilo.com', contrasena: '345678', departamento: 'IT' },
    { nombre: 'Ana', apellido: 'Fernández', correo: 'ana.fernandez@funerariaJaramilo.com', contrasena: '456789', departamento: 'Marketing' },
    { nombre: 'Pedro', apellido: 'Ramírez', correo: 'pedro.ramirez@funerariaJaramilo.com', contrasena: '567890', departamento: 'Finanzas' },
  ];

  for (const usuario of usuarios) {
    const hash = await bcrypt.hash(usuario.contrasena, 10); // Genera el hash con bcrypt

    const query = `INSERT INTO credenciales (nombre_usuario, apellido_usuario, correo, contrasena, departamento) VALUES (?, ?, ?, ?, ?)`;

    await db.query(query, {
      replacements: [usuario.nombre, usuario.apellido, usuario.correo, hash, usuario.departamento],
      type: db.QueryTypes.INSERT, // Especifica que es una inserción
    });

    console.log(`Usuario ${usuario.correo} insertado con éxito.`);
  }
}

insertarUsuarios().catch(console.error);
