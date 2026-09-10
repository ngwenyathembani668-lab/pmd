import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreServices = (event) => {
    event.preventDefault();
    navigate("/services");
  };

  const handleGetQuote = (event) => {
    event.preventDefault();
    navigate("/contact");
  };

  return (<section className="hero" aria-labelledby="hero-heading"> <div className="hero-container"> <div className="hero-content"> <span className="hero-eyebrow">
    PMD • Pel Marketing Distribution </span>


    <h1 id="hero-heading" className="hero-heading">
      Your All-in-One Hub for Printing, Marketing, and Digital
      Applications.
    </h1>

    <p className="hero-subheadline">
      PMD delivers fast, high-quality solutions for branding, document
      services, and online applications. From professional printing to
      digital support, we make your everyday business needs simple.
    </p>

    <div className="hero-actions">
      <button
        type="button"
        className="hero-button hero-button-primary"
        onClick={handleExploreServices}
      >
        Explore Services
      </button>

      <button
        type="button"
        className="hero-button hero-button-secondary"
        onClick={handleGetQuote}
      >
        Get a Quote
      </button>
    </div>
  </div>

    <div className="hero-visual">
      <div className="hero-visual-card">
        <div className="visual-topbar">
          <div className="visual-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="visual-label">PMD Workspace</span>
        </div>

        <div className="visual-content">
          <div className="visual-badge">PRINT • BRAND • APPLY</div>

          <div className="visual-title">
            <span>Creative</span>
            <strong>Solutions.</strong>
          </div>

          <div className="visual-grid">
            <div className="visual-tile visual-tile-print">
              <span className="visual-tile-icon">✦</span>
              <span>Print</span>
            </div>

            <div className="visual-tile visual-tile-brand">
              <span className="visual-tile-icon">▣</span>
              <span>Brand</span>
            </div>

            <div className="visual-tile visual-tile-digital">
              <span className="visual-tile-icon">↗</span>
              <span>Digital</span>
            </div>
          </div>

          <div className="visual-bottom">
            <span>Everything you need, in one place.</span>
            <span className="visual-arrow">↗</span>
          </div>
        </div>
      </div>

      <div className="visual-accent visual-accent-one"></div>
      <div className="visual-accent visual-accent-two"></div>
    </div>
  </div>
  </section>


  );
};

export default Hero;
