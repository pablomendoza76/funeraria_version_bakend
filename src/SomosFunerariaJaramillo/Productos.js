import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

function Productos() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setActiveMenu(null);
    };

    return (
        <div className="productos">
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
                                <button className="dropdown-btn">
                                    Somos Funeraria Jaramillo
                                </button>
                                {activeMenu === 'somos' && (
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/SomosFunerariaJaramillo/Historia">
                                                Historia de la empresa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/SomosFunerariaJaramillo/Objetivos">
                                                Objetivos y Valores institucionales
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/SomosFunerariaJaramillo/DepartamentosMision">
                                                Departamentos (misión)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/SomosFunerariaJaramillo/Organigrama">
                                                Organigrama
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/SomosFunerariaJaramillo/Productos">
                                                Productos y Servicios
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => toggleMenu('formacion')}
                                onMouseLeave={closeMenu}
                                className={activeMenu === 'formacion' ? 'active' : ''}
                            >
                                <button className="dropdown-btn">
                                    Formación y Capacitación
                                </button>
                                {activeMenu === 'formacion' && (
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/Cursos/Ofertas">
                                                Ofertas
                                            </Link>
                                        </li>
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
                                        <li>
                                            <Link to="/Manuales/Vinculacion">
                                                Vinculación Laboral
                                            </Link>
                                        </li>
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
                <div className="contenido-principal">
                    <h2>Productos y Servicios Funerarios</h2>

                    <div className="Presentacion">
                        <h4>Nuestra empresa se basa en ofrecer servicios exequiales de calidad, brindando apoyo y acompañamiento a las familias en momentos difíciles con respeto y profesionalismo.</h4>
                    </div>

                    <div className="tarjeta">
                        <img src="../img/personas.png" alt="Planes a Futuro para Personas" />
                        <p>En nuestra funeraria ofrecemos planes diseñados para el futuro de las personas, brindando tranquilidad a sus seres queridos con un servicio respetuoso, cálido y dedicado, asegurando atención personalizada en momentos difíciles.</p>
                    </div>

                    <div className="tarjeta">
                        <img src="../img/planesMascotas.png" alt="Planes a Futuro para Mascotas" />
                        <p>En nuestra funeraria también ofrecemos planes para el cuidado y descanso de tus mascotas, brindando tranquilidad a las familias con un servicio respetuoso y personalizado, garantizando una atención especial en momentos de despedida.</p>
                    </div>

                    <div className="tarjeta">
                        <img src="../img/articulos.png" alt="Artículos Funerarios" />
                        <p>La empresa dispone de una amplia variedad de artículos funerarios esenciales para cada servicio, con productos de alta calidad que cumplen con los estándares de respeto y dignidad.</p>
                    </div>

                    <div className="tarjeta">
                        <img src="../img/flores.png" alt="Flores y Arreglos Florales" />
                        <p>La empresa ofrece una amplia gama de flores y arreglos florales, pensados para rendir homenaje a los seres queridos, con opciones elegantes y adecuadas a cada ocasión.</p>
                    </div>

                </div>
            </main>

        </div>
    );
}

export default Productos;
