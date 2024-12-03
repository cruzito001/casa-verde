import React from "react";
import styles from "./ProductGrid.module.css";
import type { Product } from "../../data/best-sellers";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
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
                style={{ viewTransitionName: `product-image-${product.id}` }}
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
  );
};

export default ProductGrid;
