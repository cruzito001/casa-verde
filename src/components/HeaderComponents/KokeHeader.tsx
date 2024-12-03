import React from "react";
import styles from "./KokeHeader.module.css";

const KokeHeader: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.mainTitle}>KOKEDAMAS Y TERRARIOS</h1>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>KOKEDAMAS</h2>
          <p className={styles.description}>
            "Kokedama" es una técnica japonesa de cultivo de plantas que está
            ganando popularidad como elemento decorativo en hogares de todo el
            mundo. Su nombre significa "bola de musgo" y su objetivo es
            reemplazar las macetas tradicionales al reducir el impacto ambiental
            y permitir la creación de un ambiente en el que dos plantas puedan
            convivir en una única bola de musgo que actúa como maceta.
          </p>
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>TERRARIOS</h2>
          <p className={styles.description}>
            Un terrario consiste en un recipiente cerrado en el cual conviven
            seres vivos creando su propio ecosistema. Gracias a ello se
            autorregula sin necesidad de intervención. No se tiene que regar ni
            requiere cuidados de ningún tipo. Además, al estar hechos a mano,
            son piezas de artesanía únicas e irrepetibles. ¿No son geniales?
          </p>
        </div>
      </div>
    </section>
  );
};

export default KokeHeader;
