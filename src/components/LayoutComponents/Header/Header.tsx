import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Cart from "../../Cart/Cart";

interface SubMenuItem {
  name: string;
  url: string;
}

interface MenuItem {
  name: string;
  url: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "INTERIOR",
    url: "/interior",
    subItems: [
      { name: "TODAS INTERIOR", url: "/interior/todas" },
      { name: "MÁS VENDIDAS", url: "/interior/mas-vendidas" },
      { name: "FÁCILES", url: "/interior/faciles" },
      { name: "GRANDES", url: "/interior/grandes" },
      { name: "POCA LUZ", url: "/interior/poca-luz" },
      { name: "PET-FRIENDLY", url: "/interior/pet-friendly" },
      { name: "PALMERAS", url: "/interior/palmeras" },
    ],
  },
  { name: "EXTERIOR", url: "/exterior" },
  {
    name: "MACETAS",
    url: "/macetas",
    subItems: [
      { name: "TODAS", url: "/macetas/todas" },
      { name: "MÁS VENDIDAS", url: "/macetas/mas-vendidas" },
      { name: "YUTE", url: "/macetas/yute" },
      { name: "TERRACOTA", url: "/macetas/terracota" },
    ],
  },
  { name: "KOKEDAMAS Y TERRARIOS", url: "/kokedamas-terrarios" },
  { name: "ABOUT US", url: "/about-us" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen, isCartOpen]);

  useEffect(() => {
    // Esto es solo para demostración. En una implementación real,
    // el conteo se actualizaría basado en el estado real del carrito.
    setCartItemCount(2);
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <div className={styles.mobileLeft}>
          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <a href="/" className={styles.logo}>
          <h1>
            CASA <span className={styles.verde}>VERDE</span>
          </h1>
        </a>
        <div className={styles.icons}>
          <div className={styles.searchIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className={`${styles.userIcon} ${styles.desktopOnly}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className={styles.cartIcon} onClick={handleToggleCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartItemCount > 0 && (
              <span className={styles.cartBadge}>{cartItemCount}</span>
            )}
          </div>
        </div>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.isOpen : ""}`}>
        <button
          className={styles.closeMenu}
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`${styles.menuItem} ${item.subItems ? styles.hasSubmenu : ""}`}
              onMouseEnter={() => setActiveMenuItem(item.name)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              <a href={item.url}>
                {item.name}
                {item.subItems && (
                  <span className={styles.dropdownIndicator}>▾</span>
                )}
              </a>
              {item.subItems && activeMenuItem === item.name && (
                <ul className={styles.subMenu}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a href={subItem.url}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className={`${styles.mobileOnly} ${styles.loginItem}`}>
            <a href="/login" className={styles.loginLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              INICIAR SESIÓN
            </a>
          </li>
        </ul>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
