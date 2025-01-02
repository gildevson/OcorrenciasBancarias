import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Mais Informações</h4>
          <p>
            Prezados, Gostaria de informar que esse projeto está em desenvolvimento.
            Estou trabalhando ativamente para atender aos requisitos. Manteremos todos atualizados
            sobre o progresso. Agradecemos pelo apoio contínuo. Atenciosamente!
          </p>
        </div>
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/finanbluebr/?locale=pr_br" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/finanbluebr/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC8jmchxKO3u9aA37xIKJ4XQ" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/grupo-finanblue/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://finanblue.com.vc/" target="_blank" rel="noopener noreferrer">
                Finanblue
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Informações de Contato</h4>
          <ul>
            <li>Endereço: Av. Cândido de Abreu, 427 - Centro Cívico, Curitiba - PR, 80530-903</li>
            <li>Telefone: (41) 3090-5150</li>
            <li>WhatsApp: (41) 99216-0075</li>
            <li>Email: suporte@finanblue.com.vc</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Todos os direitos reservados | <strong>Gildevson</strong></p>
        <p>
          <a href="#campanha">Informações de campanha</a> |{" "}
          <a href="#privacidade">Privacidade e Política</a> |{" "}
          <a href="#termos">Termos e Condições</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
