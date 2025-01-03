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
                  <td>Banco do Bradesco</td>
                  <td>237</td>
                  <td>CNAB 400</td>
                  <td>
                    <a
                      href="https://banco.bradesco/assets/pessoajuridica/pdf/mpo_arquivos_layout_400P.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Itau </td>
                  <td>341</td>
                  <td>CNAB 400</td>
                  <td>
                    <a
                      href="https://download.itau.com.br/bankline/layout_cobranca_400bytes_cnab_itau.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Santander </td>
                  <td>033</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://cms.santander.com.br/sites/WPS/documentos/arq-layout-de-arquivos-2/17-10-26_172236_149-382-cobranca+layout+cnab+240+febraban+puro+versao+setembro+2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Caixa </td>
                  <td>104</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://www.caixa.gov.br/Downloads/contribuicao-sindical-urbana-manual-para-emissao-de-grcsu/Contribuicao_Sindical_Urbana_Leiaute_CNAB_240_Remessa_e_Retorno_v_1_8.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Banrisul </td>
                  <td>041</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://www.banrisul.com.br/bob/data/LeiauteBanrisulFebraban_pdr240_v103_10032021.pdf?cache=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Grafeno </td>
                  <td>274</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://www.banrisul.com.br/bob/data/LeiauteBanrisulFebraban_pdr240_v103_10032021.pdf?cache=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Sicoob </td>
                  <td>756</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sicoob.com.br%2Fdocuments%2F3068856%2F0%2Flayout-cnab-240.xls%2F5bfadf52-4278-3d28-0b69-b09b467aad45%3Ft%3D1614120550911&psig=AOvVaw3_Sl_i8vtnTD0ehn4fNu56&ust=1736026975733000&source=images&cd=vfe&opi=89978449&ved=0CAcQr5oMahcKEwj4w4e-wtqKAxUAAAAAHQAAAAAQBA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Febraban </td>
                  <td>000</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://bb.com.br/docs/pub/emp/empl/dwn/000Completo.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Banco Do Brasil </td>
                  <td>001</td>
                  <td>CNAB 240</td>
                  <td>
                    <a
                      href="https://bb.com.br/docs/pub/emp/empl/dwn/000Completo.pdf"
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
            <h2>Sobre</h2>
            <p>
              O <strong>Ocorrencias Bancarias</strong> é uma plataforma projetada para oferecer
              soluções eficientes para a gestão de ocorrências bancárias. Nosso objetivo
              é simplificar os processos, proporcionando uma interface intuitiva para
              facilitar o acesso a layouts bancários, funcionalidades específicas e muito mais.
            </p>
            
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
              Layout
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
              Sobre
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
