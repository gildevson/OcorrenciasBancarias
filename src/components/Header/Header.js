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
            <h2>Layout Bancarios</h2>
            <table className="command-table">
              <thead>
                <tr>
                  <th>NOME DO BANCO</th>
                  <th>NÚMERO</th>
                  <th>TIPO DE CNAB</th>
                  <th>LAYOUT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Banco do Brasil</td>
                  <td>001</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://example.com/banco-brasil-cnab240.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Bradesco</td>
                  <td>237</td>
                  <td>CNAB 400</td>
                  <td>
                    <a
                      href="https://example.com/bradesco-cnab400.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Itaú</td>
                  <td>341</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://example.com/itau-cnab240.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Santander</td>
                  <td>033</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://example.com/santander-cnab240.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
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
              Layout Bancarios
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
