import React, { useState } from "react";
import "./ResultadoConsulta.css";

const ResultadoConsulta = ({ resultadoConsulta }) => {
  const [loading, setLoading] = useState(false);

  const handleFakeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula um carregamento de 2 segundos
  };

  return (
    <div className="resultado-container">
      {loading ? (
        <div className="loading-notification">
          <div className="spinner"></div>
          <p>Carregando resultado...</p>
        </div>
      ) : (
        <div className="resultado">
          <h3>Resultado:</h3>
          <p>{resultadoConsulta}</p>
          <button className="btn-primary" onClick={handleFakeLoading}>
            Simular Novo Carregamento
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultadoConsulta;
