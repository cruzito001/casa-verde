import React from "react";
import styles from "./GuideSection.module.css";
import { Thermometer } from "lucide-react";

const GuideTemperature: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Thermometer className={styles.icon} /> Temperatura
      </h2>
      <p>
        La mayoría de las plantas de interior prosperan en temperaturas
        similares a las que nos resultan cómodas a nosotros:
      </p>
      <ul className={styles.list}>
        <li>Temperatura ideal: Entre 15°C y 24°C durante el día.</li>
        <li>Evita cambios bruscos de temperatura.</li>
        <li>
          Mantén las plantas alejadas de corrientes de aire frío y fuentes de
          calor directo.
        </li>
      </ul>
      <p>
        Algunas plantas tropicales pueden requerir temperaturas más altas y
        mayor humedad.
      </p>
    </section>
  );
};

export default GuideTemperature;
