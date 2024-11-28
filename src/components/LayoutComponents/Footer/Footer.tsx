import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/contacto">Contacto</a>
        <span className="separator">|</span>
        <a href="/envios-devoluciones">Envíos y devoluciones</a>
        <span className="separator">|</span>
        <a href="/privacidad">Política de privacidad</a>
        <span className="separator">|</span>
        <a href="/faq">Preguntas frecuentes</a>
      </div>
      <div className="copyright">Copyright Casa Verde 2024</div>
    </footer>
  );
};

export default Footer;
