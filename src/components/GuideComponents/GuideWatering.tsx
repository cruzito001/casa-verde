import React from "react";
import styles from "./GuideSection.module.css";
import { Droplets } from "lucide-react";

const GuideWatering: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Droplets className={styles.icon} /> Riego
      </h2>
      <p>
        El riego adecuado es crucial para la salud de tus plantas. Sigue estos
        consejos:
      </p>
      <ul className={styles.list}>
        <li>
          Verifica la humedad del suelo antes de regar. La capa superior debe
          estar seca.
        </li>
        <li>Riega a fondo, pero no dejes que las raíces se empapen.</li>
        <li>
          Ajusta la frecuencia de riego según la estación y el tipo de planta.
        </li>
      </ul>
      <p>
        Recuerda que es mejor regar menos frecuentemente pero en profundidad,
        que regar poco y a menudo.
      </p>
    </section>
  );
};

export default GuideWatering;
