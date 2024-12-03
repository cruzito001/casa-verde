export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isSoldOut?: boolean;
}

export const bestSellerProducts: Product[] = [
  {
    id: 1,
    name: "ARECA",
    price: 239.95,
    image: "/images/plantas/areca.png",
  },
  {
    id: 2,
    name: "PACK AHORRO 2X SANSEVIERIA",
    price: 424.95,
    image: "/images/plantas/sansevieria.jpg",
  },
  {
    id: 3,
    name: "FICUS ROBUSTA GRANDE",
    price: 459.95,
    image: "/images/plantas/ficus-robusta.png",
  },
  {
    id: 4,
    name: "FICUS LYRATA",
    price: 349.95,
    image: "/images/plantas/ficus-lyrata.jpg",
    isSoldOut: true,
  },
];
