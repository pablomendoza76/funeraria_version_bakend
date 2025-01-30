import db from "../database/db.js";
import { DataTypes } from "sequelize";
import CursoModel from "./CursoModel.js";

const RecursoModel = db.define(
  "recursos",
  {
    id_recurso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_curso: {
      type: DataTypes.INTEGER,
      references: {
        model: CursoModel,
        key: "id_curso",
      },
    },
    tipo: {
      type: DataTypes.ENUM("video", "encuesta", "youtube", "otro"),
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ruta_archivo: {
      type: DataTypes.STRING(255),
      allowNull: true, // Ruta del archivo en el servidor
    },
    completado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "recursos",
    timestamps: false,
  }
);

export default RecursoModel;
