import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./IrCurso.css";
import instructorFoto from '../img/user_icon.png';


const IrCurso = () => {
    const [progreso, setProgreso] = useState(0); // Estado para el progreso del curso
    const [nota, setNota] = useState(0); // Estado para la nota
    const [usuario, setUsuario] = useState(null); // Información del usuario logueado
    const [instructor, setInstructor] = useState(null); // Información del instructor
    const [videos, setVideos] = useState([ // Definir los videos del curso
        { url: "https://youtu.be/EkfiWMLBVjU", completado: false },
        { url: "https://www.youtube.com/watch?v=5Lkg0ghUZmY", completado: false },
        { url: "https://www.youtube.com/watch?v=esSJzN4S5e4", completado: false },
    ]);
    const [videoActual, setVideoActual] = useState(0); // Índice del video actual
    const navigate = useNavigate();

    // Simulamos datos de un usuario logueado y un instructor
    useEffect(() => {
        const usuarioLogueado = {
            nombre: "Juan Pérez",
            correo: "juan.perez@example.com",
            rol: "Estudiante",
        };
        setUsuario(usuarioLogueado);

        const encargadoCurso = {
            nombre: "Ana García",
            correo: "ana.garcia@example.com",
            rol: "Instructor",
            foto: "https://www.example.com/foto-instructor.jpg",
        };
        setInstructor(encargadoCurso);
    }, []);

    useEffect(() => {
        // Recuperar el progreso inicial desde localStorage
        const progresoGuardado = JSON.parse(localStorage.getItem("inscritos")) || [];
        const cursoActual = progresoGuardado.find(
            (curso) => curso.name === "Curso de Atención al Cliente"
        );
        if (cursoActual) {
            setProgreso(cursoActual.progreso || 0);
            setVideos(cursoActual.videos || videos); // Recuperar los videos completados
            setVideoActual(cursoActual.videoActual || 0); // Recuperar el video actual
        }
    }, []);

    const manejarProgreso = (state) => {
        const porcentaje = Math.round(state.played * 100);

        // Marcar el video como completado si se llega al 100%
        const nuevosVideos = [...videos];
        if (porcentaje === 100) {
            nuevosVideos[videoActual] = { ...nuevosVideos[videoActual], completado: true };
        }
        setVideos(nuevosVideos);

        // Calcular el progreso total en función de los videos completados
        const videosCompletados = nuevosVideos.filter(video => video.completado).length;
        const nuevoProgreso = Math.round((videosCompletados / videos.length) * 100);
        setProgreso(nuevoProgreso);

        // Calcular la nota correspondiente (100% es 10)
        const nuevaNota = (nuevoProgreso / 10).toFixed(1);
        setNota(nuevaNota);

        // Actualizar el progreso en localStorage
        const cursosInscritos = JSON.parse(localStorage.getItem("inscritos")) || [];
        const cursosActualizados = cursosInscritos.map((curso) =>
            curso.name === "Curso de Atención al Cliente"
                ? { ...curso, progreso: nuevoProgreso, videos: nuevosVideos, videoActual: videoActual }
                : curso
        );
        localStorage.setItem("inscritos", JSON.stringify(cursosActualizados));
    };

    const siguienteVideo = () => {
        // Solo avanzar al siguiente video si el actual está completado
        if (videos[videoActual].completado && videoActual < videos.length - 1) {
            setVideoActual(videoActual + 1);
        }
    };

    return (
        <div className="curso-page">
            <header className="curso-header">
                <h1>Curso de Atención al Cliente</h1>
                <p>En este curso aprenderás habilidades clave para la atención al cliente.</p>
            </header>

            <button
                onClick={() => navigate("/cursos/Home")}
                className="home-btn-secondary"
            >
                Atrás
            </button>

            <section className="curso-content">
                <h2>Contenido del Curso</h2>
                <div className="curso-video">
                    {/* Mostrar solo el video actual */}
                    <ReactPlayer
                        url={videos[videoActual].url}
                        controls
                        width="100%"
                        height="315px"
                        onProgress={manejarProgreso}
                    />
                    {videos[videoActual].completado && <p>¡Video completado!</p>}
                </div>
                {/* Mostrar botón de siguiente solo si el video actual está completado */}
                {videos[videoActual].completado && videoActual < videos.length - 1 && (
                    <button onClick={siguienteVideo}>Siguiente Video</button>
                )}
            </section>

            <section className="progreso">
                <h3>Progreso del Curso: {progreso}%</h3>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progreso}%` }}
                    ></div>
                </div>
                <p>Nota del Progreso: {nota} / 10</p>
            </section>

            {/* Información del Instructor */}
            {instructor && (
                <section className="instructor-info">
                    <h3>Información del Instructor</h3>
                    <div className="instructor-profile">
                        <img
                            src={instructorFoto}
                            alt={instructor.nombre}
                            className="instructor-foto"
                        />
                        <div>
                            <h4>{instructor.nombre}</h4>
                            <p>{instructor.rol}</p>
                            <p>{instructor.correo}</p>
                        </div>
                    </div>
                     {/* Información del Usuario Logueado */}
            {usuario && (
                <section className="usuario-info">
                    <h3>Información del Usuario</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre:</td>
                                <td>{usuario.nombre}</td>
                            </tr>
                            <tr>
                                <td>Correo:</td>
                                <td>{usuario.correo}</td>
                            </tr>
                            <tr>
                                <td>Rol:</td>
                                <td>{usuario.rol}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            )}
                </section>
            )}
        </div>
    );
};

export default IrCurso;
