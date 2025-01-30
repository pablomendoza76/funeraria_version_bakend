import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explorar.css";

const Explorar = () => {
  const navigate = useNavigate();
  const [inscritos, setInscritos] = useState(() => {
    const saved = localStorage.getItem("inscritos");
    return saved ? JSON.parse(saved) : [];
  });

  const cursos = [
    { id: 1, name: "Técnicas Avanzadas de Servicio al Cliente", image: "../img/curso1.jpg", description: "Mejora la experiencia del cliente con técnicas avanzadas.", price: "$25" },
    { id: 2, name: "Comunicación Efectiva en Atención al Cliente", image: "../img/curso2.jpg", description: "Desarrolla habilidades de comunicación profesional.", price: "$20" },
    { id: 3, name: "Gestión de Quejas y Reclamos", image: "../img/curso3.jpg", description: "Aprende a manejar situaciones difíciles con los clientes.", price: "$30" },
    { id: 4, name: "Primeros Auxilios en el Trabajo", image: "../img/curso4.jpg", description: "Capacitación básica para responder a emergencias.", price: "$40" },
    { id: 5, name: "Ergonomía y Postura Laboral", image: "../img/curso5.jpg", description: "Prevención de lesiones laborales con buena postura.", price: "$35" },
    { id: 6, name: "Mindfulness para Reducir el Estrés", image: "../img/curso6.jpg", description: "Técnicas de mindfulness para mejorar tu bienestar.", price: "$15" },
    { id: 7, name: "Servicio al Cliente con Inteligencia Emocional", image: "../img/curso7.jpg", description: "Usa la inteligencia emocional para mejorar relaciones.", price: "$30" },
    { id: 8, name: "Higiene y Seguridad Ocupacional", image: "../img/curso8.jpg", description: "Conoce las normativas y prácticas de seguridad.", price: "$50" },
  ];

  const handleInscribir = (curso) => {
    if (!inscritos.find((c) => c.id === curso.id)) {
      const nuevosInscritos = [...inscritos, { ...curso, progreso: 0 }];
      setInscritos(nuevosInscritos);
      localStorage.setItem("inscritos", JSON.stringify(nuevosInscritos));
      alert(`Te has inscrito al curso: ${curso.name}`);
    } else {
      alert("Ya estás inscrito en este curso.");
    }
  };

  return (
    <div className="explorar-page">
      <header className="explorar-header">
        <h1>Explora Nuestros Cursos</h1>
        <p>Descubre las mejores ofertas en capacitación.</p>
        <button className="explorar-btn-back" onClick={() => navigate("/Cursos/Home")}>
          ← Regresar a Home
        </button>
      </header>

      <div className="explorar-courses">
        {cursos.map((curso) => (
          <div key={curso.id} className="explorar-card">
            <img src={curso.image} alt={curso.name} className="explorar-image" />
            <h3>{curso.name}</h3>
            <p>{curso.description}</p>
            <span className="explorar-price">{curso.price}</span>
            <button className="explorar-btn-inscribir" onClick={() => handleInscribir(curso)}>
              Inscribirme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorar;
