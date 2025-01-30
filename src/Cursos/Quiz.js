import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: "q1", question: "¿Qué significa brindar un servicio de calidad?", options: ["Hacer promesas sin cumplirlas", "Escuchar y satisfacer al cliente"], correct: "b" },
    { id: "q2", question: "¿Cuál es la mejor forma de manejar una queja?", options: ["Escuchar activamente y buscar soluciones", "Ignorarla"], correct: "a" },
    { id: "q3", question: "¿Qué es más importante en la atención al cliente?", options: ["Rapidez y eficiencia", "Empatía y cortesía"], correct: "b" },
    { id: "q4", question: "¿Qué hacer si no sabes la respuesta a una consulta?", options: ["Inventar una respuesta", "Admitir que no lo sabes y buscar ayuda"], correct: "b" },
    { id: "q5", question: "¿Qué caracteriza a un buen servicio postventa?", options: ["Dar seguimiento al cliente", "No volver a contactar al cliente"], correct: "a" },
    { id: "q6", question: "¿Cómo manejar a un cliente enojado?", options: ["Hablar con calma y buscar soluciones", "Responder con la misma actitud"], correct: "a" },
    { id: "q7", question: "¿Qué es un cliente interno?", options: ["Empleados de la empresa", "Clientes frecuentes"], correct: "a" },
    { id: "q8", question: "¿Qué es fundamental para la lealtad del cliente?", options: ["Ofrecer descuentos", "Generar confianza"], correct: "b" },
    { id: "q9", question: "¿Qué hacer ante un error en el servicio?", options: ["Negarlo", "Reconocerlo y corregirlo"], correct: "b" },
    { id: "q10", question: "¿Cuál es el objetivo principal de la atención al cliente?", options: ["Incrementar ventas", "Satisfacer las necesidades del cliente"], correct: "b" },
  ];

  const handleAnswerChange = (e, id) => {
    const { value } = e.target;
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) newScore++;
    });

    setScore(newScore);
    setSubmitted(true);

    localStorage.setItem("quizScore", newScore);
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <button
          className="home-btn-secondary"
          onClick={() => handleNavigation("/Cursos/Home")}
        >
          ← Atrás
        </button>
        <h1>Quiz de Atención al Cliente</h1>
        <p>Responde las preguntas y mide tus conocimientos.</p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="quiz-form">
          {questions.map((q) => (
            <div key={q.id} className="quiz-question">
              <h3>{q.question}</h3>
              {q.options.map((option, index) => (
                <label key={index} className="quiz-option">
                  <input
                    type="radio"
                    name={q.id}
                    value={index === 0 ? "a" : "b"}
                    checked={answers[q.id] === (index === 0 ? "a" : "b")}
                    onChange={(e) => handleAnswerChange(e, q.id)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit" className="quiz-submit-btn">
            Enviar Respuestas
          </button>
        </form>
      ) : (
        <div className="quiz-result">
          <h2>Tu calificación: {score} / {questions.length}</h2>
          <p>{score >= 7 ? "¡Excelente trabajo! 👏" : "Sigue practicando. 💪"}</p>
          <button
            className="home-btn-secondary"
            onClick={() => handleNavigation("/Cursos/Home")}
          >
            Volver a Cursos
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
