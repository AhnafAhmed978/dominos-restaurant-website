
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <nav className="navLinks">
        <input type="checkbox" id="toggle-navbar" />
        <label htmlFor="toggle-navbar" className="toggle-navbar">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <ul className="menu">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-background"></div>
      </section>

      <section className="slider-container">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slide-1" src="https://plus.unsplash.com/premium_photo-1733306588881-0411931d4fed?w=1000&auto=format&fit=crop&q=60" alt="Basil Pizza" />
            <img id="slide-2" src="https://images.unsplash.com/photo-1544067963-8a045010edcd?q=80&w=687&auto=format&fit=crop" alt="Dominoes and Pizza" />
            <img id="slide-3" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&auto=format&fit=crop&q=60" alt="Pizza with berries" />
            <img id="slide-4" src="https://images.unsplash.com/photo-1544029048-b78834e2c277?w=1000&auto=format&fit=crop&q=60" alt="Pizza with soda" />
            <img id="slide-5" src="https://images.unsplash.com/photo-1615719413546-198b25453f85?w=1000&auto=format&fit=crop&q=60" alt="Pasta Pizza" />
            <img id="slide-6" src="https://images.unsplash.com/photo-1608403376217-1c256df9f15a?w=1000&auto=format&fit=crop&q=60" alt="Dominoes Worker" />
          </div>
          <div className="slider-navigation">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
            <a href="#slide-5"></a>
            <a href="#slide-6"></a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: 'green', color: 'white', padding: '1rem' }}>
        <hr />
        <p>Business hours: 10:30 AM - 1 AM</p>
        <a href="https://www.instagram.com/dominos/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
        <a href="https://www.facebook.com/Dominos/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </footer>
    </div>
  );
}
