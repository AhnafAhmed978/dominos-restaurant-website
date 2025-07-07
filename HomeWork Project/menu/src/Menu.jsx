import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const products = {
  product1: {
    id: 1,
    name: "Veggie",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew1G46yIxpX9-_EKL7YJXgewHlD6mPJvGVQ&s",
    price: 18.57,
  },
  product2: {
    id: 2,
    name: "6 Cheese",
    image: "https://www.mashed.com/img/gallery/every-dominos-pizza-ranked-from-worst-to-best/13-dominos-wisconsin-6-cheese-pizza-1601322750.jpg",
    price: 10.99,
  },
  product3: {
    id: 3,
    name: "MeatZZa",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/02/3d/1d/meatzza.jpg",
    price: 16.39,
  },
};

export default function Menu() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState({});

  const toggleCart = () => setCartVisible((prev) => !prev);
  const clearCart = () => setCart({});

  const ttlAmount = Object.entries(cart).reduce(
    (total, [key, quantity]) => total + products[key].price * quantity,
    0
  );

  const addToCart = (key) =>
    setCart((prevCart) => ({
      ...prevCart,
      [key]: (prevCart[key] || 0) + 1,
    }));

  const incrementItem = (key) =>
    setCart((prevCart) => ({
      ...prevCart,
      [key]: prevCart[key] + 1,
    }));

  const decrementItem = (key) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[key] > 1) {
        updatedCart[key] -= 1;
      } else {
        delete updatedCart[key];
      }
      return updatedCart;
    });
  };

  const cartCount = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className="page-container bg-black text-white" style={{ minHeight: "100vh" }}>
      <nav className="navLinks">
        <input type="checkbox" id="toggle-navbar" />
        <label htmlFor="toggle-navbar" className="toggle-navbar">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <ul className="menu">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
          <button className="menu-cart" onClick={toggleCart}>
            <FaShoppingCart />
            <span className="cart-count">{cartCount}</span>
          </button>
        </ul>
      </nav>

      <div className="menu-container">
        <div className="menu-main">
          <div className="product-wrapper">
            {Object.entries(products).map(([key, product]) => (
              <div className="product" key={key}>
                <img src={product.image} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="add-to-cart" onClick={() => addToCart(key)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {cartVisible && (
          <div
            className="custom-cart position-fixed d-flex flex-column p-3 text-white overflow-auto"
            style={{
              backgroundColor: "blue",
              top: "50px",
              bottom: 0,
              width: "100%",
              maxWidth: "350px",
              zIndex: 1050,
              transition: "transform 0.3s ease-in-out",
              transform: "translateX(0)",
              left: window.innerWidth <= 480 ? 0 : "unset",
              right: window.innerWidth <= 480 ? "unset" : 0,
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0" style={{color: "white"}}>Your Cart</h4>
            </div>

            {Object.keys(cart).length === 0 ? (
              <p></p>
            ) : (
              <>
                {Object.entries(cart).map(([key, quantity]) => (
                  <div key={key} className="d-flex justify-content-between align-items-center border-bottom border-light py-2">
                    <div className="fw-bold">{products[key].name}</div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-sm btn-green" onClick={() => incrementItem(key)}>+</button>
                      <span>{quantity}</span>
                      <button className="btn btn-sm btn-green" onClick={() => decrementItem(key)}>-</button>
                    </div>
                  </div>
                ))}
              </>
            )}

            <hr className="border-light my-3" />

            <div className="d-flex justify-content-between fw-bold mb-2">
              <span>Total:</span>
              <span>${ttlAmount.toFixed(2)}</span>
            </div>

            <div className="d-grid gap-2">
              <button
                className="btn btn-danger"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button className="btn btn-sm btn-danger" onClick={toggleCart}>Close</button>
            </div>
          </div>
        )}
      </div>

      <footer>
        <hr />
        Business hours: 10:30 AM - 1 AM
        <br />
        <a href="https://www.instagram.com/dominos/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <br />
        <a href="https://www.facebook.com/Dominos/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </footer>
    </div>
  );
}
