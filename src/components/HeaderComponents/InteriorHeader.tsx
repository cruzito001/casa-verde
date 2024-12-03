import React from "react";
import styles from "./HeaderStyles.module.css";

interface InteriorHeaderProps {
  title?: string;
}

const InteriorHeader: React.FC<InteriorHeaderProps> = ({
  title = "PLANTAS DE INTERIOR",
}) => {
  return (
    <section className={`${styles.header} ${styles.interiorHeader}`}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default InteriorHeader;
