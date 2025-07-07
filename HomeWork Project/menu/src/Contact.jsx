import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="page-container contactStyling">
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
        <a
          href="https://www.google.com/maps/dir//Domino's+Pizza,+464+3rd+Ave,+New+York,+NY+10016"
          target="_blank"
          rel="noopener noreferrer"
          className="contactLinkStyling"
        >
          View us on Google Maps
        </a>

        <form>
          <div className="form-submission">
            <label htmlFor="name"><span className="highlight">First Name</span></label>
            <input type="text" id="name" name="name" placeholder="Your name.." />

            <label htmlFor="email"><span className="highlight">Email</span></label>
            <input type="text" id="email" name="email" placeholder="Your email.." />

            <label htmlFor="subject"><span className="highlight">Subject</span></label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

            <input type="submit" value="Submit" />
          </div>
        </form>
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
