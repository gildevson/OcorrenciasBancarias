import React, { useState } from "react";
import "./TabelaComandos.css"; // Estilos para o modal

const TabelaComandos = () => {
  const [comandos, setComandos] = useState([]); // Estado para armazenar os comandos
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(false); // Controle do spinner

  const carregarComandos = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/comandos"); // Rota do backend
      if (!response.ok) {
        throw new Error("Erro ao carregar os comandos bancários.");
      }
      const data = await response.json();
      setComandos(data); // Define os comandos no estado
    } catch (error) {
      console.error("Erro ao carregar comandos:", error.message);
      alert("Erro ao carregar comandos bancários.");
    } finally {
      setLoading(false); // Oculta o spinner
    }
  };

  const abrirModal = () => {
    carregarComandos(); // Carrega os comandos ao abrir o modal
    setMostrarModal(true);
  };

  const fecharModal = () => setMostrarModal(false);

  return (
    <div className="tabela-comandos-container">
      <button className="btn-primary" onClick={abrirModal}>
        Exibir Comandos Bancários
      </button>

      {mostrarModal && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>Comandos Bancários</h3>
            {loading ? (
              <div className="spinner"></div> // Spinner enquanto carrega
            ) : (
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
            )}
            <button className="btn-secondary" onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelaComandos;
