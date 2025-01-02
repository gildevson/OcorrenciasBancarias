import React from "react";
import ConsultarAdicionarOcorrencia from "./components/ConsultarAdicionarOcorrencia/ConsultarAdicionarOcorrencia";
import Header from "./components/Header/Header"; // Importando o componente Header
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* Usando o componente Header */}
      <Header />
      <ConsultarAdicionarOcorrencia />
      <Footer />
    </div>
  );
}

export default App;
