import React, { useState } from "react";

const CartApp = ({ products }) => {
  // State to manage the cart items and total
  const [cartItems, setCartItems] = useState([]);

  // Add item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <p>{item.title} - ${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <p>Total: ${calculateTotal()}</p>
      </div>
      <div className="cart-actions">
        <button className="clear-cart" onClick={() => setCartItems([])}>
          Clear Cart
        </button>
      </div>
      <h3>Menu</h3>
      <div className="menu-items">
        {products.map((product, index) => (
          <div key={index} className="menu-item">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartApp;
