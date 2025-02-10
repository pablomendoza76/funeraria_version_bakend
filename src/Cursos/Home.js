import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const [inscritos, setInscritos] = useState(() => {
        const saved = localStorage.getItem("inscritos");
        return saved ? JSON.parse(saved) : [];
    });
    const [quizScore, setQuizScore] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const isAuthenticated = localStorage.getItem("isAuthenticated");

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setActiveMenu(null);
    };

    useEffect(() => {
        const saved = localStorage.getItem("inscritos");
        setInscritos(saved ? JSON.parse(saved) : []);
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

    const handleLogout = () => {
        // Elimina la autenticación del localStorage
        localStorage.removeItem("isAuthenticated");

        // Redirige al usuario a la página de Ofertas
        navigate("/Cursos/Ofertas");

        // Opcional: Si tienes un estado global o contexto, aquí podrías actualizarlo.
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    // Verificar si el usuario está autenticado al cargar la página
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/Ofertas"); // Si no está autenticado, redirige al login
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="home-page">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src="../img/logo.jpg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="menu">
                        <ul>
                            <li
                                onMouseEnter={() => toggleMenu('somos')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'somos' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Somos Funeraria Jaramillo</button>
                                {activeMenu === 'somos' && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/SomosFunerariaJaramillo/Historia">Historia de la empresa</Link></li>
                                        <li><Link to="/SomosFunerariaJaramillo/Objetivos">Objetivos y Valores institucionales</Link></li>
                                        <li><Link to="/SomosFunerariaJaramillo/DepartamentosMision">Departamentos (misión)</Link></li>
                                        <li><Link to="/SomosFunerariaJaramillo/Organigrama">Organigrama</Link></li>
                                        <li><Link to="/SomosFunerariaJaramillo/Productos">Productos y Servicios</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('formacion')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'formacion' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Formación y Capacitación</button>
                                {activeMenu === 'formacion' && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/Cursos/Ofertas">Ofertas</Link></li>
                                        <li>Políticas</li>
                                        <li>Éxitos profesionales</li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('eventos')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'eventos' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Eventos</button>
                                {activeMenu === 'eventos' && (
                                    <ul className="dropdown-menu">
                                        <li>Eventos</li>
                                        <li>Eventos anuales (fijos)</li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('manuales')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'manuales' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Manuales</button>
                                {activeMenu === 'manuales' && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/Manuales/Vinculacion">Vinculación Laboral</Link></li>
                                        <li><Link to="/Manuales/ImagenCorporativa">Imagen corporativa</Link></li>
                                        <li><Link to="/Manuales/Permisos">Solicitud vacaciones y permisos</Link></li>
                                        <li>Justificación de atrasos</li>
                                        <li>Solicitud de certificados</li>
                                        <li><Link to="/Manuales/Pagos">Sueldo y pagos</Link></li>
                                        <li>Evaluación de desempeño</li>
                                        <li>Salida Laboral</li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('bienestar')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'bienestar' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Bienestar</button>
                                {activeMenu === 'bienestar' && (
                                    <ul className="dropdown-menu">
                                        <li>Salud Física</li>
                                        <li>Salud Mental</li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('cultura')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'cultura' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Cultura organizacional</button>
                                {activeMenu === 'cultura' && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/CulturaOrganizacional/Beneficios">Beneficios para colaboradores</Link></li>
                                        <li>Reconocimientos y premiaciones</li>
                                        <li>Nuevos Talentos</li>
                                        <li>Maternidad y Paternidad</li>
                                        <li>Cumpleaños</li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('blog')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'blog' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">Blog</button>
                                {activeMenu === 'blog' && (
                                    <ul className="dropdown-menu">
                                        <li>Artículos de interés</li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Agregar el botón de logout a la barra de navegación */}
                    {isAuthenticated && (
                        <div className="logout-btn">
                            <button className="home-btn-secondary" onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </nav>
            </header>

            {/* El contenido de la página */}
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
                                {/* Barra de progreso del curso */}
                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${curso.progress}%` }}
                                    ></div>
                                </div>
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
