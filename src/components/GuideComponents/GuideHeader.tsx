import React from "react";
import styles from "./GuideHeader.module.css";

const GuideHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Guía Completa para el Cuidado de Plantas</h1>
      <p className={styles.subtitle}>
        Todo lo que necesitas saber para mantener tus plantas felices y
        saludables
      </p>
    </header>
  );
};

export default GuideHeader;
