import React, { createContext, useContext, useState, ReactNode } from 'react';
import { products } from '../data/products';

// Define the Product interface
export interface Product {
  id: number;
  price: number;
  title: string;
  imageURL: string;
  qty?: number;
}

// Define the shape of our context
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

// Create the context with default values
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Add a product to cart
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If exists, increase quantity
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, qty: (item.qty || 1) + 1 } 
            : item
        );
      } else {
        // Otherwise, add new item with qty 1
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Increase item quantity
  const increaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && (item.qty || 1) > 1
          ? { ...item, qty: (item.qty || 1) - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        increaseQuantity, 
        decreaseQuantity 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
