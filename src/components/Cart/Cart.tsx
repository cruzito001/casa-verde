import React from "react";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import styles from "./Cart.module.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  // Ejemplo de items en el carrito
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "ARECA",
      price: 239.95,
      quantity: 1,
      image: "/images/plantas/areca.png",
    },
    {
      id: 2,
      name: "MACETA ALICE NATURAL",
      price: 15.95,
      quantity: 2,
      image: "/images/macetas/maceta-alice.jpg",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartContent}>
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>Tu Carrito</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={24} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <ShoppingCart size={48} />
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ul className={styles.cartItems}>
              {cartItems.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                    <div className={styles.quantityControl}>
                      <button className={styles.quantityButton}>
                        <Minus size={16} />
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button className={styles.quantityButton}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.cartFooter}>
              <div className={styles.total}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className={styles.checkoutButton}>
                Proceder al Pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
