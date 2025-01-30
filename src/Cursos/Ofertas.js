import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ofertas.css';

const Ofertas = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Validación de usuario y contraseña
    if (email === 'ivan@fuja.com' && password === '123') {
      setError('');
      navigate("/Cursos/Home"); // Redirige a la página deseada
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="login-container">
      {/* Sección izquierda */}
      <div className="login-left">
        <img
          src="../img/funeraria.jpg"
          alt="Imagen de inicio de sesión"
          className="login-image"
        />
      </div>
      {/* Sección derecha */}
      <div className="login-right">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-login">Ingresar</button>
        </form>
        <p className="back-to-home">
          <button onClick={() => navigate('/')} className="back-link">
            Regresar a Inicio
          </button>
        </p>
      </div>
    </div>
  );
};

export default Ofertas;
