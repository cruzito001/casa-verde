export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isSoldOut?: boolean;
}

export const bestSellerProducts: Product[] = [
  {
    id: 1,
    name: "ARECA",
    price: 239.95,
    image: "/images/plantas/areca.png",
    description:
      "Elegante palmera de interior conocida por sus hojas arqueadas y su capacidad para purificar el aire.",
    category: "Palmeras de Interior",
  },
  {
    id: 2,
    name: "PACK AHORRO 2X SANSEVIERIA",
    price: 424.95,
    image: "/images/plantas/sansevieria.jpg",
    description:
      "Dúo de plantas resistentes y de bajo mantenimiento, perfectas para purificar el aire en espacios interiores.",
    category: "Plantas Purificadoras",
  },
  {
    id: 3,
    name: "FICUS ROBUSTA GRANDE",
    price: 459.95,
    image: "/images/plantas/ficus-robusta.png",
    description:
      "Imponente ficus de hojas grandes y brillantes, ideal para añadir un toque tropical a espacios amplios.",
    category: "Árboles de Interior",
  },
  {
    id: 4,
    name: "FICUS LYRATA",
    price: 349.95,
    image: "/images/plantas/ficus-lyrata.jpg",
    description:
      "Ficus de hojas en forma de lira, popular por su atractivo visual y capacidad para mejorar la calidad del aire.",
    category: "Árboles de Interior",
    isSoldOut: true,
  },
];
