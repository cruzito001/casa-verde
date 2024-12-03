import React from "react";
import styles from "./HeaderStyles.module.css";

interface MacetasHeaderProps {
  title?: string;
}

const MacetasHeader: React.FC<MacetasHeaderProps> = ({ title = "MACETAS" }) => {
  return (
    <section className={`${styles.header} ${styles.macetasHeader}`}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default MacetasHeader;
