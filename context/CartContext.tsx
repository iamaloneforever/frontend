"use client";
import { create } from "zustand";

/** فقط id و quantity */
export interface CartItem {
  id: string;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getCartCount: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (id) => {
    set((state) => {
      const existing = state.cartItems.find((i) => i.id === id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { id, quantity: 1 }],
      };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(id);
      return;
    }
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id === id ? { ...i, quantity } : i
      ),
    }));
  },

  getCartCount: () =>
    get().cartItems.reduce((total, item) => total + item.quantity, 0),

  clearCart: () => set({ cartItems: [] }),
}));
