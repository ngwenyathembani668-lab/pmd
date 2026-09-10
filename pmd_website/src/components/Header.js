import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (<header className="header"> <nav className="navbar"> <Link to="/" className="logo" onClick={closeMenu}>
    PMD </Link>


    <div className="nav-links">
      <Link to="/" className="nav-link">
        Home
      </Link>

      <Link to="/services" className="nav-link">
        Services & Gallery
      </Link>

      <Link to="/contact" className="nav-link">
        Contact Us
      </Link>
    </div>

    <Link to="/contact" className="cta-button">
      Get a Free Quote
    </Link>

    <button
      type="button"
      className="hamburger"
      onClick={() => setIsOpen((current) => !current)}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>

    <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
      <Link to="/" onClick={closeMenu}>
        Home
      </Link>

      <Link to="/services" onClick={closeMenu}>
        Services & Gallery
      </Link>

      <Link to="/contact" onClick={closeMenu}>
        Contact Us
      </Link>

      <Link
        to="/contact"
        className="mobile-cta"
        onClick={closeMenu}
      >
        Get a Free Quote
      </Link>
    </div>
  </nav>
  </header>


  );
};

export default Header;
