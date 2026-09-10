import React, { useState } from "react";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaArrowRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
const [email, setEmail] = useState("");

const handleSubscribe = (event) => {
event.preventDefault();


if (!email.trim()) {
  alert("Please enter your email address.");
  return;
}

alert("Thank you for subscribing to PMD updates!");
setEmail("");


};

return ( <footer className="footer"> <div className="footer-container"> <div className="footer-grid"> <div className="footer-brand"> <p href="#" className="footer-logo">
PMD </p>


        <p className="footer-description">
          Pel Marketing Distribution provides reliable printing,
          marketing, digital application, and creative branding solutions
          for individuals and businesses.
        </p>

        <div className="footer-hours">
          <h4>Business Hours</h4>
          <p>Monday – Friday: 08:00 – 17:00</p>
          <p>Saturday: 09:00 – 14:00</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="footer-links-column">
        <h3 className="footer-column-title">Quick Links</h3>

        <nav className="footer-links">
          <p href="#">Home</p>
          <p href="#">Services</p>
          <p href="#">Gallery</p>
          <p href="#">Contact Us</p>
        </nav>
      </div>

      <div className="footer-newsletter">
        <h3 className="footer-column-title">Stay Updated</h3>

        <p className="footer-newsletter-text">
          Subscribe to receive PMD updates, service announcements, and
          special offers.
        </p>

        <form
          className="newsletter-form"
          onSubmit={handleSubscribe}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
          />

          <button type="submit" aria-label="Subscribe to newsletter">
            <span>Subscribe</span>
            <FaArrowRight />
          </button>
        </form>

        <div className="footer-socials">
          <button
            type="button"
            aria-label="Facebook"
            onClick={() => console.log("PMD Social Click: Facebook")}
          >
            <FaFacebookF />
          </button>

          <button
            type="button"
            aria-label="Instagram"
            onClick={() => console.log("PMD Social Click: Instagram")}
          >
            <FaInstagram />
          </button>

          <button
            type="button"
            aria-label="LinkedIn"
            onClick={() => console.log("PMD Social Click: LinkedIn")}
          >
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>
        © {new Date().getFullYear()} PMD — Pel Marketing Distribution.
        All rights reserved.
      </p>

      <p>Printing • Marketing • Digital • Branding</p>
    </div>
  </div>
</footer>


);
};

export default Footer;
