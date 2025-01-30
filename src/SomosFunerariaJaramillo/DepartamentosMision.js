import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DepartamentosMision.css';

function DepartamentosMision() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setActiveMenu(null);
    };

    return (
        <div className="departamentos-mision">
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
                    <h2>Departamentos y Misión</h2>
                    <div className="departamentos-content">
                        <div className="departamento">
                            <img src="../img/directorioEjecutivo.jpg" alt="Directorio Ejecutivo" />
                            <h4>Directorio Ejecutivo</h4>
                            <p className="mision">"Un legado que trasciende generaciones"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/recaudacion.jpg" alt="Recaudacion" />
                            <h4>Recaudación</h4>
                            <p className="mision">"Compromiso y precisión, en cada momento"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/unidadAtencionDuelo.jpg" alt="Unidad de Atencion al Duelo" />
                            <h4>Unidad de Atención al Duelo</h4>
                            <p className="mision">"Transformamos el dolor en amor"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/talentoHumano.jpg" alt="Talento Humano" />
                            <h4>Talento Humano</h4>
                            <p className="mision">"Cuidamos a quienes hacen posible nuestro servicio"</p>
                        </div>
                        <div className="departamento">
                            <img src="../img/sistemasProcesos.jpg" alt="Sistemas y Procesos" />
                            <h4>Sistemas y Procesos</h4>
                            <p className="mision">"Tecnología al servicio de la eficiencia y tranquilidad"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/contabilidad.jpg" alt="Contabilidad y Finanzas" />
                            <h4>Contabilidad y Finanzas</h4>
                            <p className="mision">"La confianza se construye con números sólidos y decisiones responsables"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/marketing.jpg" alt="Marketing y Comunicacion" />
                            <h4>Marketing y Comunicación</h4>
                            <p className="mision">"Comunicamos con corazón, conectamos con empatía"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/servicioClienteCamposanto.jpg" alt="Servicio al CLiente Camposanto" />
                            <h4>Servicio al Cliente Camposanto</h4>
                            <p className="mision">"Empatía y paz en cada momento"</p>
                        </div>

                        <div className="departamento">
                            <img src="../img/asesoresComerciales.jpg" alt="Asesores Comerciales" />
                            <h4>Asesores Comerciales</h4>
                            <p className="mision">"Escuchamos, entendemos y brindamos soluciones con calidad y calidez"</p>
                        </div>
                        <div className="departamento">
                            <img src="../img/servicioCliente.jpg" alt="Servicio al Cliente" />
                            <h4>Servicio al Cliente</h4>
                            <p className="mision">"Comprometidos en ofrecerle un servicio de calidad"</p>
                        </div>
                        <div className="departamento">
                            <img src="../img/tanatopraxia.jpg" alt="Tanatopraxia" />
                            <h4>Tanatopraxia</h4>
                            <p className="mision">"Con calidez y profesionalismo, en cada paso del duelo"</p>
                        </div>
                        <div className="departamento">
                            <img src="../img/ventas.jpg" alt="Ventas" />
                            <h4>Ventas</h4>
                            <p className="mision">"Brindamos apoyo, productos y servicios funerarios personalizados con empatía."</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DepartamentosMision;
