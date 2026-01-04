import React from "react";
import "./PortalOverlay.css";

export default function PortalOverlay({
  open,
  onClose,
  newSiteUrl,
  imageSrc = "/img/Animacao.gif",
  size = "lg", // Padrão Grande
}) {
  if (!open) return null;

  // Fecha apenas se clicar no fundo (overlay)
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("po-overlay")) {
      onClose();
    }
  };

  return (
    <div className="po-overlay" onClick={handleBackdropClick} role="dialog">
      <div className={`po-card po-size-${size}`}>
        <button className="po-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="po-media">
          <img className="po-gif" src={imageSrc} alt="Novo Portal" />
        </div>

        <div className="po-content">
          <h2 className="po-title">Portal Reformado</h2>
          <p className="po-text">
            Este portal foi reformulado e migrado para uma nova plataforma, utilizando tecnologias mais modernas.

Se você utilizava este portal para suporte da Finanblue, agora poderá alimentar a plataforma diretamente, cadastrando novas ocorrências e adicionando observações de forma simples e rápida.

Em caso de dúvidas, ficamos à disposição para ajudar
          </p>

          <div className="po-actions">
            <a 
              className="po-btn po-primary" 
              href={newSiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Acessar nova plataforma
            </a>
            <button className="po-btn po-ghost" onClick={onClose}>
              Continuar aqui
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}