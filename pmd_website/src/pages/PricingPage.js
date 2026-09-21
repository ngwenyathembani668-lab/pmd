import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaPrint,
  FaTshirt,
  FaArrowRight,
  FaCheck,
  FaTag,
} from "react-icons/fa";
import "./PricingPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pricingData = {
  "Documents & Digital": [
    {
      id: 1,
      name: "Photocopying",
      description: "Black & white photocopying for documents and forms.",
      price: "From R4",
      unit: "per page",
      type: "fixed",
      icon: <FaFileAlt />,
    },
    {
      id: 2,
      name: "Colour Printing",
      description: "High-quality colour printing for documents and projects.",
      price: "From R8",
      unit: "per page",
      type: "fixed",
      icon: <FaPrint />,
    },
    {
      id: 3,
      name: "Lamination",
      description: "Protect important documents with professional lamination.",
      price: "From R10",
      unit: "per page",
      type: "fixed",
      icon: <FaFileAlt />,
    },
    {
      id: 4,
      name: "Digital & ID Photos",
      description: "Professional digital and ID photo printing.",
      price: "From R30",
      unit: "per set (6 photos)",
      type: "fixed",
      icon: <FaFileAlt />,
    },
    {
      id: 5,
      name: "CV & Resume Creation",
      description: "Professional CV formatting and resume creation.",
      price: "From R30",
      unit: "per page",
      type: "fixed",
      icon: <FaFileAlt />,
    },
    {
      id: 6,
      name: "Online Applications",
      description: "Guided assistance with NSFAS and university applications.",
      price: "From R100",
      unit: "per application",
      type: "fixed",
      icon: <FaFileAlt />,
    },
  ],

  "Print & Marketing": [
    {
      id: 7,
      name: "Business Cards",
      description: "Professional business cards for individuals and businesses.",
      price: "From R120",
      unit: "per batch",
      type: "fixed",
      icon: <FaPrint />,
    },
    {
      id: 8,
      name: "Flyers",
      description: "Promotional flyers designed for your business or event.",
      price: "From R300",
      unit: "per batch (500)",
      type: "fixed",
      icon: <FaPrint />,
    },
    {
      id: 9,
      name: "Banners",
      description: "Large-format banners for events, promotions and businesses.",
      price: "From R350",
      unit: "per banner",
      type: "custom",
      icon: <FaPrint />,
    },
    {
      id: 10,
      name: "Photo Printing",
      description: "High-quality photo printing in various sizes.",
      price: "From R30",
      unit: "per photo",
      type: "fixed",
      icon: <FaPrint />,
    },
    {
      id: 11,
      name: "Custom Printing",
      description: "Printing solutions tailored to your specific requirements.",
      price: "From R50",
      unit: "Custom",
      type: "custom",
      icon: <FaPrint />,
    },
  ],

  "Creative Branding": [
    {
      id: 12,
      name: "T-Shirt & Clothing Printing",
      description: "Custom printed clothing for individuals, teams and businesses.",
      price: "From R150",
      unit: "per item",
      type: "custom",
      icon: <FaTshirt />,
    },
    {
      id: 13,
      name: "Car Branding",
      description: "Professional vehicle branding designed around your brand.",
      price: "From R1,500",
      unit: "Custom",
      type: "custom",
      icon: <FaPrint />,
    },
    {
      id: 14,
      name: "Photoshoots",
      description: "Professional photography for personal and business branding.",
      price: "From R500",
      unit: "per session",
      type: "custom",
      icon: <FaFileAlt />,
    },
    {
      id: 15,
      name: "Custom Branding",
      description: "Creative branding solutions tailored to your business.",
      price: "From R250",
      unit: "Custom",
      type: "custom",
      icon: <FaTag />,
    },
  ],
};

const categoryIcons = {
  "Documents & Digital": <FaFileAlt />,
  "Print & Marketing": <FaPrint />,
  "Creative Branding": <FaTshirt />,
};

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Documents & Digital"
  );

  const navigate = useNavigate();

  const handleEnquiry = (serviceName) => {
    navigate("/contact", {
      state: {
        service: serviceName,
      },
    });
  };

  const activePrices = pricingData[activeCategory];

  return (
    <>

    <Header />
    <section className="pricing-section">

        

      <div className="pricing-container">
        <div className="pricing-section-header">
          <span className="pricing-section-label">
            PRICING
          </span>

          <h2 className="pricing-section-heading">
            Simple & Transparent Pricing
          </h2>

          <p className="pricing-section-subtitle">
            Choose a service category to view our starting prices
            and available options.
          </p>
        </div>

        <div className="pricing-header">
          <span className="pricing-eyebrow">
            Our Services
          </span>

          <h2 className="pricing-title">
            Our <span>Pricing.</span>
          </h2>

          <p className="pricing-description">
            Clear starting prices for our most popular services.
            For customised projects, contact PMD for a personalised
            quotation.
          </p>
        </div>

        <div
          className="pricing-tabs"
          role="tablist"
          aria-label="Pricing categories"
        >
          {Object.keys(pricingData).map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`pricing-tab ${
                activeCategory === category
                  ? "pricing-tab-active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="pricing-tab-icon">
                {categoryIcons[category]}
              </span>

              <span>{category}</span>
            </button>
          ))}
        </div>

        <div className="pricing-list">
          {activePrices.map((item) => (
            <article
              className="pricing-card"
              key={item.id}
            >
              <div className="pricing-card-main">
                <div className="pricing-icon">
                  {item.icon}
                </div>

                <div className="pricing-info">
                  <div className="pricing-name-row">
                    <h3>{item.name}</h3>

                    {item.type === "custom" && (
                      <span className="pricing-custom-tag">
                        Custom Quote Required
                      </span>
                    )}
                  </div>

                  <p>{item.description}</p>
                </div>
              </div>

              <div className="pricing-card-price">
                <div className="pricing-amount">
                  <span>{item.price}</span>
                  <small>{item.unit}</small>
                </div>

                <button
                  type="button"
                  className="pricing-action"
                  onClick={() => handleEnquiry(item.name)}
                >
                  {item.type === "custom"
                    ? "Enquire"
                    : "Order This"}

                  <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="pricing-note">
          <FaCheck />

          <p>
            Prices shown are starting prices and may vary depending
            on quantity, size, materials, design requirements and
            project complexity.
          </p>
        </div>
      </div>
    </section>

    <Footer />

    </>
  );
};

export default PricingSection;