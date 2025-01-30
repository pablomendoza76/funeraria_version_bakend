import EncargadoModel from "../models/EncargadoModel.js";
import CursoModel from "../models/CursoModel.js";
import RecursoModel from "../models/RecursoModel.js";

// Definir los modelos disponibles en un objeto para acceso rápido
const models = {
    encargado: EncargadoModel,
    curso: CursoModel,
    recurso: RecursoModel,
}

// Middleware para inyectar el modelo correspondiente según la URL
const injectModel = (req, res, next) => {
    const modelName = req.params.model; // Obtener el nombre del modelo de la URL
    const model = models[modelName];   // Buscar el modelo en el objeto models

    // Si no es una ruta que requiera un modelo, continuar sin hacer nada
    if (!modelName || !model) {
      return res.status(400).json({ message: `El modelo '${modelName}' no es válido.` });
    }    

    req.model = model; // Inyectar el modelo en el objeto req
    next();            // Continuar con el siguiente middleware o controlador
};

export default injectModel;
