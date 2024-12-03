import React from "react";
import styles from "./BeginnerGuide.module.css";
import { Sun, Droplets, Thermometer, Wind } from "lucide-react";

const tips = [
  {
    icon: Sun,
    title: "LUZ",
    description:
      "La mayoría de las plantas necesitan luz brillante indirecta. Evita la luz solar directa prolongada.",
  },
  {
    icon: Droplets,
    title: "AGUA",
    description:
      "Riega cuando la capa superior del suelo esté seca. Evita el exceso de agua.",
  },
  {
    icon: Thermometer,
    title: "TEMPERATURA",
    description:
      "Mantén tus plantas entre 15-24°C. Evita cambios bruscos de temperatura.",
  },
  {
    icon: Wind,
    title: "VENTILACIÓN",
    description:
      "Asegura una buena circulación de aire, pero evita las corrientes frías.",
  },
];

const BeginnerGuide: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>GUÍA PARA PRINCIPIANTES</h2>
      <div className={styles.grid}>
        {tips.map((tip, index) => (
          <div key={index} className={styles.card}>
            <tip.icon className={styles.icon} />
            <h3 className={styles.tipTitle}>{tip.title}</h3>
            <p className={styles.description}>{tip.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <a href="/guia-completa" className={styles.ctaButton}>
          VER GUÍA COMPLETA
        </a>
      </div>
    </section>
  );
};

export default BeginnerGuide;
