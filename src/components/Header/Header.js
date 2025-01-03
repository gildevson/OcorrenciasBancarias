import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const closeOverlay = () => {
    setActiveSection("");
  };

  const getContentForSection = (section) => {
    switch (section) {
      case "Início":
        return (
          <div>
            <h2>Comandos Bancários</h2>
            <table className="command-table">
              <thead>
                <tr>
                  <th>NÚMERO</th>
                  <th>DESCRIÇÃO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02</td>
                  <td>Solicitar Baixa</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Conceder Abatimento</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Cancelar Abatimento</td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>Prorrogar Documento</td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Protestar Documento</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Sustar Protesto</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Alterar Carteira</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Cancelar Protesto</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Sustar Protesto/Baixar</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Funcionalidades":
        return (
          <div>
            <h2>Funcionalidades</h2>
            <p>Descubra todas as funcionalidades disponíveis no sistema e aprenda como utilizá-las.</p>
          </div>
        );
      case "Layout":
        return (
          <div>
            <h2>Layout</h2>
            <p>Explore os diferentes layouts e opções de personalização do sistema.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo Finanblue" className="header-logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <button
              className="header-nav-link"
              onClick={() => handleNavClick("Início")}
            >
              Início
            </button>
          </li>
          <li>
            <button
              className="header-nav-link"
              onClick={() => handleNavClick("Funcionalidades")}
            >
              Funcionalidades
            </button>
          </li>
          <li>
            <button
              className="header-nav-link"
              onClick={() => handleNavClick("Layout")}
            >
              Layout
            </button>
          </li>
        </ul>
      </nav>

      {activeSection && (
        <div className="overlay">
          <div className="overlay-content">
            {getContentForSection(activeSection)}
            <button className="overlay-close" onClick={closeOverlay}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
