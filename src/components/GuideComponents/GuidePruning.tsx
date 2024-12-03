import React from "react";
import styles from "./GuideSection.module.css";
import { Scissors } from "lucide-react";

const GuidePruning: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Scissors className={styles.icon} /> Poda
      </h2>
      <p>
        La poda regular ayuda a mantener la forma de tus plantas y promueve un
        crecimiento saludable:
      </p>
      <ul className={styles.list}>
        <li>Elimina las hojas muertas, amarillentas o dañadas regularmente.</li>
        <li>
          Poda las puntas de crecimiento para fomentar un crecimiento más denso.
        </li>
        <li>
          Usa herramientas limpias y afiladas para evitar dañar la planta.
        </li>
      </ul>
      <p>
        La poda también es una buena oportunidad para inspeccionar tus plantas
        en busca de signos de plagas o enfermedades.
      </p>
    </section>
  );
};

export default GuidePruning;
