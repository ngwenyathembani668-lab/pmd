import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaShieldAlt,
    FaUserShield,
    FaLock,
    FaUserCheck,
    FaArrowLeft,
    FaExternalLinkAlt,
} from "react-icons/fa";
import "./PrivatePolicy.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAcceptanceChange = (event) => {
        setIsAccepted(event.target.checked);
    };

    return (<main className="privacy-page">

        <Header />

        <section className="privacy-hero"> <div className="privacy-hero-container"> <span className="privacy-eyebrow">
            PMD • Legal & Privacy </span>


            <h1 className="privacy-title">
                Privacy
                <span> Policy.</span>
            </h1>

            <p className="privacy-intro">
                PMD (Pel Marketing Distribution) respects your privacy and
                is committed to protecting the personal information entrusted
                to us.
            </p>

            <div className="privacy-meta">
                <span>Protection of Personal Information Act</span>
                <span>No. 4 of 2013</span>
            </div>
        </div>
        </section>

        <section className="privacy-content">
            <div className="privacy-container">
                <div className="privacy-document">
                    <div className="privacy-document-intro">
                        <div className="privacy-document-icon">
                            <FaShieldAlt />
                        </div>

                        <div>
                            <h2>Our Commitment to Your Privacy</h2>

                            <p>
                                This Privacy Policy explains how PMD (Pel Marketing
                                Distribution) collects, uses, stores, protects, and
                                otherwise processes personal information when you use
                                our website, contact us, request our services, or
                                otherwise interact with our business.
                            </p>

                            <p>
                                PMD processes personal information responsibly,
                                lawfully, and transparently in accordance with the
                                Protection of Personal Information Act, No. 4 of 2013
                                (POPIA), together with other applicable South African
                                laws.
                            </p>
                        </div>
                    </div>

                    <div className="privacy-section">
                        <div className="privacy-section-number">01</div>

                        <div className="privacy-section-content">
                            <span className="privacy-section-label">
                                Information Collected
                            </span>

                            <h2>What Information We Collect</h2>

                            <p>
                                Depending on the service you request and how you
                                interact with PMD, we may collect personal information
                                that you voluntarily provide to us.
                            </p>

                            <ul className="privacy-list">
                                <li>
                                    <strong>Names:</strong> Your first name, surname, or
                                    other identifying name details.
                                </li>

                                <li>
                                    <strong>Contact details:</strong> Your email address
                                    and telephone or mobile phone number.
                                </li>

                                <li>
                                    <strong>Service information:</strong> Details about
                                    the printing, branding, digital application,
                                    photoshoot, CV, or other service you request.
                                </li>

                                <li>
                                    <strong>Documents and files:</strong> Information
                                    contained in files or designs that you voluntarily
                                    provide for a requested service.
                                </li>

                                <li>
                                    <strong>Enquiry information:</strong> Information
                                    contained in messages, quotations, enquiries, or
                                    other communications you send to PMD.
                                </li>
                            </ul>

                            <p>
                                PMD aims to collect only information that is reasonably
                                necessary for the specific purpose for which it is
                                processed.
                            </p>
                        </div>
                    </div>

                    <div className="privacy-section">
                        <div className="privacy-section-number">02</div>

                        <div className="privacy-section-content">
                            <span className="privacy-section-label">
                                Purpose of Collection
                            </span>

                            <h2>Why We Use Your Information</h2>

                            <p>
                                PMD uses personal information for legitimate business
                                and service-related purposes, including where
                                applicable:
                            </p>

                            <ul className="privacy-list">
                                <li>
                                    Responding to enquiries, requests, and quotations.
                                </li>

                                <li>
                                    Providing printing, photocopying, lamination,
                                    business card, flyer, and banner services.
                                </li>

                                <li>
                                    Providing T-shirt and clothing printing and other
                                    creative branding services.
                                </li>

                                <li>
                                    Assisting customers with online applications,
                                    including NSFAS and university applications.
                                </li>

                                <li>
                                    Creating CVs, resumes, documents, and other
                                    customer-requested materials.
                                </li>

                                <li>
                                    Arranging photoshoots, car branding, and related
                                    creative services.
                                </li>

                                <li>
                                    Communicating with customers about their requested
                                    services and transactions.
                                </li>

                                <li>
                                    Maintaining appropriate business, administrative,
                                    accounting, and record-keeping processes.
                                </li>
                            </ul>

                            <p>
                                Where POPIA requires a lawful basis or consent for a
                                particular processing activity, PMD will process the
                                information in accordance with the applicable
                                requirement. Personal information will not be used for
                                unrelated purposes that are incompatible with the
                                purpose for which it was collected, unless permitted
                                by law.
                            </p>
                        </div>
                    </div>

                    <div className="privacy-section">
                        <div className="privacy-section-number">03</div>

                        <div className="privacy-section-content">
                            <span className="privacy-section-label">
                                Security Safeguards
                            </span>

                            <h2>How We Protect Your Information</h2>

                            <p>
                                PMD takes reasonable and appropriate technical and
                                organisational measures to protect personal
                                information against loss, damage, unauthorised
                                access, disclosure, alteration, or destruction.
                            </p>

                            <div className="privacy-safeguards">
                                <div className="privacy-safeguard">
                                    <FaLock />

                                    <div>
                                        <h3>Controlled Access</h3>
                                        <p>
                                            Access to personal information is limited to
                                            persons who require it for legitimate business
                                            or service purposes.
                                        </p>
                                    </div>
                                </div>

                                <div className="privacy-safeguard">
                                    <FaShieldAlt />

                                    <div>
                                        <h3>Reasonable Safeguards</h3>
                                        <p>
                                            PMD takes reasonable steps to protect information
                                            handled through its business and digital
                                            processes.
                                        </p>
                                    </div>
                                </div>

                                <div className="privacy-safeguard">
                                    <FaUserShield />

                                    <div>
                                        <h3>Responsible Handling</h3>
                                        <p>
                                            Personal information is handled only for
                                            legitimate purposes connected to PMD's services
                                            and operations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Where PMD uses third-party service providers or
                                operators to process personal information on its
                                behalf, PMD will take appropriate steps to require
                                reasonable protection of that information, subject to
                                applicable law and the relevant contractual
                                arrangements.
                            </p>
                        </div>
                    </div>

                    <div className="privacy-section">
                        <div className="privacy-section-number">04</div>

                        <div className="privacy-section-content">
                            <span className="privacy-section-label">
                                Data Subject Rights
                            </span>

                            <h2>Your Rights Under POPIA</h2>

                            <p>
                                Subject to applicable legal requirements and
                                limitations, you have rights in relation to your
                                personal information. These may include the right to:
                            </p>

                            <div className="privacy-rights">
                                <div className="privacy-right">
                                    <div className="privacy-right-icon">
                                        <FaUserCheck />
                                    </div>

                                    <div>
                                        <h3>Access</h3>
                                        <p>
                                            Request access to personal information that PMD
                                            holds about you, subject to applicable legal
                                            requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="privacy-right">
                                    <div className="privacy-right-icon">
                                        <FaUserCheck />
                                    </div>

                                    <div>
                                        <h3>Correction</h3>
                                        <p>
                                            Request correction or updating of personal
                                            information that is inaccurate, misleading, or
                                            incomplete.
                                        </p>
                                    </div>
                                </div>

                                <div className="privacy-right">
                                    <div className="privacy-right-icon">
                                        <FaUserCheck />
                                    </div>

                                    <div>
                                        <h3>Deletion</h3>
                                        <p>
                                            Request deletion or removal of personal
                                            information where applicable and where there is
                                            no lawful reason for PMD to retain it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Requests relating to personal information should be
                                directed to PMD using the official contact details
                                published on our website. PMD may need to verify the
                                identity of the requester before processing a request
                                and may retain information where required or permitted
                                by law.
                            </p>
                        </div>
                    </div>

                    <div className="privacy-section">
                        <div className="privacy-section-number">05</div>

                        <div className="privacy-section-content">
                            <span className="privacy-section-label">
                                Complaints & Regulatory Oversight
                            </span>

                            <h2>Right to Complain</h2>

                            <p>
                                If you believe that PMD has processed your personal
                                information in a manner that infringes your rights
                                under POPIA, you are encouraged to first contact PMD
                                so that we can investigate and attempt to resolve your
                                concern.
                            </p>

                            <p>
                                You also have the right to lodge a complaint with the
                                Information Regulator (South Africa), the independent
                                regulator responsible for monitoring and enforcing
                                compliance with POPIA.
                            </p>

                            <div className="regulator-card">
                                <div className="regulator-card-icon">
                                    <FaShieldAlt />
                                </div>

                                <div className="regulator-card-content">
                                    <h3>Information Regulator (South Africa)</h3>

                                    <p>
                                        <strong>Telephone:</strong> 010 023 5200
                                    </p>

                                    <p>
                                        <strong>Toll Free:</strong> 0800 017 160
                                    </p>

                                    <p>
                                        <strong>Email:</strong>{" "}
                                        POPIAComplaints@inforegulator.org.za
                                    </p>

                                    <a
                                        href="https://inforegulator.org.za/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="regulator-link"
                                    >
                                        Visit Information Regulator website
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>

                            <p>
                                The Information Regulator provides a process for
                                lodging POPIA complaints where a person believes that
                                their personal information rights have been
                                infringed.
                            </p>
                        </div>
                    </div>

                    <div className="privacy-section privacy-section-last">
                        <div className="privacy-section-number">06</div>

                        <div className="privacy-section-content">
                            <span className="privacy-section-label">
                                Policy Administration
                            </span>

                            <h2>Updates to This Policy</h2>

                            <p>
                                PMD may update this Privacy Policy from time to time
                                to reflect changes in our services, information
                                processing practices, technology, or applicable legal
                                requirements.
                            </p>

                            <p>
                                Where appropriate, material changes will be
                                communicated through our website or other suitable
                                channels. We encourage visitors and customers to
                                review this page periodically.
                            </p>

                            <div className="privacy-disclaimer">
                                <strong>Important notice:</strong>
                                <p>
                                    This Privacy Policy is intended to provide general
                                    information about PMD's approach to personal
                                    information protection. It should be reviewed and
                                    finalised against PMD's actual processing activities,
                                    retention practices, third-party operators,
                                    Information Officer details, and applicable legal
                                    requirements before publication as the business's
                                    final legal policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="privacy-acceptance">
                        <label
                            className={`privacy-checkbox-card ${isAccepted
                                ? "privacy-checkbox-card-active"
                                : ""
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={isAccepted}
                                onChange={handleAcceptanceChange}
                            />

                            <span className="privacy-custom-checkbox">
                                {isAccepted && <FaUserCheck />}
                            </span>

                            <span className="privacy-checkbox-content">
                                <strong>Privacy Policy Acknowledgement</strong>
                                <span>
                                    I confirm that I have read and understood PMD's
                                    privacy and data protection policy.
                                </span>
                            </span>
                        </label>

                        {isAccepted && (
                            <div className="privacy-confirmation">
                                Thank you for confirming your alignment with PMD data
                                protection policies.
                            </div>
                        )}
                    </div>

                    <div className="privacy-footer-navigation">
                        <Link to="/" className="privacy-home-link">
                            <FaArrowLeft />
                            <span>Return to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </main>


    );
};

export default PrivacyPolicyPage;
