"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  total: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "blazin-hog-cart";

const CartContext = createContext<CartContextValue | null>(null);

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedValue = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    try {
      return JSON.parse(storedValue) as CartItem[];
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce(
      (sum, item) => sum + parsePrice(item.price) * item.quantity,
      0
    );

    return {
      items,
      itemCount,
      total,
      addItem(item) {
        setItems((currentItems) => {
          const existingItem = currentItems.find(
            (currentItem) => currentItem.id === item.id
          );

          if (!existingItem) {
            return [...currentItems, { ...item, quantity: 1 }];
          }

          return currentItems.map((currentItem) =>
            currentItem.id === item.id
              ? { ...currentItem, quantity: currentItem.quantity + 1 }
              : currentItem
          );
        });
      },
      decrementItem(id) {
        setItems((currentItems) =>
          currentItems
            .map((currentItem) =>
              currentItem.id === id
                ? { ...currentItem, quantity: currentItem.quantity - 1 }
                : currentItem
            )
            .filter((currentItem) => currentItem.quantity > 0)
        );
      },
      removeItem(id) {
        setItems((currentItems) =>
          currentItems.filter((currentItem) => currentItem.id !== id)
        );
      },
      clearCart() {
        setItems([]);
      },
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);

  if (!value) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return value;
}
