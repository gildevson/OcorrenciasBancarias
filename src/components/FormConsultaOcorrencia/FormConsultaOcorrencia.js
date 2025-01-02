import React from "react";
import "./FormConsultaOcorrencia.css";

const FormConsultaOcorrencia = ({
  bancoConsulta,
  setBancoConsulta,
  bancosDisponiveis,
  codigoConsulta,
  setCodigoConsulta,
  motivoConsulta,
  setMotivoConsulta,
  consultarOcorrencia,
}) => {
  return (
    <div className="form-section">
      <div className="form-group">
        <label htmlFor="banco">Banco:</label>
        <select
          id="banco"
          value={bancoConsulta}
          onChange={(e) => setBancoConsulta(e.target.value)}
        >
          {bancosDisponiveis.map((banco) => (
            <option key={banco} value={banco}>
              {banco}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="codigo">Código:</label>
        <input
          id="codigo"
          type="text"
          placeholder="Ex: 02"
          value={codigoConsulta}
          onChange={(e) => setCodigoConsulta(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="motivo">Motivo:</label>
        <input
          id="motivo"
          type="text"
          placeholder="Ex: 00"
          value={motivoConsulta}
          onChange={(e) => setMotivoConsulta(e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default FormConsultaOcorrencia;
