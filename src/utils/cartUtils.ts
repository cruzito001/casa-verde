import type { Product } from "../data/best-sellers";

export interface CartItem extends Product {
  quantity: number;
}

export interface PromoCode {
  code: string;
  discount: number;
}

const CART_STORAGE_KEY = "casa-verde-cart";
const VALID_PROMO_CODES: PromoCode[] = [
  { code: "BIENVENIDO", discount: 0.1 },
  { code: "PLANTLOVER", discount: 0.15 },
];

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const addToCart = (product: Product) => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
    saveCart(cart);
  } else {
    const newItem = { ...product, quantity: 1 };
    saveCart([...cart, newItem]);
  }
};

export const updateQuantity = (productId: number, quantity: number) => {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity = Math.max(0, quantity);
    if (item.quantity === 0) {
      removeFromCart(productId);
    } else {
      saveCart(cart);
    }
  }
};

export const removeFromCart = (productId: number) => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== productId);
  saveCart(updatedCart);
};

export const getCartItemsCount = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const getCartSubtotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const applyPromoCode = (code: string): PromoCode | null => {
  const promoCode = VALID_PROMO_CODES.find(
    (promo) => promo.code === code.toUpperCase()
  );
  return promoCode || null;
};

export const calculateTotal = (
  subtotal: number,
  promoCode: PromoCode | null
): number => {
  if (!promoCode) return subtotal;
  const discount = subtotal * promoCode.discount;
  return subtotal - discount;
};
