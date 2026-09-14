import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const hamburgerRef = useRef(null);

  const openMenu = () => {
    setMenuActive(true);
  };

  const closeMenu = () => {
    hamburgerRef.current?.focus();
    setMenuActive(false);
  };

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuActive]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && menuActive) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuActive]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          PMD
        </Link>

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

          <Link to="/prices" className="nav-link">
            Pricing
          </Link>
        </div>

        <Link
          to="/contact"
          className="cta-button"
        >
          Get a Free Quote
        </Link>

        <button
          ref={hamburgerRef}
          type="button"
          className="hamburger"
          onClick={openMenu}
          aria-label="Open navigation menu"
          aria-expanded={menuActive}
          aria-controls="mobile-navigation"
        >
          <FaBars />
        </button>

        <div
          className={`mobile-overlay ${
            menuActive ? "mobile-overlay-active" : ""
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <aside
          id="mobile-navigation"
          className={`mobile-drawer ${
            menuActive ? "mobile-drawer-active" : ""
          }`}
          inert={!menuActive}
        >
          <div className="mobile-drawer-header">
            <Link
              to="/"
              className="mobile-drawer-logo"
              onClick={closeMenu}
            >
              PMD
            </Link>

            <button
              type="button"
              className="mobile-close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className="mobile-drawer-links">
            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
            >
              Services & Gallery
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us
            </Link>

            <Link
              to="/privacy-policy"
              onClick={closeMenu}
            >
              Privacy Policy (POPIA)
            </Link>
          </div>

          <div className="mobile-drawer-footer">
            <Link
              to="/contact"
              className="mobile-drawer-cta"
              onClick={closeMenu}
            >
              Get a Free Quote
            </Link>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Header;