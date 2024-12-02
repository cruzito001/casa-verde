import React from "react";
import "./BestSellers.css";

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
    <section className="bestsellers">
      <h2 className="bestsellers-title">PLANTAS MÁS VENDIDAS</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.isSoldOut && (
              <span className="sold-out-badge">AGOTADO</span>
            )}
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                  className={`add-to-cart-btn ${product.isSoldOut ? "sold-out" : ""}`}
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
