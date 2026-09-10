import React, { useState } from "react";
import {
    FaRocket,
    FaAward,
    FaUserShield,
    FaChevronDown,
} from "react-icons/fa";
import "./WhyChoosePMD.css";

const WhyChoosePMD = () => {
    const [activeBenefit, setActiveBenefit] = useState(null);

    const benefits = [
        {
            id: 1,
            title: "Fast Turnaround",
            icon: FaRocket,
            description:
                "Get your work completed quickly without compromising on quality. PMD is built to handle urgent applications, flyers, documents, and everyday business needs when time matters.",
        },
        {
            id: 2,
            title: "Premium Print Quality",
            icon: FaAward,
            description:
                "Make a lasting impression with sharp, professional-quality printing. From business branding and marketing materials to photoshoots, we focus on delivering results that represent you well.",
        },
        {
            id: 3,
            title: "Expert Guided Support",
            icon: FaUserShield,
            description:
                "Never feel stuck when completing important online applications. Our team provides practical guidance with NSFAS, university applications, digital documents, and other administrative services.",
        },
    ];

    const handleBenefitClick = (benefitId) => {
        setActiveBenefit((currentId) =>
            currentId === benefitId ? null : benefitId
        );
    };

    return (<section className="why-choose-pmd"> <div className="why-choose-container"> <div className="why-choose-header"> <span className="why-choose-eyebrow">Why Choose PMD</span>


        <h2 className="why-choose-title">
            Simple Solutions.
            <span> Professional Results.</span>
        </h2>

        <p className="why-choose-description">
            Whether you need something printed, branded, designed, or help
            completing an online application, PMD combines speed, quality,
            and hands-on support under one roof.
        </p>
    </div>

        <div className="benefits-grid">
            {benefits.map((benefit) => {
                const Icon = benefit.icon;
                const isActive = activeBenefit === benefit.id;

                return (
                    <article
                        key={benefit.id}
                        className={`benefit-card ${isActive ? "benefit-card-active" : ""
                            }`}
                    >
                        <button
                            type="button"
                            className="benefit-card-trigger"
                            onClick={() => handleBenefitClick(benefit.id)}
                            aria-expanded={isActive}
                        >
                            <div className="benefit-icon">
                                <Icon />
                            </div>

                            <div className="benefit-heading">
                                <span className="benefit-number">
                                    0{benefit.id}
                                </span>

                                <h3>{benefit.title}</h3>
                            </div>

                            <span
                                className={`benefit-chevron ${isActive ? "benefit-chevron-active" : ""
                                    }`}
                            >
                                <FaChevronDown />
                            </span>
                        </button>

                        <div
                            className={`benefit-details ${isActive ? "benefit-details-open" : ""
                                }`}
                        >
                            <p>{benefit.description}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    </div>
    </section>


    );
};

export default WhyChoosePMD;
