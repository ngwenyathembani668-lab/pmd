import React, { useState } from "react";
import {
  FaFileInvoice,
  FaPrint,
  FaCamera,
} from "react-icons/fa";
import "./PillarCategories.css";

const PillarCategories = () => {
  const [activePillar, setActivePillar] = useState(null);

  const pillars = [
    {
      id: 1,
      name: "Digital & Documents",
      icon: FaFileInvoice,
      description:
        "Fast and reliable digital and document services to help you get things done.",
      services: [
        "CVs",
        "NSFAS Applications",
        "University Online Applications",
      ],
    },
    {
      id: 2,
      name: "Print & Marketing",
      icon: FaPrint,
      description:
        "Professional printing and marketing solutions for individuals and businesses.",
      services: [
        "Flyers",
        "Banners",
        "Business Cards",
        "Lamination",
        "Photo Printing",
      ],
    },
    {
      id: 3,
      name: "Creative Branding",
      icon: FaCamera,
      description:
        "Creative branding solutions designed to make your personal or business brand stand out.",
      services: [
        "T-Shirt Printing",
        "Car Branding",
        "Photoshoots",
      ],
    },
  ];

  const handlePillarClick = (categoryName) => {
    setActivePillar(categoryName);

    console.log("PMD Pillar Selected: ", categoryName);
  };

  return (
    <section className="pillars-section">
      <div className="pillars-container">
        {/* Section Header */}
        <div className="pillars-header">
          <span className="pillars-eyebrow">
            What We Do
          </span>

          <h2 className="pillars-title">
            Everything You Need,
            <span> All in One Place.</span>
          </h2>

          <p className="pillars-description">
            From essential digital applications to professional printing and
            creative branding, PMD provides practical solutions for your
            personal and business needs.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="pillars-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.id}
                className={`pillar-card ${
                  activePillar === pillar.name
                    ? "pillar-card-active"
                    : ""
                }`}
                onClick={() => handlePillarClick(pillar.name)}
              >
                {/* Card Header */}
                <div className="pillar-card-header">
                  <div className="pillar-icon">
                    <Icon />
                  </div>

                  <span className="pillar-number">
                    0{pillar.id}
                  </span>
                </div>

                {/* Card Content */}
                <div className="pillar-card-content">
                  <h3 className="pillar-card-title">
                    {pillar.name}
                  </h3>

                  <p className="pillar-card-description">
                    {pillar.description}
                  </p>

                  {/* Services */}
                  <ul className="pillar-services">
                    {pillar.services.map((service) => (
                      <li key={service}>
                        <span className="service-dot"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Indicator */}
                <div className="pillar-card-footer">
                  <span>
                    Explore services
                  </span>

                  <span className="pillar-arrow">
                    →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarCategories;

