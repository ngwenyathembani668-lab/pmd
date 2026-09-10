import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import "./Services.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Services = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            name: "Photo Copying & Printing",
            category: "Print & Marketing",
            description:
                "Fast, reliable photocopying and printing for documents, forms, assignments, and everyday business needs.",
            image:
                "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 2,
            name: "Lamination",
            category: "Print & Marketing",
            description:
                "Protect and preserve important documents, certificates, menus, notices, and other printed materials.",
            image:
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 3,
            name: "Business Cards",
            category: "Print & Marketing",
            description:
                "Professional business cards designed to help you make a strong and memorable first impression.",
            image:
                "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 4,
            name: "Digital & ID Photo Printing",
            category: "Print & Marketing",
            description:
                "High-quality digital and ID photo printing suitable for applications, identification, profiles, and personal use.",
            image:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 5,
            name: "Car Branding",
            category: "Creative Branding",
            description:
                "Turn your vehicle into a professional mobile advertisement with eye-catching custom branding.",
            image:
                "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 6,
            name: "Photoshoot",
            category: "Creative Branding",
            description:
                "Professional photoshoots for personal branding, business profiles, events, products, and special occasions.",
            image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 7,
            name: "T-Shirt & Clothing Printing",
            category: "Creative Branding",
            description:
                "Create custom printed clothing for businesses, teams, events, organisations, and personal projects.",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 8,
            name: "Online Applications (NSFAS/University)",
            category: "Digital & Docs",
            description:
                "Get practical assistance with NSFAS, university applications, online forms, uploads, and digital submissions.",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 9,
            name: "CV & Resume Creation",
            category: "Digital & Docs",
            description:
                "Professional CV and resume creation designed to present your skills, experience, and qualifications clearly.",
            image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 10,
            name: "Flyers & Banners",
            category: "Print & Marketing",
            description:
                "Professional promotional flyers and banners that help businesses, events, and organisations get noticed.",
            image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        },
    ];

    const categories = [
        "All Services",
        "Digital & Docs",
        "Print & Marketing",
        "Creative Branding",
    ];

    const passedCategory = location.state?.category;

    const normalizedCategory =
        passedCategory === "Digital & Documents"
            ? "Digital & Docs"
            : passedCategory;

    const [activeCategory, setActiveCategory] = useState(
        categories.includes(normalizedCategory)
            ? normalizedCategory
            : "All Services"
    );

    const filteredServices =
        activeCategory === "All Services"
            ? services
            : services.filter(
                (service) => service.category === activeCategory
            );

    const handleCategoryChange = (event, category) => {
        event.preventDefault();
        setActiveCategory(category);
    };

    const handleEnquire = (event, serviceName) => {
        event.preventDefault();


        navigate("/contact", {
            state: {
                service: serviceName,
            },
        });


    };

    return (

    
    
    <main className="services-page">
        
        <Header />
        
         <section className="services-hero"> <div className="services-hero-container"> <span className="services-eyebrow">
        PMD • Our Services </span>


        <h1 className="services-title">
            Professional Services.
            <span> Practical Solutions.</span>
        </h1>

        <p className="services-intro">
            Explore PMD's complete range of printing, digital,
            marketing, and creative branding services. Choose a
            category to find exactly what you need.
        </p>
    </div>
    </section>

        <section className="services-content">
            <div className="services-container">
                <div
                    className="services-filter"
                    role="group"
                    aria-label="Filter services"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`services-filter-button ${activeCategory === category
                                    ? "services-filter-button-active"
                                    : ""
                                }`}
                            onClick={(event) =>
                                handleCategoryChange(event, category)
                            }
                            aria-pressed={activeCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="services-results-header">
                    <div>
                        <span className="services-results-eyebrow">
                            Showing Services
                        </span>

                        <h2 className="services-results-title">
                            {activeCategory}
                        </h2>
                    </div>

                    <span className="services-count">
                        {filteredServices.length}{" "}
                        {filteredServices.length === 1
                            ? "Service"
                            : "Services"}
                    </span>
                </div>

                <div className="services-grid">
                    {filteredServices.map((service) => (
                        <article className="service-card" key={service.id}>
                            <div className="service-image-wrapper">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="service-image"
                                />

                                <span className="service-category">
                                    {service.category}
                                </span>
                            </div>

                            <div className="service-card-content">
                                <div className="service-card-top">
                                    <span className="service-number">
                                        0{service.id}
                                    </span>

                                    <span className="service-check">
                                        <FaCheck />
                                    </span>
                                </div>

                                <h3 className="service-name">
                                    {service.name}
                                </h3>

                                <p className="service-description">
                                    {service.description}
                                </p>

                                <button
                                    type="button"
                                    className="service-enquire-button"
                                    onClick={(event) =>
                                        handleEnquire(event, service.name)
                                    }
                                >
                                    <span>Enquire Now</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredServices.length === 0 && (
                    <div className="services-empty">
                        <h3>No services found</h3>
                        <p>
                            There are currently no services available in this
                            category.
                        </p>
                    </div>
                )}
            </div>
        </section>

        <Footer />
    </main>

    


    );
};

export default Services;
