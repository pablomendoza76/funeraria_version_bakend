import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio'; 
import Historia from './SomosFunerariaJaramillo/Historia';
import Objetivos from './SomosFunerariaJaramillo/Objetivos';
import DepartamentosMision from './SomosFunerariaJaramillo/DepartamentosMision';
import Organigrama from './SomosFunerariaJaramillo/Organigrama';
import Productos from './SomosFunerariaJaramillo/Productos';
import Ofertas from './Cursos/Ofertas';
import Home from './Cursos/Home';
import Explorar from './Cursos/Explorar';
import Quiz from './Cursos/Quiz';
import IrCurso from './Cursos/IrCurso';
import Vinculacion from './Manuales/Vinculacion';
import Permisos from './Manuales/Permisos';
import Pagos from './Manuales/Pagos';
import ImagenCorporativa from './Manuales/ImagenCorporativa';
import Beneficios from './CulturaOrganizacional/Beneficios';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/SomosFunerariaJaramillo/Historia" element={<Historia />} />
          <Route path="/SomosFunerariaJaramillo/Objetivos" element={<Objetivos />} />
          <Route path="/SomosFunerariaJaramillo/DepartamentosMision" element={<DepartamentosMision />} />
          <Route path="/SomosFunerariaJaramillo/Organigrama" element={<Organigrama />} />
          <Route path="/SomosFunerariaJaramillo/Productos" element={<Productos />} />
          <Route path="/Cursos/Ofertas" element={<Ofertas />} /> 
          <Route path="/Cursos/Home" element={<Home />} /> 
          <Route path="/Cursos/Explorar" element={<Explorar />} /> 
          <Route path="/Cursos/Quiz" element={<Quiz />} /> 
          <Route path="/Cursos/IrCurso" element={<IrCurso />} /> 
          <Route path="/Manuales/Vinculacion" element={<Vinculacion />} /> 
          <Route path="/Manuales/Permisos" element={<Permisos />} /> 
          <Route path="/Manuales/Pagos" element={<Pagos />} /> 
          <Route path="/Manuales/ImagenCorporativa" element={<ImagenCorporativa />} /> 
          <Route path="/CulturaOrganizacional/Beneficios" element={<Beneficios />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
