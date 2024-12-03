import React from "react";
import "./BestPotsSellers.css";

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
    name: "MACETA ALICE NATURAL",
    price: 15.95,
    image: "@images/macetas/maceta-alice.jpg",
  },
  {
    id: 2,
    name: "MACETA AURA VERDE DARK",
    price: 12.95,
    image: "@images/macetas/maceta-aura-verde.jpg",
  },
  {
    id: 3,
    name: "MACETA AURA TERRACOTA",
    price: 12.95,
    image: "@images/macetas/maceta-aura-terracota.jpg",
  },
  {
    id: 4,
    name: "MACETA CUBO",
    price: 13.95,
    image: "@images/macetas/maceta-cubo.jpg",
  },
];

const BestPotsSellers: React.FC = () => {
  return (
    <section className="bestsellers">
      <h2 className="bestsellers-title">NUESTRAS MACETAS MÁS TOP</h2>
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

export default BestPotsSellers;
