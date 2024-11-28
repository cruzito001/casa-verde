import React, { useState } from "react";
import "./Header.css";

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
  { name: "PROFESIONALES", url: "/profesionales" },
];

const Header: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  return (
    <header className="header">
      <div className="header-top">
        <div className="search-icon">
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
        <a href="/" className="logo">
          <h1>
            CASA <span className="verde">VERDE</span>
          </h1>
        </a>
        <div className="user-cart">
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
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`menu-item ${item.subItems ? "has-submenu" : ""}`}
              onMouseEnter={() => setActiveMenuItem(item.name)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              <a href={item.url}>
                {item.name}
                {item.subItems && <span className="dropdown-indicator">▾</span>}
              </a>
              {item.subItems && activeMenuItem === item.name && (
                <ul className="sub-menu">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a href={subItem.url}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
