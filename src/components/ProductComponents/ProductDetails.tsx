import React from "react";
import styles from "./ProductDetails.module.css";
import { ShoppingCart } from "lucide-react";

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img
          src={product.image}
          alt={product.name}
          style={{ viewTransitionName: "product-image" }}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productCategory}>{product.category}</p>
        </div>
        <p className={styles.productPrice}>MX${product.price.toFixed(2)}</p>
        <div className={styles.productDescription}>
          <h2 className={styles.descriptionTitle}>Descripción</h2>
          <p>{product.description}</p>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.addToCartButton}>
            <ShoppingCart size={20} />
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
