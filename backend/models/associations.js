import EncargadoModel from "./EncargadoModel.js"; // Asegúrate de tener el modelo de encargado
import CursoModel from "./CursoModel.js"; // Asegúrate de tener el modelo de curso
import RecursoModel from "./RecursoModel.js"; // Asegúrate de tener el modelo de recurso

const loadAssociations = () => {

  // Relación: Un encargado puede tener muchos cursos (1:N)
  EncargadoModel.hasMany(CursoModel, {
    foreignKey: 'id_encargado',  // Clave foránea en Cursos
    sourceKey: 'id_encargado',
    onDelete: 'CASCADE',  // Si se elimina el encargado, se eliminan los cursos asociados
  });

  // Relación: Un curso pertenece a un encargado (N:1)
  CursoModel.belongsTo(EncargadoModel, {
    foreignKey: 'id_encargado',  // Clave foránea en Curso
    targetKey: 'id_encargado',
  });

  // Relación: Un curso puede tener muchos recursos (1:N)
  CursoModel.hasMany(RecursoModel, {
    foreignKey: 'id_curso',  // Clave foránea en Recurso
    sourceKey: 'id_curso',
    onDelete: 'CASCADE',  // Si se elimina el curso, se eliminan los recursos asociados
  });

  // Relación: Un recurso pertenece a un curso (N:1)
  RecursoModel.belongsTo(CursoModel, {
    foreignKey: 'id_curso',  // Clave foránea en Recurso
    targetKey: 'id_curso',
  });

}

export default loadAssociations;
