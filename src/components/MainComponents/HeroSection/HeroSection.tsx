import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>AÑADE VIDA A TU HOGAR</h1>
          <p>LAS PLANTAS MÁS TOP AL MEJOR PRECIO</p>
          <a href="/plantas" className="hero-button">
            Ver todas
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
