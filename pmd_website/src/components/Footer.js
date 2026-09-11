// ```jsx id="4w8n2k"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import "./Footer.css";

const socialLinks = {
  facebook: "https://www.facebook.com/YOUR_PMD_PAGE",
  instagram: "https://www.instagram.com/YOUR_PMD_ACCOUNT",
  whatsapp: "https://wa.me/YOUR_WHATSAPP_NUMBER",
  tiktok: "https://www.tiktok.com/@YOUR_PMD_ACCOUNT",
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (
      !trimmedEmail ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".")
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    alert("Thank you for subscribing to PMD updates!");
    setEmail("");
    setError("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            PMD
          </Link>

          <p className="footer-description">
            Pel Marketing Distribution provides reliable printing,
            marketing, branding, and digital application services for
            individuals and businesses.
          </p>

          <div className="footer-hours">
            <span className="footer-hours-title">
              Business Hours
            </span>

            <p>Monday – Friday: 08:00 – 18:00</p>
            <p>Saturday: 08:00 – 14:00</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="footer-socials">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="PMD on Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="PMD on Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Contact PMD on WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="PMD on TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="footer-links-column">
          <h3 className="footer-column-title">
            Quick Links
          </h3>

          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/services">
                Services & Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy">
                Privacy Policy (POPIA)
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <div className="footer-newsletter-box">
            <span className="footer-newsletter-eyebrow">
              Stay Connected
            </span>

            <h3 className="footer-newsletter-title">
              Get PMD Updates.
            </h3>

            <p className="footer-newsletter-text">
              Subscribe for service updates, business information,
              and occasional PMD offers.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (error) {
                    setError("");
                  }
                }}
                placeholder="Enter your email"
                aria-label="Email address"
                aria-invalid={Boolean(error)}
              />

              <button type="submit">
                Subscribe
              </button>
            </form>

            {error && (
              <p className="newsletter-error">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} PMD (Pel Marketing
            Distribution). All rights reserved.
          </p>

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

