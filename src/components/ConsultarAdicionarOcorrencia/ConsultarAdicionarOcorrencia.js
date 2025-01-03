import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import FormConsultaOcorrencia from "../FormConsultaOcorrencia/FormConsultaOcorrencia";
import "./ConsultarAdicionarOcorrencia.css";


const ConsultarAdicionarOcorrencia = () => {
  const bancosDisponiveis = [
    "Bradesco",
    "Itau",
    "Santander",
    "Caixa",
    "Banrisul",
    "Safra",
    "Grafeno",
    "Sicoob",
    "LiveBank",
  ];

  const [bancoConsulta, setBancoConsulta] = useState(bancosDisponiveis[0]);
  const [codigoConsulta, setCodigoConsulta] = useState("");
  const [motivoConsulta, setMotivoConsulta] = useState("");
  const [resultadoConsulta, setResultadoConsulta] = useState("");

  const [bancoAdicionar, setBancoAdicionar] = useState(bancosDisponiveis[0]);
  const [codigoAdicionar, setCodigoAdicionar] = useState("");
  const [motivoAdicionar, setMotivoAdicionar] = useState("");
  const [descricaoAdicionar, setDescricaoAdicionar] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);
  const [todasOcorrencias, setTodasOcorrencias] = useState(null);
  const [mostrarTodasOcorrenciasModal, setMostrarTodasOcorrenciasModal] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [comandos, setComandos] = useState([]);
  const [mostrarComandos, setMostrarComandos] = useState(false);

  // Função para consultar ocorrência específica
  const consultarOcorrencia = async () => {
    if (!codigoConsulta || !motivoConsulta) {
      alert("Preencha os campos de Código e Motivo para consultar!");
      return;
    }

    setLoading(true);
    try {
      const chave = `${codigoConsulta}-${motivoConsulta}`;
      const response = await fetch(
        `https://ocorrencias-bancarias-backend.vercel.app/consultar-ocorrencia?banco=${bancoConsulta}&chave=${chave}`
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao consultar ocorrência");
      }

      const data = await response.json();
      setResultadoConsulta(`Chave: ${data.chave}, Descrição: ${data.descricao}`);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para exibir todas as ocorrências
  const verTodasOcorrencias = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://ocorrencias-bancarias-backend.vercel.app/todas-ocorrencias?banco=${bancoConsulta}`
      );
      if (!response.ok) {
        throw new Error("Erro ao carregar todas as ocorrências.");
      }
      const data = await response.json();
      setTodasOcorrencias(data);
      setMostrarTodasOcorrenciasModal(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fecharTodasOcorrenciasModal = () => {
    setMostrarTodasOcorrenciasModal(false);
  };

  // Função para adicionar nova ocorrência
  const adicionarOcorrencia = async () => {
    if (!codigoAdicionar || !motivoAdicionar || !descricaoAdicionar || !senha) {
      alert("Preencha todos os campos e forneça a senha para adicionar!");
      return;
    }

    setLoading(true);
    try {
      const chave = `${codigoAdicionar}-${motivoAdicionar}`;
      const response = await fetch("https://ocorrencias-bancarias-backend.vercel.app/adicionar-ocorrencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          banco: bancoAdicionar,
          chave,
          descricao: descricaoAdicionar,
          senha,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao adicionar ocorrência");
      }

      alert("Ocorrência adicionada com sucesso!");
      setCodigoAdicionar("");
      setMotivoAdicionar("");
      setDescricaoAdicionar("");
      setSenha("");
      setModalAberto(false);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para carregar comandos bancários
  const carregarComandos = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ocorrencias-bancarias-backend.vercel.app/comandos");
      if (!response.ok) {
        throw new Error("Erro ao carregar comandos bancários.");
      }
      const data = await response.json();
      setComandos(data);
      setMostrarComandos(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {loading && <Spinner />}
      <h2>Consultar Ocorrência Bancária</h2>
      <FormConsultaOcorrencia
        bancoConsulta={bancoConsulta}
        setBancoConsulta={setBancoConsulta}
        bancosDisponiveis={bancosDisponiveis}
        codigoConsulta={codigoConsulta}
        setCodigoConsulta={setCodigoConsulta}
        motivoConsulta={motivoConsulta}
        setMotivoConsulta={setMotivoConsulta}
        consultarOcorrencia={consultarOcorrencia}
      />

      <div>
        <button className="btn-primary" onClick={consultarOcorrencia}>
          Consultar Ocorrência
        </button>
        <button className="btn-primary" onClick={() => setModalAberto(true)}>
          Adicionar Nova Ocorrência
        </button>
        <button className="btn-primary" onClick={verTodasOcorrencias}>
          Ver Todas as Ocorrências
        </button>
        <button className="btn-primary" onClick={carregarComandos}>
          Exibir Comandos Bancários
        </button>
      </div>

      {resultadoConsulta && (
        <div>
          <h4>Resultado da Consulta:</h4>
          <p>{resultadoConsulta}</p>
        </div>
      )}

      {mostrarComandos && (
        <div className="overlay">
          <div className="modal-content">
            <h3>Comandos Bancários</h3>
            <table className="comandos-table">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {comandos.map((comando, index) => (
                  <tr key={index}>
                    <td>{comando.numero}</td>
                    <td>{comando.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn-secondary" onClick={() => setMostrarComandos(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {modalAberto && (
        <div className="overlay">
          <div className="modal-content">
            <h3>Adicionar Ocorrência</h3>
            <button
              className="close-button"
              onClick={() => setModalAberto(false)}
            >
              Fechar
            </button>
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
            <input
              type="text"
              placeholder="Código"
              value={codigoAdicionar}
              onChange={(e) => setCodigoAdicionar(e.target.value)}
            />
            <input
              type="text"
              placeholder="Motivo"
              value={motivoAdicionar}
              onChange={(e) => setMotivoAdicionar(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={descricaoAdicionar}
              onChange={(e) => setDescricaoAdicionar(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="btn-primary" onClick={adicionarOcorrencia}>
              Salvar
            </button>
          </div>
        </div>
      )}

{mostrarTodasOcorrenciasModal && (
  <div className="overlay">
    <div className="modal-content">
      <h3 className="ocorrencias-title">
        Ocorrências do Banco {bancoConsulta}:
      </h3>
      <button
        className="close-button"
        onClick={fecharTodasOcorrenciasModal}
      >
        Fechar
      </button>
      {todasOcorrencias ? (
        <ul className="ocorrencias-list">
          {Object.entries(todasOcorrencias).map(([chave, descricao]) => (
            <li key={chave}>
              <strong>{chave}:</strong> {descricao}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma ocorrência encontrada.</p>
      )}
    </div>
  </div>
      )}
    </div>
  );
};

export default ConsultarAdicionarOcorrencia;
