import React from "react";
import styles from "./BestPotsSellers.module.css";
import { bestPotSellerProducts } from "../../../data/best-pots-sellers";

const BestPotsSellers: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>NUESTRAS MACETAS MÁS TOP</h2>
      <div className={styles.grid}>
        {bestPotSellerProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            {product.isSoldOut && (
              <span className={styles.soldOutBadge}>AGOTADO</span>
            )}
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{product.name}</h3>
              <div>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <button
                  className={`${styles.addToCartBtn} ${product.isSoldOut ? styles.soldOut : ""}`}
                  disabled={product.isSoldOut}
                >
                  {product.isSoldOut ? "Agotado" : "Añadir al carrito"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.seeAllContainer}>
        <a href="/macetas" className={styles.seeAllBtn}>
          Ver todas
        </a>
      </div>
    </section>
  );
};

export default BestPotsSellers;
