'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import CartDrawer from '../components/CartDrawer';
import Toast from '../components/Toast';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [isLoaded, setIsLoaded] = useState(false);

  // Hydrate cart from localStorage after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cream_cart_v2');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
    setIsLoaded(true);
  }, []);

  // Save cart to local storage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('cream_cart_v2', JSON.stringify(cartItems));
    } catch {
      // Ignore local storage errors
    }
  }, [cartItems, isLoaded]);

  const showToastNotification = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToastNotification(`Added "${product.name}" to cart!`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = (notify = true) => {
    setCartItems([]);
    try {
      localStorage.setItem('cream_cart_v2', JSON.stringify([]));
    } catch {
      // Ignore storage errors
    }
    if (notify) {
      showToastNotification('Order placed! Your box has been submitted.');
    }
  };

  const getItemQuantity = (productId) => {
    const item = cartItems.find((ci) => ci.id === productId);
    return item ? item.quantity : 0;
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        getItemQuantity,
        totalCartCount,
        showToastNotification,
      }}
    >
      {children}

      {/* Global Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />

      {/* Global Non-intrusive Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast({ visible: false, message: '' })}
        onOpenCart={() => {
          setToast({ visible: false, message: '' });
          setIsCartOpen(true);
        }}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
