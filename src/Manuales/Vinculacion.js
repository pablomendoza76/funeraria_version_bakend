import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Vinculacion.css';

function Vinculacion() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setActiveMenu(null);
    };

    return (
        <div className="vinculacion-page">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src="../img/logo.jpg" alt="Funeraria Jaramillo Logo" />
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
                                        <li>Vinculación Laboral</li>
                                        <li>
                                            <Link to="/Manuales/ImagenCorporativa">
                                                Imagen corporativa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Manuales/Permisos">
                                                Solicitud vacaciones y permisos
                                            </Link>
                                        </li>
                                        <li>Justificación de atrasos</li>
                                        <li>Solicitud de certificados</li>
                                        <li>
                                            <Link to="/Manuales/Pagos">
                                                Sueldo y pagos
                                            </Link>
                                        </li>
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
                                        <li>
                                            <Link to="/CulturaOrganizacional/Beneficios">
                                                Beneficios para colaboradores
                                            </Link>
                                        </li>
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
                </nav>
            </header>

            <main>
                {/* Contenedor principal */}
                <div className="content-container">
                    <h2>Reglamentos de Trabajo</h2>
                    <div className="cards-row">
                        <div className="card">
                            <img src="../img/reglamento.jpg" alt="PDF Preview 1" />
                            <div className="card-content">
                                <h3>Reglamento Interno de Trabajo Funeraria Jaramillo</h3>
                                <a href="/pdfs/ReglamentoInternoFunerariaJaramillo.pdf" target="_blank" rel="noopener noreferrer">Visualizar y Descargar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="../img/reglamento1.jpg" alt="PDF Preview 2" />
                            <div className="card-content">
                                <h3>Reglamento Interno de Trabajo Previsión Exequial la Esperanza</h3>
                                <a href="/pdfs/ReglamentoInternoTrabajoEsperanza.pdf" target="_blank" rel="noopener noreferrer">Visualizar y Descargar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Vinculacion;
