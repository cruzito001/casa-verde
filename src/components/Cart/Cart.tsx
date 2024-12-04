import React, { useState, useEffect } from "react";
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import styles from "./Cart.module.css";
import {
  type CartItem,
  type PromoCode,
  getCart,
  updateQuantity,
  removeFromCart,
  getCartSubtotal,
  applyPromoCode,
  calculateTotal,
} from "../../utils/cartUtils";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState("");

  useEffect(() => {
    const updateCartItems = () => {
      setCartItems(getCart());
    };

    updateCartItems();
    window.addEventListener("cartUpdated", updateCartItems);

    return () => {
      window.removeEventListener("cartUpdated", updateCartItems);
    };
  }, []);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleApplyPromoCode = () => {
    const result = applyPromoCode(promoCode);
    if (result) {
      setAppliedPromo(result);
      setPromoError("");
      setPromoCode("");
    } else {
      setPromoError("Código promocional inválido");
    }
  };

  const subtotal = getCartSubtotal();
  const total = calculateTotal(subtotal, appliedPromo);

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
                    <p className={styles.itemPrice}>
                      MX${item.price.toFixed(2)}
                    </p>
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControl}>
                        <button
                          className={styles.quantityButton}
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button
                          className={styles.quantityButton}
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        className={styles.removeButton}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.cartFooter}>
              <div className={styles.promoCode}>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Código promocional"
                  className={styles.promoInput}
                />
                <button
                  onClick={handleApplyPromoCode}
                  className={styles.promoButton}
                >
                  Aplicar
                </button>
              </div>
              {promoError && <p className={styles.promoError}>{promoError}</p>}
              {appliedPromo && (
                <p className={styles.promoApplied}>
                  Descuento aplicado: {appliedPromo.discount * 100}%
                </p>
              )}
              <div className={styles.cartSummary}>
                <div className={styles.summaryRow}>
                  <span>Subtotal:</span>
                  <span>MX${subtotal.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className={styles.summaryRow}>
                    <span>Descuento:</span>
                    <span>
                      -MX${(subtotal * appliedPromo.discount).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className={`${styles.summaryRow} ${styles.total}`}>
                  <span>Total:</span>
                  <span>MX${total.toFixed(2)}</span>
                </div>
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
