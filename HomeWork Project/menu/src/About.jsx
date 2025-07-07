import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page-container about">
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

      <main>
        <p className="About-paragraph">
          We act with integrity and make disciplined decisions, even when it’s difficult or unpopular.
          High ethical standards and uncommon honesty are at the heart of how we work together.
          We are committed to safely and responsibly serving our customers, and giving back in the communities where we live and work.
        </p>
      </main>

      <footer>
        <hr />
        Business hours: 10:30 AM - 1 AM<br />
        <a href="https://www.instagram.com/dominos/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
        <a href="https://www.facebook.com/Dominos/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </footer>
    </div>
  )
}
