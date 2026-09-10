import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();


    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    if (
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".")
    ) {
      setError("Please enter a valid email address.");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    setError("");

    alert("Thank you for subscribing to PMD updates!");

    setEmail("");


  };

  const handleSocialClick = (event, platform) => {
    event.preventDefault();


    console.log(`PMD Social Click: ${platform}`);


  };

  return (<footer className="footer"> <div className="footer-container"> <div className="footer-grid"> <div className="footer-brand"> <Link to="/" className="footer-logo">
    PMD </Link>

    <p className="footer-description">
      Pel Marketing Distribution provides reliable printing,
      marketing, digital application, and creative branding
      solutions for individuals and businesses.
    </p>

    <div className="footer-hours">
      <h4>Business Hours</h4>

      <p>Monday – Friday: 08:00 – 18:00</p>
      <p>Saturday: 08:00 – 14:00</p>
      <p>Sunday: Closed</p>
    </div>
  </div>

    <div className="footer-links-column">
      <h3 className="footer-column-title">
        Quick Links
      </h3>

      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/services">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>

    <div className="footer-newsletter">
      <h3 className="footer-column-title">
        Stay Updated
      </h3>

      <p className="footer-newsletter-text">
        Subscribe to receive PMD updates, service announcements,
        and special offers.
      </p>

      <form
        className="newsletter-form"
        onSubmit={handleSubscribe}
        noValidate
      >
        <label
          htmlFor="newsletter-email"
          className="sr-only"
        >
          Email address
        </label>

        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

            if (error) {
              setError("");
            }
          }}
          placeholder="Enter your email"
          autoComplete="email"
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? "newsletter-error"
              : undefined
          }
        />

        <button type="submit">
          <span>Subscribe</span>
          <FaArrowRight />
        </button>
      </form>

      {error && (
        <p
          id="newsletter-error"
          className="newsletter-error"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="footer-socials">
        <button
          type="button"
          aria-label="Facebook"
          onClick={(event) =>
            handleSocialClick(event, "Facebook")
          }
        >
          <FaFacebookF />
        </button>

        <button
          type="button"
          aria-label="Instagram"
          onClick={(event) =>
            handleSocialClick(event, "Instagram")
          }
        >
          <FaInstagram />
        </button>

        <button
          type="button"
          aria-label="LinkedIn"
          onClick={(event) =>
            handleSocialClick(event, "LinkedIn")
          }
        >
          <FaLinkedinIn />
        </button>
      </div>
    </div>
  </div>

    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} PMD — Pel Marketing
        Distribution. All rights reserved.
      </p>

      <p>
        Printing • Marketing • Digital • Branding
      </p>
    </div>
  </div>
  </footer>


  );
};

export default Footer;
