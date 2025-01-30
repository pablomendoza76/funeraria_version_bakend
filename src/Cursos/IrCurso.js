import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./IrCurso.css";

const IrCurso = () => {
    const [progreso, setProgreso] = useState(0); // Estado para el progreso del curso
    const navigate = useNavigate();

    useEffect(() => {
        // Recuperar el progreso inicial desde localStorage
        const progresoGuardado = JSON.parse(localStorage.getItem("inscritos")) || [];
        const cursoActual = progresoGuardado.find(
            (curso) => curso.name === "Curso de Atención al Cliente"
        );
        if (cursoActual) {
            setProgreso(cursoActual.progreso || 0);
        }
    }, []);

    const manejarProgreso = (state) => {
        const porcentaje = Math.round(state.played * 100);
        setProgreso(porcentaje);

        // Actualizar el progreso en localStorage
        const cursosInscritos = JSON.parse(localStorage.getItem("inscritos")) || [];
        const cursosActualizados = cursosInscritos.map((curso) =>
            curso.name === "Curso de Atención al Cliente"
                ? { ...curso, progreso: porcentaje }
                : curso
        );
        localStorage.setItem("inscritos", JSON.stringify(cursosActualizados));
    };

    return (
        <div className="curso-page">
            <header className="curso-header">
                <h1>Curso de Atención al Cliente</h1>
                <p>En este curso aprenderás habilidades clave para la atención al cliente.</p>
            </header>

            <button
                onClick={() => navigate("/cursos/Home")}
                className="home-btn-secondary"
            >
                Atrás
            </button>

            <section className="curso-content">
                <h2>Contenido del Curso</h2>
                <div className="curso-video">
                    <ReactPlayer
                        url="https://youtu.be/EkfiWMLBVjU"
                        controls
                        width="100%"
                        height="315px"
                        onProgress={manejarProgreso}
                    />
                </div>
            </section>

            <section className="progreso">
                <h3>Progreso del Curso: {progreso}%</h3>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progreso}%` }}
                    ></div>
                </div>
            </section>
        </div>
    );
};

export default IrCurso;
