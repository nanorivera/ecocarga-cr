import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // items: { [code]: { product, quantity } }
  const [items, setItems] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev[product.code] || { product, quantity: 0 };
      return {
        ...prev,
        [product.code]: {
          product,
          quantity: existing.quantity + quantity,
        },
      };
    });
    setIsOpen(true);
  };

  const setQuantity = (code, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) {
        const { [code]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [code]: { ...prev[code], quantity } };
    });
  };

  const increment = (code) =>
    setItems((prev) =>
      prev[code]
        ? { ...prev, [code]: { ...prev[code], quantity: prev[code].quantity + 1 } }
        : prev
    );

  const decrement = (code) => {
    setItems((prev) => {
      if (!prev[code]) return prev;
      const nextQty = prev[code].quantity - 1;
      if (nextQty <= 0) {
        const { [code]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [code]: { ...prev[code], quantity: nextQty } };
    });
  };

  const removeItem = (code) =>
    setItems((prev) => {
      const { [code]: _removed, ...rest } = prev;
      return rest;
    });

  const clear = () => setItems({});

  const { list, subtotal, totalSavings, total, count } = useMemo(() => {
    const list = Object.values(items);
    let subtotal = 0;
    let totalSavings = 0;
    let count = 0;
    for (const { product, quantity } of list) {
      subtotal += product.promoPrice * quantity;
      totalSavings += (product.price - product.promoPrice) * quantity;
      count += quantity;
    }
    return { list, subtotal, totalSavings, total: subtotal, count };
  }, [items]);

  const value = {
    items,
    list,
    subtotal,
    totalSavings,
    total,
    count,
    isOpen,
    setIsOpen,
    addItem,
    setQuantity,
    increment,
    decrement,
    removeItem,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}