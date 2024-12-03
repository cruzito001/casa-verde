import React from "react";
import styles from "./GuideSection.module.css";
import { Wind } from "lucide-react";

const GuideVentilation: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Wind className={styles.icon} /> Ventilación
      </h2>
      <p>
        Una buena circulación de aire es importante para prevenir enfermedades y
        promover un crecimiento saludable:
      </p>
      <ul className={styles.list}>
        <li>Asegura una buena circulación de aire alrededor de tus plantas.</li>
        <li>Evita las corrientes de aire frío directas.</li>
        <li>
          Considera usar un ventilador pequeño para mejorar la circulación en
          espacios cerrados.
        </li>
      </ul>
      <p>
        Una buena ventilación también ayuda a controlar la humedad y previene el
        crecimiento de moho.
      </p>
    </section>
  );
};

export default GuideVentilation;
