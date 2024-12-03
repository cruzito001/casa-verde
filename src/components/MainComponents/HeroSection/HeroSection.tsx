import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>AÑADE VIDA A TU HOGAR</h1>
          <p>LAS PLANTAS MÁS TOP AL MEJOR PRECIO</p>
          <a href="/plantas" className={styles.button}>
            Ver todas
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
