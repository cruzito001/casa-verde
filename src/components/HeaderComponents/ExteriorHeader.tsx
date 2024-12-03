import React from "react";
import styles from "./HeaderStyles.module.css";

interface ExteriorHeaderProps {
  title?: string;
}

const ExteriorHeader: React.FC<ExteriorHeaderProps> = ({
  title = "PLANTAS DE EXTERIOR",
}) => {
  return (
    <section className={`${styles.header} ${styles.exteriorHeader}`}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default ExteriorHeader;
