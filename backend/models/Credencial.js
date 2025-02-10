import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Credencial = db.define('Credencial', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departamento: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'credenciales',
  timestamps: false,
});


// Exporta el modelo
export default Credencial;
