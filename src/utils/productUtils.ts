import { bestSellerProducts } from "../data/best-sellers";
import { bestPotSellerProducts } from "../data/best-pots-sellers";
import { plantasFaciles } from "../data/plantas-faciles";
import { plantasGrandes } from "../data/plantas-grandes";
import { plantasPocaLuz } from "../data/plantas-poca-luz";
import { plantasPalmeras } from "../data/plantas-palmeras";
import { plantasExterior } from "../data/plantas-exterior";
import { macetasYute } from "../data/macetas-yute";
import { macetasTerracota } from "../data/macetas-terracota";
import { kokedamas } from "../data/kokedamas";
import { terrarios } from "../data/terrarios";
import type { Product } from "../data/best-sellers";

const allProducts = [
  ...bestSellerProducts,
  ...bestPotSellerProducts,
  ...plantasFaciles,
  ...plantasGrandes,
  ...plantasPocaLuz,
  ...plantasPalmeras,
  ...plantasExterior,
  ...macetasYute,
  ...macetasTerracota,
  ...kokedamas,
  ...terrarios,
];

export const getAllProducts = async (): Promise<Product[]> => {
  return allProducts;
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> => {
  const product = allProducts.find((product) => product.id === id);
  if (product) {
    return {
      ...product,
      description:
        product.description ||
        "No hay descripción disponible para este producto.",
      category: product.category || "Sin categoría",
    };
  }
  return undefined;
};

export const getRelatedProducts = async (id: number): Promise<Product[]> => {
  const product = await getProductById(id);
  if (!product) return [];

  const relatedProducts = allProducts.filter(
    (p) => p.id !== id && p.category === product.category
  );

  if (relatedProducts.length < 4) {
    const otherProducts = allProducts.filter(
      (p) => p.id !== id && p.category !== product.category
    );
    return [...relatedProducts, ...otherProducts].slice(0, 4);
  }

  return relatedProducts.slice(0, 4);
};

export const getBestSellerPlants = (count: number): Product[] => {
  return plantasFaciles.slice(0, count);
};

export const getBestSellerPots = (count: number): Product[] => {
  const allPots = [...macetasYute, ...macetasTerracota];
  return allPots.slice(0, count);
};
