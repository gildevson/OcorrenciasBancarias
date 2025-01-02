import React from "react";
import "./Overlay.css";

const Overlay = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        {children}
        <button className="overlay-close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Overlay;
