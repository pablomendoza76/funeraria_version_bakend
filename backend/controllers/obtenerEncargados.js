import EncargadoModel from "../models/EncargadoModel.js";

// Obtener todos los encargados
const obtenerEncargados = async (req, res) => {
    try {
        // Obtener todos los encargados (solo id_encargado, nombre y apellido)
        const encargados = await EncargadoModel.findAll({
            attributes: ['id_encargado', 'nombre', 'apellido'], // Seleccionar solo los campos relevantes
        });

        // Verificar si se encontraron encargados
        if (encargados.length === 0) {
            return res.status(404).json({
                message: "No hay encargados disponibles",
            });
        }

        // Responder con los encargados encontrados
        res.status(200).json(encargados);
    } catch (e) {
        console.error("Error al obtener los encargados", e);
        res.status(500).json({
            message: "Error al obtener los encargados",
            error: e.message,
        });
    }
};

export default obtenerEncargados;
