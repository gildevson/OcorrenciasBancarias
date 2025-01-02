import React, { useState } from "react";
import "./ModalAdicionarOcorrencia.css";

const ModalAdicionarOcorrencia = ({
  bancoAdicionar,
  setBancoAdicionar,
  bancosDisponiveis,
  codigoAdicionar,
  setCodigoAdicionar,
  motivoAdicionar,
  setMotivoAdicionar,
  descricaoAdicionar,
  setDescricaoAdicionar,
  adicionarOcorrencia,
  fecharModal,
}) => {
  const [senha, setSenha] = useState(""); // Estado para a senha

  const handleAdicionarOcorrencia = () => {
    if (!codigoAdicionar || !motivoAdicionar || !descricaoAdicionar || !senha) {
      alert("Preencha todos os campos antes de adicionar!");
      return;
    }
    adicionarOcorrencia(senha); // Envia a senha para o backend
    limparCampos(); // Limpa os campos do modal
  };

  const limparCampos = () => {
    setCodigoAdicionar("");
    setMotivoAdicionar("");
    setDescricaoAdicionar("");
    setSenha("");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Adicionar Nova Ocorrência</h2>
        <div className="form-group">
          <label>Banco:</label>
          <select
            value={bancoAdicionar}
            onChange={(e) => setBancoAdicionar(e.target.value)}
          >
            {bancosDisponiveis.map((banco) => (
              <option key={banco} value={banco}>
                {banco}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Ocorrência:</label>
          <input
            type="text"
            value={codigoAdicionar}
            onChange={(e) => setCodigoAdicionar(e.target.value)}
            placeholder="Ex: 02"
          />
        </div>
        <div className="form-group">
          <label>Motivo:</label>
          <input
            type="text"
            value={motivoAdicionar}
            onChange={(e) => setMotivoAdicionar(e.target.value)}
            placeholder="Ex: 00"
          />
        </div>
        <div className="form-group">
          <label>Descrição:</label>
          <input
            type="text"
            value={descricaoAdicionar}
            onChange={(e) => setDescricaoAdicionar(e.target.value)}
            placeholder="Descrição da ocorrência"
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
          />
        </div>
        <div className="button-group">
          <button className="btn-primary" onClick={handleAdicionarOcorrencia}>
            Adicionar
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              limparCampos();
              fecharModal();
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarOcorrencia;
