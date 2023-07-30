import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); 

  const addItemToCart = (item) => {
    //console.log('Adding item to cart:', item);
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    //console.log('Increasing quantity of item:', item);
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    //console.log('Decreasing quantity of item:', item);
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id && prevItem.quantity > 1 ? { ...prevItem, quantity: prevItem.quantity - 1 } : prevItem
      )
    );
  };

  const removeItem = (item) => {
    //console.log('Removing item from cart:', item);
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));  //using local-storage for making the added item stored from any component to other
    //console.log('Updated cart items:', cartItems);
  }, [cartItems]);

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, increaseQuantity, decreaseQuantity, removeItem, isItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
