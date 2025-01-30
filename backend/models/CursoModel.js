import db from "../database/db.js";
import { DataTypes } from "sequelize";
import EncargadoModel from "./EncargadoModel.js"; // Importar el modelo de Encargado

const CursoModel = db.define(
  "cursos",
  {
    id_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    progreso: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 100,
      },
    },
    id_encargado: {
      type: DataTypes.INTEGER,
      references: {
        model: EncargadoModel,
        key: "id_encargado",
      },
    },
  },
  {
    tableName: "cursos",
    timestamps: false,
  }
);

// Relación con Encargados (Uno a Muchos)
CursoModel.belongsTo(EncargadoModel, {
  foreignKey: "id_encargado",
  targetKey: "id_encargado",
});

export default CursoModel;
