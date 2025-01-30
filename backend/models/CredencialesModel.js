import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CredencialesModel = db.define(
  "credenciales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100), // Limitar a 100 caracteres como en la base de datos
      allowNull: false,
      unique: true, // Garantizar correos únicos
      validate: {
        isEmail: true, // Validar formato de correo
      },
    },
    contrasena: {
      type: DataTypes.STRING(255), // Limitar a 255 caracteres
      allowNull: false,
    },
    departamento: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "credenciales",
    timestamps: false, // No usar createdAt y updatedAt
  }
);

export default CredencialesModel;
