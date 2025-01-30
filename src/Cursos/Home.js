import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const [inscritos, setInscritos] = useState(() => {
        const saved = localStorage.getItem("inscritos");
        return saved ? JSON.parse(saved) : [];
    });
    const [quizScore, setQuizScore] = useState(null);

    useEffect(() => {
        // Recuperar la lista de cursos inscritos desde localStorage
        const saved = localStorage.getItem("inscritos");
        setInscritos(saved ? JSON.parse(saved) : []);

        // Cargar la calificación del Quiz desde localStorage
        const storedScore = localStorage.getItem("quizScore");
        if (storedScore) {
            setQuizScore(storedScore);
        }
    }, []);

    const handleDesinscribir = (id) => {
        const nuevosCursos = inscritos.filter((curso) => curso.id !== id);
        setInscritos(nuevosCursos);
        localStorage.setItem("inscritos", JSON.stringify(nuevosCursos));
        alert("Te has desinscrito del curso.");
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page">
            <div className="home-nav">
                <button
                    className="home-btn-secondary"
                    onClick={() => handleNavigation("/Cursos/Ofertas")}
                >
                    ← Volver a Login
                </button>
            </div>

            <header className="home-header">
                <h1>¡Impulsa tu aprendizaje!</h1>
                <p>Descubre nuevos cursos, sigue tu progreso y completa tus evaluaciones.</p>
                <button
                    className="home-btn-primary"
                    onClick={() => handleNavigation("/Cursos/Explorar")}
                >
                    Explorar Cursos
                </button>
            </header>

            <section className="home-section">
                <h2>Cursos en Progreso</h2>
                <div className="home-courses-progress">
                    {inscritos.length > 0 ? (
                        inscritos.map((curso) => (
                            <div key={curso.id} className="home-progress-card">
                                <img src={curso.image} alt={curso.name} className="course-image" />
                                <h3>{curso.name}</h3>
                                <button
                                    className="home-btn-primary"
                                    onClick={() => handleNavigation("/Cursos/IrCurso")}
                                >
                                    Ir al Curso
                                </button>
                                <button
                                    className="home-btn-danger"
                                    onClick={() => handleDesinscribir(curso.id)}
                                >
                                    Salir del Curso
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No tienes cursos en progreso. ¡Explora nuevos cursos!</p>
                    )}
                </div>
            </section>

            <section className="home-section">
                <h2>Evaluaciones</h2>
                <ul className="home-evaluations-list">
                    <li className="evaluation-item pendiente">
                        <div>
                            <h3>Quiz de Atención al Cliente</h3>
                            <p>¡Pon a prueba tus conocimientos!</p>
                        </div>
                        <button
                            className="home-btn-secondary"
                            onClick={() => handleNavigation("/Cursos/Quiz")}
                        >
                            Ir al Quiz
                        </button>
                    </li>
                </ul>
            </section>

            {quizScore !== null && (
                <section className="home-section">
                    <div className="quiz-score-display">
                        <h2>Tu última calificación en el Quiz: {quizScore} / 10</h2>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Home;
