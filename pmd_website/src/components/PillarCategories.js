import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileInvoice,
  FaPrint,
  FaCamera,
  FaArrowRight,
} from "react-icons/fa";
import "./PillarCategories.css";

const PillarCategories = () => {
  const [activePillar, setActivePillar] = useState(null);
  const navigate = useNavigate();

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

  const handlePillarClick = (event, pillar) => {
    event.preventDefault();


    setActivePillar(pillar.name);

    console.log("PMD Pillar Selected: ", pillar.name);

    navigate("/services", {
      state: {
        category: pillar.name,
      },
    });


  };

  return (<section className="pillars-section"> <div className="pillars-container"> <div className="pillars-header"> <span className="pillars-eyebrow">What We Do</span>


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

    <div className="pillars-grid">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        const isActive = activePillar === pillar.name;

        return (
          <article
            key={pillar.id}
            className={`pillar-card ${isActive ? "pillar-card-active" : ""
              }`}
          >
            <div className="pillar-card-header">
              <div className="pillar-icon">
                <Icon />
              </div>

              <span className="pillar-number">
                0{pillar.id}
              </span>
            </div>

            <div className="pillar-card-content">
              <h3 className="pillar-card-title">
                {pillar.name}
              </h3>

              <p className="pillar-card-description">
                {pillar.description}
              </p>

              <ul className="pillar-services">
                {pillar.services.map((service) => (
                  <li key={service}>
                    <span className="service-dot"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="pillar-card-footer"
              onClick={(event) =>
                handlePillarClick(event, pillar)
              }
            >
              <span>View All Services</span>
              <FaArrowRight className="pillar-arrow" />
            </button>
          </article>
        );
      })}
    </div>
  </div>
  </section>


  );
};

export default PillarCategories;
