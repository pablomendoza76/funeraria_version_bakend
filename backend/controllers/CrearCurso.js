import CursoModel from "../models/CursoModel.js";

const CrearCurso = async (req, res) => {
    try {
        // Obtener datos del formulario
        const { nombre, descripcion, fecha_inicio, fecha_fin } = req.body;

        // Obtener el ID del encargado desde la sesión
        const id_encargado = req.session.person.id_encargado; // Ajustado el nombre de la propiedad

        // Crear el objeto de curso con los datos transformados
        const nuevoCurso = {
            nombre,
            descripcion,
            fecha_inicio,
            fecha_fin,
            id_encargado
        };

        // Insertar el curso en la base de datos
        const cursoCreado = await CursoModel.create(nuevoCurso);

        res.status(200).json({
            id_curso: cursoCreado.id_curso, // Retornar el ID del curso creado
            mensaje: "Curso creado exitosamente",
        });
    } catch (e) {
        console.error("Error al crear el curso", e);
        res.status(500).json({
            message: "Error al crear el curso",
            error: e.message,
        });
    }
};

export default CrearCurso;
