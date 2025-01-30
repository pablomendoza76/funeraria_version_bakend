import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Objetivos.css';

function Objetivos() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <div className="objetivos">
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
          <h2>¿Quiénes Somos?</h2>
          <div className="objetivos-content">

            <div className="rectangulo">
              <img src="../img/Mision.jpeg" alt="Misión" className="rectangulo-img" />
              <div className="rectangulo-texto">
                <h3>Nuestra Misión</h3>
                <p>
                  Somos una organización innovadora, dedicada a ofrecer servicios exequiales integrales con calidez humana para brindar tranquilidad a la familia.
                </p>
              </div>
            </div>

            <div className="rectangulo">
              <img src="/img/Vision.jpeg" alt="Visión" className="rectangulo-img" />
              <div className="rectangulo-texto">
                <h3>Nuestra Visión</h3>
                <p>
                  Ser un referente nacional en servicios exequiales a través de un desarrollo innovador sostenible.
                </p>
              </div>
            </div>
          </div>

          <h2>Valores Institucionales</h2>

          <div className="valores-content">

            <div className="valores">
              <img src="/img/honestidad.jpg" alt="Visión" className="valores-img" />
              <div className="rectangulo-texto">
                <h3>Honestidad</h3>
                <p>
                  La <strong>honestidad</strong> es el valor que guía cada acción en Funeraria Jaramillo. Ofrecemos servicios con transparencia,
                  compromiso e integridad, respetando la confianza de las familias en los momentos más sensibles.
                </p>
              </div>
            </div>

            <div className="valores">
              <img src="/img/respeto.jpg" alt="Visión" className="valores-img" />
              <div className="rectangulo-texto">
                <h3>Respeto</h3>
                <p>
                  En Funeraria Jaramillo, el <strong>respeto</strong> es nuestro pilar esencial. Valoramos profundamente las emociones y necesidades de cada familia,
                  brindando un trato digno, empático y considerado para honrar con integridad y sensibilidad a sus seres queridos.
                </p>
              </div>
            </div>

            <div className="valores">
              <img src="/img/responsabilidad.jpg" alt="Visión" className="valores-img" />
              <div className="rectangulo-texto">
                <h3>Responsabilidad</h3>
                <p>
                  La <strong>responsabilidad</strong> guía cada acción en Funeraria Jaramillo. Cumplimos nuestros compromisos con dedicación, ofreciendo servicios de calidad,
                  respaldados por un equipo comprometido en acompañar y apoyar a las familias en momentos difíciles.
                </p>
              </div>
            </div>

            <div className="valores">
              <img src="/img/lealtad.jpg" alt="Visión" className="valores-img" />
              <div className="rectangulo-texto">
                <h3>Lealtad</h3>
                <p>
                  La <strong>lealtad</strong> en Funeraria Jaramillo significa mantenernos firmes a nuestros valores y compromiso con las familias, brindando apoyo constante, confiabilidad
                  y respeto en cada detalle de nuestros servicios.
                </p>
              </div>
            </div>

            <div className="valores">
              <img src="/img/solidaridad.jpg" alt="Visión" className="valores-img" />
              <div className="rectangulo-texto">
                <h3>Solidaridad</h3>
                <p>
                  La <strong>solidaridad</strong> es un valor que define a Funeraria Jaramillo. Estamos comprometidos a acompañar a las familias en los momentos más difíciles, ofreciéndoles apoyo incondicional,
                  empatía y comprensión, trabajando juntos para aliviar su carga y brindar un servicio humano y respetuoso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Objetivos;
