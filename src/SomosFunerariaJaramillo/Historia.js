import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Historia.css';

function Historia() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <div className="historia">
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
          <h2>Historia de la Funeraria Jaramillo</h2>
          <div className="historical-event">
            <img src="../img/creacion.jpg" alt="Fundación de la empresa 1969" />
            <div className="event-content">
              <h3>1969</h3>
              <p>
                En 1969, la Funeraria Jaramillo fue fundada por <strong>Don Manuel Jaramillo</strong> y su hijo <strong>Gilberto Jaramillo,</strong> quienes comenzaron a ofrecer un
                servicio pionero en la región: exequias a domicilio y fabricación de cofres mortuorios personalizados. Este esfuerzo sentó las bases de una
                empresa familiar que, con el tiempo, ganaría el respeto y confianza de la comunidad.
              </p>
            </div>
          </div>

          <div className="historical-event">
            <img src="../img/legado.jpg" alt="Legado 2000" />
            <div className="event-content">
              <h3>2000</h3>
              <p>
                En el año 2000, la <strong>Tercera generación de la familia,</strong> hijos de Gilberto Jaramillo y Mercedes Mosquera,
                asumió la dirección de la Funeraria Jaramillo. Su enfoque en la calidez humana, la empatía y la calidad en el servicio permitió fortalecer
                su reputación y consolidar la empresa como un pilar de confianza.
              </p>
            </div>
          </div>

          <div className="historical-event">
            <img src="../img/velaciones.jpg" alt="Velación 2001" />
            <div className="event-content">
              <h3>2001</h3>
              <p>
                En el año 2001, impulsados por un profundo compromiso de empatía, respeto y servicio humano, se inauguró el primer<strong> Centro de Velaciones </strong>
                en el corazón de Loja, ofreciendo un espacio cálido, digno y acogedor, donde las familias pueden despedir a sus seres queridos con solemnidad.
              </p>
            </div>
          </div>

          <div className="historical-event">
            <img src="../img/prevision.jpg" alt="Previsión 2005" />
            <div className="event-content">
              <h3>2005</h3>
              <p>
                En el año 2005, Atendiendo las necesidades de sus clientes, la empresa se posiciona como pionera al ofrecer planes de previsión a futuro mediante
                <strong> Previsión Exequial La Esperanza,</strong> un servicio diseñado para brindar tranquilidad, respaldo y soluciones anticipadas a las familias en momentos difíciles y de gran sensibilidad.
              </p>
            </div>
          </div>

          <div className="historical-event">
            <img src="../img/inaguracion.jpg" alt="Inauguración 2015" />
            <div className="event-content">
              <h3>2015</h3>
              <p>
                En el año 2015, Con el propósito de satisfacer las exigencias actuales y ofrecer un espacio que combine serenidad, respeto y armonía, inauguramos nuestro<strong> Camposanto Jardines del Zamora. </strong>
                Este lugar ha sido diseñado cuidadosamente para proporcionar un entorno digno y acogedor. </p>
            </div>
          </div>

          <div className="historical-event">
            <img src="../img/unad.jpg" alt="Unad" />
            <div className="event-content">
              <h3>2019</h3>
              <p>
                Con el objetivo de brindar apoyo a las personas en su proceso de duelo, en el año 2019 se creó el servicio <strong>Unidad de Atención al Duelo,</strong> como parte del compromiso social de la empresa, ofreciendo
                un acompañamiento cercano y profesional en momentos de gran vulnerabilidad. </p>
            </div>
          </div>

          <div className="historical-event">
            <img src="../img/mascotas.jpg" alt="Mascotas 2022" />
            <div className="event-content">
              <h3>2022</h3>
              <p>
                En 2022, Funeraria Jaramillo dio un paso importante en el cuidado de las mascotas al inaugurar el servicio <strong>"Puente Arcoíris". </strong>
                Este espacio ofrece un trato respetuoso y digno para las mascotas que han partido, permitiendo a las familias despedirse de sus fieles compañeros con cariño y honor.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Historia;
