import React from "react";
import styles from "./BestPotsSellers.module.css";
import { getBestSellerPots } from "../../../utils/productUtils";

const BestPotsSellers: React.FC = () => {
  const bestPotSellerProducts = getBestSellerPots(4);

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
              <a href={`/producto/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </a>
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{product.name}</h3>
              <div>
                <p className={styles.price}>MX${product.price.toFixed(2)}</p>
                <a
                  href={`/producto/${product.id}`}
                  className={`${styles.addToCartBtn} ${product.isSoldOut ? styles.soldOut : ""}`}
                >
                  {product.isSoldOut ? "AGOTADO" : "VER DETALLES"}
                </a>
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
