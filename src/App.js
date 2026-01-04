import React, { useEffect, useState } from "react";
import PortalOverlay from "./components/PortalOverlay/PortalOverlay";
import Header from "./components/Header/Header";
import ConsultarAdicionarOcorrencia from "./components/ConsultarAdicionarOcorrencia/ConsultarAdicionarOcorrencia";
import Footer from "./components/Footer/Footer";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true); // abre sempre quando entrar no site
  }, []);

  return (
    <div>
      <PortalOverlay
        open={showOverlay}
        onClose={() => setShowOverlay(false)}
        seconds={4}
        newSiteUrl="https://bancosocorrencia.com/"
  imageSrc="/img/Animacao.gif"
      />

      <Header />
      <ConsultarAdicionarOcorrencia />
      <Footer />
    </div>
  );
}

export default App;
