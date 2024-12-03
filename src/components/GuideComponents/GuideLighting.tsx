import React from "react";
import styles from "./GuideSection.module.css";
import { Sun } from "lucide-react";

const GuideLighting: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <Sun className={styles.icon} /> Iluminación
      </h2>
      <p>
        La luz es esencial para el crecimiento de las plantas. Aquí te
        explicamos cómo proporcionar la iluminación adecuada:
      </p>
      <ul className={styles.list}>
        <li>
          Luz brillante indirecta: Ideal para la mayoría de las plantas de
          interior.
        </li>
        <li>
          Luz directa: Necesaria para cactus, suculentas y algunas plantas
          tropicales.
        </li>
        <li>
          Sombra parcial: Perfecta para plantas que prefieren menos luz, como
          algunas variedades de helechos.
        </li>
      </ul>
      <p>
        Recuerda rotar tus plantas regularmente para asegurar un crecimiento
        uniforme.
      </p>
    </section>
  );
};

export default GuideLighting;
