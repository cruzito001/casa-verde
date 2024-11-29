import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
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
      <div className="social-icons">
        <a
          href="https://www.instagram.com/casaverde"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.facebook.com/casaverde"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://www.youtube.com/casaverde"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Youtube size={24} />
        </a>
      </div>
      <div className="copyright">Copyright Casa Verde 2024</div>
    </footer>
  );
};

export default Footer;
