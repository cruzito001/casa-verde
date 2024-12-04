import React from "react";
import styles from "./BestSellers.module.css";
import { getBestSellerPlants } from "../../../utils/productUtils";

const BestSellers: React.FC = () => {
  const bestSellerProducts = getBestSellerPlants(4);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>PLANTAS MÁS VENDIDAS</h2>
      <div className={styles.grid}>
        {bestSellerProducts.map((product) => (
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
    </section>
  );
};

export default BestSellers;
