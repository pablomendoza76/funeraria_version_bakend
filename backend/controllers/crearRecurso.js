import RecursoModel from "../models/RecursoModel.js";
import CursoModel from "../models/CursoModel.js"; // Si necesitas verificar o utilizar el curso

// Crear un recurso
const CrearRecurso = async (req, res) => {
    try {
        // Obtener los datos del formulario
        const { id_curso, tipo, url, completado = false } = req.body; // Desestructurar los datos

        // Verificar si el curso existe
        const cursoExiste = await CursoModel.findByPk(id_curso);
        if (!cursoExiste) {
            return res.status(404).json({
                message: "Curso no encontrado",
            });
        }

        // Crear el objeto del recurso
        const nuevoRecurso = {
            id_curso, // Asociar el curso
            tipo, // El tipo de recurso (video, encuesta, etc.)
            url, // La URL, si es necesario para el tipo de recurso
            completado, // Definir si está completado (por defecto es false)
        };

        // Insertar el recurso en la base de datos
        const recursoCreado = await RecursoModel.create(nuevoRecurso);

        res.status(200).json({
            id_recurso: recursoCreado.id_recurso, // Retornar el ID del recurso creado
            mensaje: "Recurso creado exitosamente",
        });
    } catch (e) {
        console.error("Error al crear el recurso", e);
        res.status(500).json({
            message: "Error al crear el recurso",
            error: e.message,
        });
    }
};

export default CrearRecurso;
