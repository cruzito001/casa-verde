import React from "react";
import styles from "./BestSellers.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isSoldOut?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "ARECA",
    price: 239.95,
    image: "../../../public/images/plantas/areca.png",
  },
  {
    id: 2,
    name: "PACK AHORRO 2X SANSEVIERIA",
    price: 424.95,
    image: "../../../public/images/plantas/sansevieria.jpg",
  },
  {
    id: 3,
    name: "FICUS ROBUSTA GRANDE",
    price: 459.95,
    image: "../../../public/images/plantas/ficus-robusta.png",
  },
  {
    id: 4,
    name: "FICUS LYRATA",
    price: 349.95,
    image: "../../../public/images/plantas/ficus-lyrata.jpg",
    isSoldOut: true,
  },
];

const BestSellers: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>PLANTAS MÁS VENDIDAS</h2>
      <div className={styles.grid}>
        {products.map((product) => (
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
    </section>
  );
};

export default BestSellers;
