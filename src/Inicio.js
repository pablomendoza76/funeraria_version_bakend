import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      name: 'Somos Funeraria Jaramillo',
      key: 'somos',
      items: [
        { name: 'Historia de la empresa', link: '/SomosFunerariaJaramillo/Historia' },
        { name: 'Objetivos y Valores institucionales', link: '/SomosFunerariaJaramillo/Objetivos' },
        { name: 'Departamentos (misión)', link: '/SomosFunerariaJaramillo/DepartamentosMision' },
        { name: 'Organigrama', link: '/SomosFunerariaJaramillo/Organigrama' },
        { name: 'Productos y Servicios', link: '/SomosFunerariaJaramillo/Productos' },
      ],
    },
    {
      name: 'Formación y Capacitación',
      key: 'formacion',
      items: [
        { name: 'Ofertas', link: '/cursos/Ofertas' },
        { name: 'Políticas', link: '#' },
        { name: 'Éxitos profesionales', link: '#' },
      ],
    },
    {
      name: 'Eventos',
      key: 'eventos',
      items: [
        { name: 'Eventos', link: '#' },
        { name: 'Eventos anuales (fijos)', link: '#' },
      ],
    },
    {
      name: 'Manuales',
      key: 'manuales',
      items: [
        { name: 'Vinculación Laboral', link: '/Manuales/Vinculacion' },
        { name: 'Imagen corporativa', link: '/Manuales/ImagenCorporativa' },
        { name: 'Solicitud vacaciones y permisos', link: '/Manuales/Permisos' },
        { name: 'Justificación de atrasos', link: '#' },
        { name: 'Solicitud de certificados', link: '#' },
        { name: 'Sueldo y pagos', link: '/Manuales/Pagos' },
        { name: 'Evaluación de desempeño', link: '#' },
        { name: 'Salida Laboral', link: '#' },
      ],
    },
    {
      name: 'Bienestar',
      key: 'bienestar',
      items: [
        { name: 'Salud Física', link: '#' },
        { name: 'Salud Mental', link: '#' },
      ],
    },
    {
      name: 'Cultura organizacional',
      key: 'cultura',
      items: [
        { name: 'Beneficios para colaboradores', link: '/CulturaOrganizacional/Beneficios' },
        { name: 'Reconocimientos y premiaciones', link: '#' },
        { name: 'Nuevos Talentos', link: '#' },
        { name: 'Maternidad y Paternidad', link: '#' },
        { name: 'Cumpleaños', link: '#' },
      ],
    },
    {
      name: 'Blog',
      key: 'blog',
      items: [{ name: 'Artículos de interés', link: '#' }],
    },
  ];

  return (
    <div className="inicio">
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="./img/logo.jpg" alt="Funeraria Jaramillo Logo" />
          </div>

          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? 'X' : '☰'}
          </button>

          <div className={`menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={activeMenu === item.key ? 'active' : ''}
                  onMouseEnter={() => setActiveMenu(item.key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className="dropdown-btn"
                    onClick={() => toggleMenu(item.key)}
                    aria-expanded={activeMenu === item.key}
                  >
                    {item.name}
                  </button>
                  {activeMenu === item.key && (
                    <ul className="dropdown-menu">
                      {item.items.map((subItem, index) => (
                        <li key={index}>
                          <Link to={subItem.link}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <div className="contenido-principal">
          <img
            src="./img/imgHome.jpg"
            alt="Funeraria Jaramillo"
            className="imagen-inicio"
          />
        </div>
      </main>
    </div>
  );
}

export default Inicio;