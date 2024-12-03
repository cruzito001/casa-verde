import React from "react";
import styles from "./RelatedProducts.module.css";
import { getRelatedProducts } from "../../utils/productUtils";
import type { Product } from "../../data/best-sellers";

interface RelatedProductsProps {
  productId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchRelatedProducts = async () => {
      const products = await getRelatedProducts(productId);
      setRelatedProducts(products);
    };
    fetchRelatedProducts();
  }, [productId]);

  return (
    <div className={styles.relatedProductsContainer}>
      <h2 className={styles.relatedProductsTitle}>Productos relacionados</h2>
      <div className={styles.relatedProductsGrid}>
        {relatedProducts.map((product) => (
          <a
            href={`/producto/${product.id}`}
            key={product.id}
            className={styles.productCard}
          >
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
                style={{ viewTransitionName: `product-image-${product.id}` }}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>
                MX${product.price.toFixed(2)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
