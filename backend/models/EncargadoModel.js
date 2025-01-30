import db from "../database/db.js";
import { DataTypes } from "sequelize";

const EncargadoModel = db.define(
  "encargados",
  {
    id_encargado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: "encargados",
    timestamps: false,
  }
);

export default EncargadoModel;
