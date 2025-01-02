import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png"; // Certifique-se do caminho correto para a imagem

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo Finanblue" className="header-logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <a href="#home" className="header-nav-link">
              Início
            </a>
          </li>
          <li>
            <a href="#features" className="header-nav-link">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#about" className="header-nav-link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" className="header-nav-link">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
