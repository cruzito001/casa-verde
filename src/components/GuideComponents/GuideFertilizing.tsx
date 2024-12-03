import React from "react";
import styles from "./GuideSection.module.css";
import { Sprout } from "lucide-react";

const GuideFertilizing: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Sprout className={styles.icon} /> Fertilización
      </h2>
      <p>
        La fertilización adecuada proporciona a tus plantas los nutrientes
        necesarios para un crecimiento óptimo:
      </p>
      <ul className={styles.list}>
        <li>
          Usa un fertilizante equilibrado para plantas de interior durante la
          temporada de crecimiento.
        </li>
        <li>
          Sigue las instrucciones del producto para la dosificación correcta.
        </li>
        <li>
          Reduce o detén la fertilización durante los meses de invierno cuando
          el crecimiento es más lento.
        </li>
      </ul>
      <p>
        Recuerda que es mejor sub-fertilizar que sobre-fertilizar, ya que el
        exceso de nutrientes puede dañar las raíces.
      </p>
    </section>
  );
};

export default GuideFertilizing;
