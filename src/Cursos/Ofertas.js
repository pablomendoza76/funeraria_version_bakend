import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ofertas.css';

const Ofertas = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Enviar las credenciales al servidor para validarlas
    try {
      const response = await fetch('http://localhost:8000/pablo/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Para manejar las cookies de sesión
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa, almacenar la autenticación
        localStorage.setItem('isAuthenticated', 'true'); // Guardamos el estado de autenticación
        setError('');
        navigate('/Cursos/Home'); // Redirigir a la página de inicio
      } else {
        setError(data.message); // Mostrar mensaje de error del servidor
      }

    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error('Error:', err);
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
